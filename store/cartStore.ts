import { parseCookies } from "nookies";
import { create } from "zustand";
type Item = {
  id?: number;
  tigela?: string;
  batido?: string;
  frutas?: string;
  [x: string]: any;
};
type CartType = {
  cart: Item[];
  addCart: (item: Item) => void;
  cartRemove: (id: number) => void;
  cartUpdate: (cart: Item, name: string, value: string) => any;
  loadCart: () => any;
};

export const useCart = create<CartType>((set) => ({
  cart: [],
  addCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  cartRemove: (id) =>
    set((state) => ({
      cart: state.cart.filter((item, index) => index !== id),
    })),
  cartUpdate: (cart, name, value) =>
    set((state) => update(state, cart, name, value)),
  loadCart : () => set((state) => loadCartInitial(state) ),
}));

function update(
  state: CartType,
  cart: Item,
  name: string,
  value: string
): CartType {
  const checkCart = cart && cart.hasOwnProperty(name);
  const currentPage = name.replace(/[0-9]/g, "");
  if (currentPage === "complemento" || currentPage === "adicional") {
    checkCart && delete cart[name as keyof typeof cart];
    !checkCart && (cart[name as keyof typeof cart] = value);
  } else {
    cart[name as keyof typeof cart] = value;
  }

  return state;
}

function loadCartInitial(state: CartType){
    const {'COOKIE-CART': cartCookie} = parseCookies()
    const cookieValue = cartCookie && JSON.parse(cartCookie)

    for( let i in cookieValue){
        state.cart[+i] = cookieValue[+i]
    }  

    return state
}