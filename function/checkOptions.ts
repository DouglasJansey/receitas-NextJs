import dynamic from 'next/dynamic';
import { useCart } from '../store/cartStore';

export default function CheckOptions(index: number, clientNumber: number, count: number) {
    const [cart, loadCart] = useCart(state => [state.cart, state.loadCart])
    const checkCart = cart[clientNumber as keyof typeof cart];
    loadCart()
    const isChecked = checkCart && checkCart["check" as keyof typeof checkCart]
    
    return isChecked ? isChecked : (index <= count)
}