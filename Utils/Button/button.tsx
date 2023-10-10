import { HTMLAttributes, ReactNode } from "react"

type ButtonType = {
    children: ReactNode,
    className?: string
    onClick: (e: any) => void,
}
export const Button = ({onClick, children, className }: ButtonType) => {
    return(
        <button className={className} 
        onClick={(e) => onClick(e)}
        >{children}</button>
    )
}
export default Button;