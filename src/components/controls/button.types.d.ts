

type ButtonSize = 'xsmall' |'smaller'| 'small' | 'medium' | 'large'
type ButtonType = 'ok' | 'danger' | 'warning' | "gray" | 'white' | 'soft-ok' | 'soft-danger' | 'soft-warning' | 'soft-gray' | 'submit'

type ButtonProps = {
    children?: string
    onClick?: () => void
    size?: ButtonSize
    type?: ButtonType
    rounded?: boolean
    loading?: boolean
    readonly?: boolean
    disabled?: boolean
    iconLeading?: React.ReactNode
    iconTrailing?: React.ReactNode
    iconOnly?: boolean
    className?: string
}
