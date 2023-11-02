import { create } from 'zustand'
type Item = {
    id?: number,
    tigela?: string,
    batido?: string,
    frutas?: string,
    Granola?: string,
    Paçoca?: string,
    Amendoim?: string, Cereal?: string, Aveia?: string, Granulado?: string, Leiteempó?: string,
    ChocoBall?: string, Jujuba?: string, Confetti?: string, Chantilly?: string, Biscoito?: string
    topping?: string,
    Nuttella?: string,
    Ovomaltine?: string,
    Bis?: string,
    Banana?: string,
    Manga?: string,
    Leitecondensado?: string,
}
type CartType = {
    cart : Item[],
    addCart: (item: Item) => void
    cartRemove: (id: number) => void
}

export const useCart = create<CartType>((set)=>({
    cart: [],
    addCart: (item) => set((state) => ({cart: [...state.cart, item]})),
    cartRemove: (id) => set((state) => ({ cart: state.cart.filter((item, index) => index !== id)})) 
}));