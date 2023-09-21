import { ReactNode, createContext, useState } from "react";
type orderContextType ={
    order: object,
    count: number,
    isChecked: boolean,
    setCount: (newState: number) => void,
    setOrder: (newState: {}) => void,
    itemChecked: (item: string, name?: string) => boolean
}
const initialValue = {
    order: {},
    count: 0,
    setCount: () => 0,
    setOrder: () => {},
    itemChecked: () => false,
    isChecked: false
}
type orderContextProps = {
    children: ReactNode;
}

export const OrderContext = createContext<orderContextType>(initialValue);
export const isChecked = false

export const OrderContextProvider = ({children}: orderContextProps) => {
    const [order, setOrder] = useState(initialValue.order)
    const [count, setCount] = useState(initialValue.count)

    function itemChecked(item: string, name?: string): boolean {
        const nameObj = name ? order[name as keyof typeof order] 
        : order[item as keyof typeof order]
        
        return !!(nameObj === item)
    }

    return (
        <OrderContext.Provider value={{order, count, setCount, setOrder, itemChecked, isChecked}}>
            {children}
        </OrderContext.Provider>
    )
}