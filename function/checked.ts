import { useContext } from "react"
import { OrderContext } from "../contexts/orderContext"

export const CheckedValue = (cart: {}, item: string, nome: string) =>{
    const {order} = useContext(OrderContext)
    if(cart){
        return !!(cart[nome as keyof typeof cart] === item)
    }else{
        return !!(order[nome as keyof typeof order] === item)
    }
    
}

