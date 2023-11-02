import { Statement } from 'bun:sqlite'
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
    cartUpdate: ( cart: {}, name: string, value: string ) => any 
   
}

export const useCart = create<CartType>((set)=>({
    cart: [],
    addCart: (item) => set((state) => ({cart: [...state.cart, item]})),
    cartRemove: (id) => set((state) => ({ cart: state.cart.filter((item, index) => index !== id)})),
    cartUpdate: (cart, name, value) => set((state) => update(state, cart, name, value)),
}));

function update(state: CartType, cart: Item, name: string, value: string ): CartType {
    const checkCart = cart && cart.hasOwnProperty(name);
  
    checkCart && delete cart[name as keyof typeof cart];
    !checkCart && (cart[name as keyof typeof cart] = value);

    return state
}
