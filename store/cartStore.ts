import { create } from 'zustand'
type Item = {
    id?: number,
    tigela?: string,
    batido?: string,
    frutas?: string,
    [x: string]: any
}
type CartType = {
    cart : Item[],
    addCart: (item: Item) => void
    cartRemove: (id: number) => void
    cartUpdate: (index: number, name: string, value: string) => any 
}

export const useCart = create<CartType>((set)=>({
    cart: [],
    addCart: (item) => set((state) => ({cart: [...state.cart, item]})),
    cartRemove: (id) => set((state) => ({ cart: state.cart.filter((item, index) => index !== id)})),
    cartUpdate: (index, name, value) => set((state) => overwriting(state, index, name, value)),
}));

function overwriting(state: CartType, index: number, name: string, value: string): CartType {
    const currentCart = state.cart[index]
    const valueCart = Object.values(currentCart)
    console.log(valueCart, name)
    currentCart[name as keyof typeof currentCart] = value;
    return state
}