export const API_PATH = {
  OPEN_FORM: '/v1/:serviceCode/forms/open/:formid',
  SUBMIT_FORM: '/v1/:serviceCode/forms/submit',
}

export const API_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
}

export const ALIGNMENT = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
}

export const ELEMENT_TYPE = {
  HEADER: "header",
  SUB_HEADER: "sub_header",
  PARAGRAPH: "paragraph",
  SHORT_TEXT: "short_text",
  LONG_TEXT: "long_text",
  STAR_RATING: "star_rating",
}

export const RATING_ICON = {
  STAR: "star",
  HEART: "heart",
  Custom: "custom",
}

export const ELEMENT_SETTING_TYPE = {
  NAME: "name",
  DESCRIPTION: "description",
  TEXTAREA: "textarea",
  IS_REQUIRED: "isRequired",
  BOOLEAN: "boolean",
  LABEL: "label",
  ALIGNMENT: "alignment",
  SUB_LABEL: "subLabel",
  PLACEHOLDER: "placeholder",
  DEFAULT_VALUE: "defaultValue",
  MIN_LENGTH: "minLength",
  MAX_LENGTH: "maxLength",
  ROWS: "rows",
  RATING_AMOUNT: "ratingAmount",
  NUMBER: "number",
  TEXT: "text",
  ICON: "icon",
  ICON_CUSTOMS_ID: "iconCustomsId",
  VALIDATE: "validate",
}

export const VALIDATE_TYPE = {
  STRING: "string",
  NUMBER: "number",
  EMAIL: "email",
  PHONE: "phone",
  URL: "url",
  DATE: "date",
  TIME: "time",
  BOOLEAN: "boolean",
  ARRAY: "array",
  OBJECT: "object",
  REGEXP: "regexp",
}

export const INPUT_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  EMAIL: 'email',
  DATE: 'date',
  TIME: 'time',
  PASSWORD: 'password',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  SELECT: 'select',
  FILE: 'file'
}

export const THEME_NAME = {
  M_SURVEY: "m-survey",
  GENERIC: "generic",
}

export const PREFIX_FILE = `api/images`;