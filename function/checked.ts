export const checkedValue = (cart: {}, item: string, nome: string) =>{
    if(cart && item){
        console.log(nome)
        return !!(cart[nome as keyof typeof cart] === item)
    }
    
}