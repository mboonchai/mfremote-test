import { useMemo, useEffect, useState } from "react"

interface IBaseField {
  id?: string;
  name?: string;
  label?: string;
  alignment?: string;
  placeholder?: string;
  subLabel?: string;
  className?: string;
  isRequired?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: (value: any) => void;
}

interface IShortText extends IBaseField {
  defaultValue?: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
}


const ALIGNMENT = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
}

const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ')
}

function isUndefined(value: any) {
  return typeof value === 'undefined';
}

export default ({ id, label, placeholder, className, type, alignment, defaultValue, isRequired, subLabel, minLength, maxLength, disabled, error, onChange }: IShortText) => {
  const [value, setValue] = useState<string>(defaultValue || '');
  const handleChange = (value: any) => {
    setValue(value);
    if (onChange) onChange(value)
  }

  const currentAlignment = useMemo(() => {
    if (alignment === ALIGNMENT.LEFT) {
      return "flex-row";
    }
    if (alignment === ALIGNMENT.CENTER) {
      return "flex-col items-center";
    }
    if (alignment === ALIGNMENT.RIGHT) {
      return "flex-row-reverse";
    }
    return "flex-col";
  }, [alignment])

  useEffect(() => {
    if (!isUndefined(defaultValue)) {
      handleChange(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className={classNames(
      "form-short-text",
      "flex flex-col w-full",
      className
    )}>
      <div className={classNames(
        "form-short-text-content",
        "flex w-full gap-2 flex-wrap md:flex-nowrap",
        currentAlignment,
      )}>
        {label && (
          <label className="form-short-text__label font-bold flex-shrink-0" htmlFor={id}>
            {label} {isRequired && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="form-short-text-field w-full">
          <input
            id={id}
            name={id}
            type={type || 'text'}
            className={classNames(
              "form-short-text-field__input",
              "block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400",
              "disabled:bg-gray-200 read-only:bg-gray-200 disabled:opacity-60 disabled:pointer-events-none disabled:focus:ring-transparent",
              error ? "ring-red-300 focus:ring-red-600 text-red-600" : "ring-gray-300 focus:ring-control-600 text-gray-900"
            )}
            placeholder={placeholder}
            disabled={disabled}
            onChange={(e) => handleChange(e.target.value)}
            onKeyUp={(e: any) => handleChange(e.target.value)}
            minLength={minLength}
            maxLength={maxLength || 500}
            value={value || ''}
            required={isRequired}
          />
          {(error || subLabel) &&
            <div className={classNames(
              "form-short-text-bottom",
              "flex mt-2",
            )}>
              {error &&
                <p className={classNames(
                  "form-short-text-bottom__error form__error",
                  "text-xs text-red-500 "
                )}>{error}</p>
              }
              {(!error && subLabel) &&
                <p className={classNames(
                  "form-short-text-bottom__hint form__hint",
                  "text-xs text-gray-500"
                )}>{subLabel}</p>
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}

