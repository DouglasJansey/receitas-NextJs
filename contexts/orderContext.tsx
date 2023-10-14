import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { parseCookies, setCookie } from 'nookies'

type orderContextType = {
    order: object
    count: number
    numberClient: number
    newArr: object[]
    page: number
    name: object
    cart: object
    setCart: (state: any) => void
    checkCart: (item: string, arr: object, name?: string) => boolean
    editItensCart: (name: string, value: any) => void
    setCount: (newState: number) => void
    setNumberClient: (newState: number) => void
    setPage: (newState: number) => void
    setOrder: (newState: {}) => void
    changePageAndCheck: (num: number) => void
    setNameProps: (name: {}) => void
    saveChecked: (item: string, name?: string, page?: string) => string | boolean
}
const initialValue = {
    order: {},
    numberClient: 0,
    count: 0,
    page: 0,
    name: {},
    cart: {},
    newArr: [],
    setCart: () => [],
    setCount: () => 0,
    setNumberClient: () => 0,
    setPage: () => 0,
    setOrder: () => { },
    setNameProps: () => { },
    editItensCart: () => { },
    saveChecked: () => '',
    changePageAndCheck: () => 0,
    checkCart: () => false
}
type orderContextProps = {
    children: ReactNode;
}

export const OrderContext = createContext<orderContextType>(initialValue);
export const isChecked = false

export const OrderContextProvider = ({ children }: orderContextProps) => {
    const [order, setOrder] = useState(initialValue.order)
    const [count, setCount] = useState(initialValue.count)
    const [numberClient, setNumberClient] = useState(initialValue.count)
    const [page, setPage] = useState(initialValue.page)
    const [name, setNameProps] = useState(initialValue.cart)
    const { 'COOKIE-CART': saveCart } = parseCookies()
    const cartArray: object[] = saveCart && JSON.parse(saveCart)
    const newArr: object[] = []
    const [cart, setCart] = useState(cartArray && cartArray.concat(newArr) || [])
    const contextObj = {
        cart, order, count, name, setCart, numberClient, setNumberClient, editItensCart,
        setNameProps, setCount, setOrder, saveChecked, changePageAndCheck, page, setPage, newArr,
        checkCart
    }

    function changePageAndCheck(num: number) {

        setPage(num)
        setCount(num)
    }
    function editItensCart(name: string, value: any): string{ 
        let arrayIndex: any = cart[numberClient as keyof typeof cart]
        for(let _ in cart){
            arrayIndex[name as keyof typeof arrayIndex] = value
        }
       return value
    }
    for(let i in cart){
        if(!newArr[i] && +i !== numberClient){
            newArr.push(cart[+i])
        }else if(numberClient === +i){
            newArr.splice(numberClient, 0, cart[numberClient])
        }
    }
    function saveChecked(item: string, name?: string): any {
        let nameObj = name ? order[name as keyof typeof order] //pega o valor dentro do objeto tigela ou fruta
        : order[item as keyof typeof order]
        const value = nameObj ? nameObj : item
        return value
    }
    function checkCart(item: string, arr: object, name?: string) {
        const valueCheck = name ? name : item;
        if(name === 'Complemento' || name === 'Adicional'){
            return !arr ? order[item as keyof typeof order] 
        : arr && arr[item as keyof typeof arr] 
        }else{
            return !arr ? !!(order[valueCheck as keyof typeof order] === item) 
            : !!(arr && arr[valueCheck as keyof typeof arr] === item)   
        }
     }
    return (
        <OrderContext.Provider value={contextObj}>
            {children}
        </OrderContext.Provider>
    )
}