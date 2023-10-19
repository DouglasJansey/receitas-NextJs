/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic'
import { ReactNode, useContext, useEffect, useState } from 'react';
import { setCookie } from 'nookies';
import { OrderContext } from '../../../contexts/orderContext';
import style from '../../../styles/PedidoStyle/Pedido.module.sass';
const Complement = dynamic(() => import('./Complements/complement'), { ssr: false });
const AcaiOption = dynamic(() => import('./AcaiOption/acaiOption'), { ssr: false });
const Topping = dynamic(() => import('./topping/topping'), { ssr: false });
const FruitOption = dynamic(() => import('./FruitOption/fruitOption'), { ssr: false });
const Plus = dynamic(() => import('./PlusComplement/Plus'), { ssr: false });


export default function Pedidos() {
    const icons = ['Açaí', 'Complementos', 'Cobertura', 'frutas', 'Adicionais']
    const { count, page, setPage, setNumberClient, currentIntex, setCurrentIndex, numberClient, newArr, setCount, order, cart } = useContext(OrderContext);
    const numberOrder: number[] = [numberClient];
    const arrayIndex = newArr && newArr[currentIntex]
    const orderCheck = arrayIndex && arrayIndex['check' as keyof typeof arrayIndex] || false;

    const handlePagesOptions = (num?: number): ReactNode => {
        let pageCount = num;
        const page = {
            0: <AcaiOption />,
            1: <Complement />,
            2: <Topping />,
            3: <FruitOption />,
            4: <Plus />,
        }
        return page[pageCount as keyof typeof page]
    }
    function handleDisable(index: number, checkValue: boolean) {
        let num = count
        return (index <= num || checkValue) ? false : true

    }
    function handleChangePage(e: React.MouseEvent<HTMLDivElement, MouseEvent> | any, index: number): void {
        if (index !== page) setPage(index)
    }
    function handleCheckedOptionS(index: number) {
        const valueCheck = arrayIndex && !!arrayIndex['check' as keyof typeof arrayIndex]
        const isChecked = !arrayIndex ? !!(index <= count) : valueCheck
        return isChecked
    }
    function handleNumberClients(e: React.MouseEvent<HTMLButtonElement> | any){
        const { textContent } = e.target  
        if(textContent === '+'){
        setNumberClient( numberClient + 1) 
        }else{
            if(numberClient <= 1) return 1
            setNumberClient( numberClient - 1)
            if(newArr.length === numberClient){
                cart.pop()
            }
        }
    }
    function getNumbersOrder(){
        for(let i = 1; i <= numberClient; i++){
            numberOrder[i - 1] = i
        }
        return(
             numberOrder.map((value, index) => (
                 <span key={index + 2} className={style.containerNumber}>
                     <input id={String(value)} name={String(value)} type='radio'
                         checked={!!(index === currentIntex)} 
                         onClick={() => setCurrentIndex(index)}
                         readOnly
                     />
                     <label htmlFor={String(value)} className={style.labelstyle}>
                         <h5>
                             {value}
                         </h5>
                     </label>
                 </span>
             ))
         )
    }      
    useEffect(() => {
        if (!arrayIndex && page !== count) {
            setPage(count)
            setCount(0)
        }
        if (newArr.length >= 1 && order) {
            const cartCookie = JSON.stringify(newArr);
            setCookie(undefined, "COOKIE-CART", cartCookie)
        }
        if(numberClient > 0) {
            const clientCookie = JSON.stringify(newArr.length)
            setCookie(undefined,'COOKIE-CLIENT-NUMBERS', clientCookie)
        }
    }, [numberClient, order, newArr])
    return (
        <div className={style.container}>
            <div className={style.containerIcons}>
                {icons.map((icon, index) => (
                    <div className={style.optionscard} key={index + 2}>
                        <input className={style.inputstyle} type='checkbox'
                            name={icon} id={icon}
                            disabled={handleDisable(index, orderCheck)} checked={handleCheckedOptionS(index)}
                            readOnly
                            onClick={(e) => handleChangePage(e, index)}
                        />
                        <label htmlFor={icon} className={style.labelstyle}>
                            <img src={`/images/icons/${icon.toLowerCase()}.png`} alt="" />
                            <p className={style.text}>{icon}</p>
                        </label>
                    </div>
                ))}
            </div>
            <div className={style.containerNumbers}>
                <p className={style.textClientsOptions}>
                    Escolha a quantidade de açaí que você deseja montar!
                </p>
                <div>
                    <button className={style.buttonNumberClient}
                     type='button' name='remove' onClick={(e) => handleNumberClients(e)}>-</button>
                    {getNumbersOrder()}
                    <button className={style.buttonNumberClient} 
                    type='button' name='plus' onClick={(e) => handleNumberClients(e)} >+</button>
                </div>
            </div>
            <div className={style.containeroptions}>
                {handlePagesOptions(page)}
            </div>
        </div>
    )
}