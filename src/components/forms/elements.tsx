import ShortText from "@/components/forms/form-controls/short-text";

import { ELEMENT_TYPE, RATING_ICON } from "@/components/forms/constants";

export default ({ data, error, onChange, disabled }: IElementItem) => {
  const { type, config, id, isRequired, name } = data;
  switch (type) {
    // case ELEMENT_TYPE.HEADER:
    //   return (
    //     <Header {...config} />
    //   );
    // case ELEMENT_TYPE.SUB_HEADER:
    //   return (
    //     <SubHeader  {...config} />
    //   );
    // case ELEMENT_TYPE.PARAGRAPH:
    //   return (
    //     <Paragraph {...config} />
    //   );
    case ELEMENT_TYPE.SHORT_TEXT:
      return (
        <ShortText
          {...config}
          isRequired={isRequired || config?.isRequired || false}
          id={id || name}
          error={error || null}
          onChange={onChange || null}
          disabled={disabled || false}
        />
      );
    // case ELEMENT_TYPE.LONG_TEXT:
    //   return (
    //     <LongText
    //       {...config}
    //       isRequired={isRequired || config?.isRequired || false}
    //       id={id || name}
    //       showCount={true}
    //       error={error || null}
    //       onChange={onChange || null}
    //       disabled={disabled || false}
    //     />
    //   );
    // case ELEMENT_TYPE.STAR_RATING:
    //   let currentIcon = config?.icon;
    //   switch (config?.icon) {
    //     case RATING_ICON.STAR:
    //       // currentIcon = <StarIcon fill="currentColor" className="h-12 w-12" />
    //       //config.icon = <MSurveyStar className="h-12 w-12" />
    //       break;
    //     case RATING_ICON.HEART:
    //       // currentIcon = <HeartIcon fill="currentColor" className="h-12 w-12" />
    //       break;
    //     default:
    //       currentIcon = 'custom'
    //       break;
    //   }


    //   return (
    //     <StarRating
    //       {...config}
    //       ratingAmount={config?.ratingAmount}
    //       defaultValue={config?.defaultValue}
    //       icon={currentIcon}
    //       color={config?.color}
    //       label={config?.label}
    //       iconSize={config?.iconSize}
    //       iconCustoms={config?.iconCustoms}
    //       isRequired={isRequired || config?.isRequired || false}
    //       id={id || name}
    //       error={error || null}
    //       onChange={onChange || null}
    //       disabled={disabled || false}
    //     />
    //   )

    case "select":
      return <>select</>;
    case "radio":
      return <>radio</>;
    case "checkbox":
      return <>Checkbox</>;
    default:
      return <></>;
  }
};