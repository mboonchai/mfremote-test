import { ELEMENT_SETTING_TYPE, PREFIX_FILE } from "./constants";

export const getElementSettings = (settings: any, elementsConfig: any) => {
  return settings.map((setting: any) => {
    return getElementSetting({
      type: setting,
      value: elementsConfig?.[setting] || elementsConfig?.[setting] == 0 ? elementsConfig?.[setting] : ""
    })
  })
}
export const getElementSetting = ({
  label, id, type, value
}: any) => {

  const settings = {
    [ELEMENT_SETTING_TYPE.NAME]: {
      label: label || 'Name',
      id: id || ELEMENT_SETTING_TYPE.NAME,
      type: ELEMENT_SETTING_TYPE.TEXT,
    },
    [ELEMENT_SETTING_TYPE.DESCRIPTION]: {
      label: label || 'Description',
      id: id || ELEMENT_SETTING_TYPE.DESCRIPTION,
      type: ELEMENT_SETTING_TYPE.TEXTAREA,
    },
    [ELEMENT_SETTING_TYPE.IS_REQUIRED]: {
      label: label || 'Required',
      id: id || ELEMENT_SETTING_TYPE.IS_REQUIRED,
      type: ELEMENT_SETTING_TYPE.BOOLEAN,
    },
    [ELEMENT_SETTING_TYPE.LABEL]: {
      label: label || 'Label',
      id: id || ELEMENT_SETTING_TYPE.LABEL,
      type: ELEMENT_SETTING_TYPE.TEXT,
    },
    [ELEMENT_SETTING_TYPE.ALIGNMENT]: {
      label: label || 'Alignment',
      id: id || ELEMENT_SETTING_TYPE.ALIGNMENT,
      type: ELEMENT_SETTING_TYPE.ALIGNMENT
    },
    [ELEMENT_SETTING_TYPE.SUB_LABEL]: {
      label: label || 'Sub Label',
      id: id || ELEMENT_SETTING_TYPE.SUB_LABEL,
      type: ELEMENT_SETTING_TYPE.TEXT,
    },
    [ELEMENT_SETTING_TYPE.PLACEHOLDER]: {
      label: label || 'Placeholder',
      id: id || ELEMENT_SETTING_TYPE.PLACEHOLDER,
      type: ELEMENT_SETTING_TYPE.TEXT,
    },
    [ELEMENT_SETTING_TYPE.DEFAULT_VALUE]: {
      label: label || 'Default Value',
      id: id || ELEMENT_SETTING_TYPE.DEFAULT_VALUE,
      type: ELEMENT_SETTING_TYPE.TEXT,
    },
    [ELEMENT_SETTING_TYPE.MIN_LENGTH]: {
      label: label || 'Min Length',
      id: id || ELEMENT_SETTING_TYPE.MIN_LENGTH,
      type: ELEMENT_SETTING_TYPE.NUMBER,
      max: 100
    },
    [ELEMENT_SETTING_TYPE.MAX_LENGTH]: {
      label: label || 'Max Length',
      id: id || ELEMENT_SETTING_TYPE.MAX_LENGTH,
      type: ELEMENT_SETTING_TYPE.NUMBER,
      max: 500
    },
    [ELEMENT_SETTING_TYPE.ROWS]: {
      label: label || 'Rows',
      id: id || ELEMENT_SETTING_TYPE.ROWS,
      type: ELEMENT_SETTING_TYPE.NUMBER,
      min: 2,
      max: 10,
    },
    [ELEMENT_SETTING_TYPE.RATING_AMOUNT]: {
      label: label || 'Rating Amount',
      id: id || ELEMENT_SETTING_TYPE.RATING_AMOUNT,
      type: ELEMENT_SETTING_TYPE.RATING_AMOUNT,
      min: 2,
      max: 10,
    },
    [ELEMENT_SETTING_TYPE.ICON]: {
      label: label || 'Icon',
      id: id || ELEMENT_SETTING_TYPE.ICON,
      type: ELEMENT_SETTING_TYPE.ICON,
    },
    [ELEMENT_SETTING_TYPE.VALIDATE]: {
      label: label || 'Validate',
      id: id || ELEMENT_SETTING_TYPE.VALIDATE,
      type: ELEMENT_SETTING_TYPE.VALIDATE,
    },
  }
  if (!settings[type]) return {}
  return {
    ...settings[type],
    value: value || value == 0 ? value : ""
  }
}

export const getUrlWithParams = (
  url: string,
  params: Record<string, any>
): string => {
  Object.keys(params).forEach((key: string) => {
    const placeholder = `:${key}`;
    const paramValue = params[key];
    url = url.replace(placeholder, paramValue);
  });
  return url;
};

export const isEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isUrl = (url: string): boolean => {
  const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return urlRegex.test(url);
};

export const isDate = (dateString: string) => {
  // Regular expression for date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  // Regular expression for datetime format (YYYY-MM-DD HH:mm:ss)
  const datetimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

  // Check if the string matches either date or datetime format
  return dateRegex.test(dateString) || datetimeRegex.test(dateString);
}

export const isNumber = (value: any) => {
  if (typeof value === 'number') {
    return true;
  }

  if (typeof value === 'string') {
    return !isNaN(Number(value));
  }

  return false;
}

export const overridePrefixFile = (thankYouConfig: any) => {
  if (!thankYouConfig) return;
  const result: any = { ...thankYouConfig }
  if (thankYouConfig?.desktopImage) {
    result.desktopImage = `${PREFIX_FILE}/${thankYouConfig.desktopImage}`
  }
  if (thankYouConfig?.mobileImage) {
    result.mobileImage = `${PREFIX_FILE}/${thankYouConfig.mobileImage}`
  }
  return result;
}