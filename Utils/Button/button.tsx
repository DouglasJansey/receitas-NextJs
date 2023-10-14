import { ReactNode } from "react"

type ButtonType = {
    children: ReactNode,
    className?: string,
    onClick: (e: any) => void,
    disabled: boolean
}
export const Button = ({onClick, children, className, disabled }: ButtonType) => {
    return(
        <button className={className} 
        onClick={(e) => onClick(e)}
        disabled={disabled}
        >{children}</button>
    )
}
export default Button;