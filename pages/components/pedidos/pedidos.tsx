/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, ElementType, ReactNode, useContext, useEffect, useState } from 'react';
import style from '../../../styles/PedidoStyle/Pedido.module.sass';
import Complement from './Complements/complement'
import React from 'react';
import AcaiOption from './AcaiOption/acaiOption';
import Topping from './topping/topping';
import FruitOption from './FruitOption/fruitOption';
import Plus from './PlusComplement/Plus'
import { OrderContext } from '../../../contexts/orderContext';
import { setCookie } from 'nookies';
import { setUncaughtExceptionCaptureCallback } from 'process';

export default function Pedidos() {
    const icons = ['Açaí', 'Complementos', 'Cobertura', 'frutas', 'Adicionais']
    const { count, page, setPage, setNumberClient, numberClient, newArr, setCount, order } = useContext(OrderContext);
    const numberOrder = ["1", "2", "3", "4"];
    const arrayIndex = newArr && newArr[numberClient]
    const arrayCheck = arrayIndex && arrayIndex['check' as keyof typeof arrayIndex];


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

    function handleDisable(index: number){
        let num = count 
        return index <= num ? false : true
        
    }
    function handleChangePage(e: React.MouseEvent<HTMLDivElement, MouseEvent> | any, index: number): void {
        if (index !== page) setPage(index)
    }
    function handleCheckedOptionS(index: number){
        const valueCheck = arrayIndex && !!arrayIndex['check' as keyof typeof arrayIndex]
        const isChecked = !arrayIndex ? !!(index <= count) : valueCheck
        return isChecked
    }

    useEffect(()=>{
        if(!arrayIndex && page !== count) {
            setPage(count)
            setCount(0)
        }
         if(newArr.length >= 1 && order) {
             const cartCookie = JSON.stringify(newArr);
             setCookie(undefined, "COOKIE-CART", cartCookie)
         }
    },[numberClient, order])
    return (
        <div className={style.container}>
            <div className={style.containerIcons}>
                {icons.map((icon, index) => (
                    <div className={style.optionscard} key={index + 2}>
                        <input className={style.inputstyle} type='checkbox'
                            name={icon} id={icon}
                            disabled={handleDisable(index)} checked={handleCheckedOptionS(index)}
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
            <div className={style.containerNumbers}>{numberOrder.map((value, index) => (
                <span key={index + 2} className={style.containerNumber}>
                    <input id={value} name={value} type='radio' onClick={() => setNumberClient(index)}
                        checked={!!(index === numberClient)} readOnly
                    />
                    <label htmlFor={value} className={style.labelstyle}>
                        {value}
                    </label>
                </span>
            ))}
            </div>
            <div className={style.containeroptions}>
                {handlePagesOptions(page)}
            </div>
        </div>
    )
}