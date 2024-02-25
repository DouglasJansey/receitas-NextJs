import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { parseCookies, setCookie } from 'nookies'

type orderContextType = {
    order: Order
    count: number
    numberClient: number
    currentIntex: number
    newArr: object[]
    page: number
    name: object
    cart: object[]
    setCart: (state: any) => void
    setCount: (newState: number) => void
    setNumberClient: (newState: number) => void
    setCurrentIndex: (newState: number) => void
    setPage: (newState: number) => void
    setOrder: (newState: Order) => void
    changePageAndCheck: (num: number) => void
    setNameProps: (name: {}) => void
    saveChecked: (item: string, name?: string, page?: string) => string | boolean
}
type Order = {
    tigela: string;
    batido: string;
    [index: `complemento${number}`]: string;
    [index: `adicional${number}`]: string;
    topping: string;
    frutas: string;
};

const initialValue = {
    order: {
        tigela: "",
        batido: "",
        complemento0: "",
        complemento1: "",
        complemento2: "",
        complemento3: "",
        complemento4: "",
        complemento5: "",
        complemento6: "",
        complemento7: "",
        complemento8: "",
        complemento9: "",
        complemento10: "",
        adicional0: "",
        adicional1: "",
        adicional2: "",
        adicional3: "",
        adicional4: "",
        adicional5: "",
        adicional6: "",
        topping: "",
        frutas: "",
    },
    numberClient: 1,
    currentIntex: 0,
    count: 0,
    page: 0,
    name: {},
    cart: [{}],
    newArr: [],
    setCart: () => [],
    setCount: () => 0,
    setNumberClient: () => 1,
    setCurrentIndex: () => 1,
    setPage: () => 0,
    setOrder: () => { },
    setNameProps: () => { },
    saveChecked: () => '',
    changePageAndCheck: () => 0,
}
type orderContextProps = {
    children: ReactNode;
}

export const OrderContext = createContext<orderContextType>(initialValue);
export const isChecked = false

export const OrderContextProvider = ({ children }: orderContextProps) => {
    const [order, setOrder] = useState<Order>(initialValue.order)
    const [count, setCount] = useState(initialValue.count)
    const [currentIntex, setCurrentIndex] = useState(0)
    const [page, setPage] = useState(initialValue.page)
    const [name, setNameProps] = useState(initialValue.name)
    const { 'COOKIE-CART': saveCart, 'COOKIE-CLIENT-NUMBERS': clientNumbers } = parseCookies()
    const cartArray: object[] = saveCart && JSON.parse(saveCart)
    const newArr: object[] = []
    const [numberClient, setNumberClient] = useState(clientNumbers && JSON.parse(clientNumbers) || 1)
    const [cart, setCart] = useState(cartArray && cartArray.concat(newArr) || [])
    const contextObj = {
        cart, order, count, name, setCart, numberClient, setNumberClient,
        setNameProps, setCount, setOrder, saveChecked, changePageAndCheck, page, setPage, newArr,
 currentIntex, setCurrentIndex
    }

    function changePageAndCheck(num: number) {
        setPage(num)
        setCount(num)
    }

    for(let i in cart){
        if(!newArr[i] && +i !== currentIntex){
            newArr.push(cart[+i])
        }else if(currentIntex === +i){
            newArr.splice(currentIntex, 0, cart[currentIntex])
        }
    }
    function saveChecked(item: string, name?: string): any {
        let nameObj = name ? order[name as keyof typeof order] //pega o valor dentro do objeto tigela ou fruta
        : order[item as keyof typeof order]
        const value = nameObj ? nameObj : item
        return value
    }
 
    return (
        <OrderContext.Provider value={contextObj}>
            {children}
        </OrderContext.Provider>
    )
}