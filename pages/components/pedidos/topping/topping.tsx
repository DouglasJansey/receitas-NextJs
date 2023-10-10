/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import React from 'react';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';

type ComplementType = {
    props: {}
}

export default function Topping() {
    const complement = ['Chocolate', 'Morango', 'Leite Condensado', 'Uva', 'Sem Cobertura']
    const { order, setOrder, saveChecked, page, changePageAndCheck, count, editItensCart, numberClient, newArr } = useContext(OrderContext);
    const arrayIndex = newArr[numberClient]

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        arrayIndex && editItensCart(name, value)
        setOrder({ ...order, [name]: value })
    }
    function handlerButtonNext({ props }: ComplementType) {
        const buttonVisible = order[props as keyof typeof order]
        return buttonVisible ? true : false
    }
    function checkCart(item: string, name: string, arr: object) {
        return !arr ? !!(order[name as keyof typeof order] === item) 
        : !!(arr && arr[name as keyof typeof arr] === item)    
     }
    return (
        <div className={style.containeroptions}>
            <p>Escolha o sua Cobertura</p>
            <div className={style.containeroptions}>
                <div className={style.containerSizes}>
                    {
                        complement.map((item: string, index: number) => (
                            <div className={style.bowlcards} key={index + 3}>
                                <input className={style.inputstyle} type='radio' name="topping" id={item} value={saveChecked(item)}
                                    onChange={(e) => handleChangeInputValue(e)}
                                    checked={checkCart(item, "topping", arrayIndex)} />
                                <label htmlFor={item} className={style.labelstyle}>
                                    <p className={style.text}>{item}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
                {handlerButtonNext({ props: "topping" }) ?
                    <Button
                        onClick={() => page <= count ? changePageAndCheck(3) : ''}
                        className={style.buttonNext} 
                        >
                        Proximo
                    </Button> : ''}
            </div>
        </div>
    )
}