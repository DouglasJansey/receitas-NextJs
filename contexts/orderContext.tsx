import { ReactNode, createContext, useState } from "react";
type orderContextType = {
    order: object
    count: number
    page: number
    name: object
    setCount: (newState: number) => void
    setPage: (newState: number) => void
    setOrder: (newState: {}) => void
    changePageAndCheck: (num: number) => void
    setNameProps: (name: {}) => void
    saveChecked: (item: string, name?: string) => string
}
const initialValue = {
    order: {},
    count: 0,
    page: 0,
    name: {},
    setCount: () => 0,
    setPage: () => 0,
    setOrder: () => {},
    setNameProps: () => {},
    saveChecked: () => '',
    changePageAndCheck: () => 0
}
type orderContextProps = {
    children: ReactNode;
}

export const OrderContext = createContext<orderContextType>(initialValue);
export const isChecked = false

export const OrderContextProvider = ({children}: orderContextProps) => {
    const [order, setOrder] = useState(initialValue.order)
    const [count, setCount] = useState(initialValue.count)
    const [page, setPage] = useState(initialValue.page)
    const [name, setNameProps] = useState(initialValue.name)


    const contextObj = { order, count,name,setNameProps, setCount, setOrder, saveChecked, changePageAndCheck, page, setPage}

    function changePageAndCheck (num: number) {
        setPage(num)
        setCount(num)
    }

    function saveChecked(item: string, name?: string) {
        const nameObj = name ? order[name as keyof typeof order] //pega o valor dentro do objeto tigela ou fruta
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