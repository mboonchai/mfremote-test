
type IAlignment = 'left' | 'center' | 'right'

type IValidateType = 'string' | 'number' | 'email' | 'phone' | 'url' | 'date' | 'time' | 'boolean' | 'array' | 'object' | 'regexp'

type IInputType = 'text' | 'number' | 'email' | 'date' | 'time' | 'password' | 'checkbox' | 'radio' | 'file'

type IElementType = string

interface ITemplateSelector {
  onClick?: (templateData: any) => void;
}
interface ITemplateListItem {
  createdBy: string,
  createdDate: string,
  id: string,
  name: string,
  status: boolean,
  theme: string,
  type: string,
  updatedBy: string,
  updatedDate: string,
  version: number,
}
interface serviceRes {
  success: boolean,
  message?: string,
  data?: any
}