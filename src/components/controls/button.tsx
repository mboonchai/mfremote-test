import clsx from "clsx"
import "../../tailwind.tw.css"

const BTNSTYLE = {
    base: "font-semibold shadow-sm disabled:opacity-60 disabled:pointer-events-none group-disabled:opacity-60 group-disabled:pointer-events-none",
    notrounded: "rounded",
    rounded: "rounded-full",
    //default or colored
    nocolored: "ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
    colored: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    soft: "",
    //color specific
    submit: "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600 text-white",
    ok: "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600 text-white",
    white: "bg-white ring-gray-300 hover:bg-gray-50 text-gray-900",
    gray: "bg-gray-200 focus-visible:outline-gray-200 text-gray-900",
    danger: "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-400 focus-visible:outline-yellow-500 text-white",

    "soft-ok": "bg-blue-100 hover:bg-blue-200 text-blue-600",
    "soft-danger": "bg-red-100 hover:bg-red-200 text-red-600",
    "soft-warning": "bg-yellow-100 hover:bg-yellow-200 text-yellow-600",
    "soft-gray": "bg-gray-100 hover:bg-gray-200 text-gray-600",
    "soft-white": "bg-white hover:bg-gray-100 text-gray-600",

    //size
    xsmall: "px-2 py-1 text-xs",
    smaller: "px-2 py-1 text-xs",
    small: "px-2.5 py-1.5 text-xs",
    medium: "px-3 py-2 text-sm",
    large: "px-3.5 py-2.5 text-sm",

    "xsmall-rounded": "px-2.5 py-1 text-xs",
    "smaller-rounded": "px-2.5 py-1 text-xs",
    "small-rounded": "px-3 py-1.5 text-xs",
    "medium-rounded": "px-3.5 py-2 text-sm",
    "large-rounded": "px-4 py-2.5 text-sm",

    loading: "transition ease-in-out inline-flex items-center justify-center cursor-not-allowed",

    icon: "inline-flex items-center justify-center  gap-x-1.5"
    
}


export default (props: ButtonProps) => {

    const size = props.size ?? 'medium'
    const type = props.type ?? 'white'
    const disabled = props.loading? true: ((props.disabled ?? false) || (props.readonly ?? false))

    const btnStyles = [] as Array<string>

    btnStyles.push(BTNSTYLE.base)
    btnStyles.push(props.rounded ? BTNSTYLE.rounded : BTNSTYLE.notrounded)

    switch (type) {
        case 'submit':
            btnStyles.push(BTNSTYLE.colored)
            btnStyles.push(BTNSTYLE.ok)
            break
        case 'ok':
            btnStyles.push(BTNSTYLE.colored)
            btnStyles.push(BTNSTYLE.ok)
            break
        case 'danger':
            btnStyles.push(BTNSTYLE.colored)
            btnStyles.push(BTNSTYLE.danger)
            break
        case 'warning':
            btnStyles.push(BTNSTYLE.colored)
            btnStyles.push(BTNSTYLE.warning)
            break
        case 'gray':
            btnStyles.push(BTNSTYLE.colored)
            btnStyles.push(BTNSTYLE.gray)
            break
        case 'soft-ok':
            btnStyles.push(BTNSTYLE.soft)
            btnStyles.push(BTNSTYLE["soft-ok"])
            break
        case 'soft-danger':
            btnStyles.push(BTNSTYLE.soft)
            btnStyles.push(BTNSTYLE["soft-danger"])
            break
        case 'soft-warning':
            btnStyles.push(BTNSTYLE.soft)
            btnStyles.push(BTNSTYLE["soft-warning"])
            break
        case 'soft-gray':
            btnStyles.push(BTNSTYLE.soft)
            btnStyles.push(BTNSTYLE["soft-gray"])
            break
        default:
        case 'white':
            btnStyles.push(BTNSTYLE.nocolored)
            btnStyles.push(BTNSTYLE.white)
            break
    }

    switch (size) {
        case 'xsmall':
            btnStyles.push(props.rounded ? BTNSTYLE["xsmall-rounded"] : BTNSTYLE.xsmall)
            break
        case 'smaller':
            btnStyles.push(props.rounded ? BTNSTYLE["smaller-rounded"] : BTNSTYLE.smaller)
            break
        case 'small':
            btnStyles.push(props.rounded ? BTNSTYLE["small-rounded"] : BTNSTYLE.small)
            break
        case 'medium':
            btnStyles.push(props.rounded ? BTNSTYLE["medium-rounded"] : BTNSTYLE.medium)
            break
        case 'large':
            btnStyles.push(props.rounded ? BTNSTYLE["large-rounded"] : BTNSTYLE.large)
            break
    }

    if (props.loading) {
        btnStyles.push(BTNSTYLE.loading)
    }

    if (props.iconLeading || props.iconTrailing) {
        btnStyles.push(BTNSTYLE.icon)
    }

    return (


        <button type={type === `submit` ? `submit` : `button`} className={clsx(...btnStyles, props.className)} disabled={disabled} onClick={props.onClick}> 
            {props.loading &&
                <svg className="animate-spin -ml-1 mr-3  h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            }
            { (props.iconLeading) && <div className={clsx(props.iconOnly?"":"-ml-0.5", "h-5 w-5")}>{props.iconLeading}</div> }
            {props.children}
            { (props.iconTrailing) && <div className={clsx(props.iconOnly?"":"-mr-0.5", "h-5 w-5")}>{props.iconTrailing}</div> }
        </button>

    )

}