/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import React from 'react';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';

type ComplementType = {
    props: string
}

export default function Topping() {
    const complement = ['Chocolate', 'Morango', 'Leite Condensado', 'Uva', 'Sem Cobertura']
    const { order, setOrder, saveChecked, page, changePageAndCheck,checkCart, count, editItensCart, numberClient, newArr } = useContext(OrderContext);
    const arrayIndex = newArr[numberClient]

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        arrayIndex && editItensCart(name, value)
        setOrder({ ...order, [name]: value })
    }

    function handlerButtonNext({ props }: ComplementType) {
        const buttonVisible = !arrayIndex ? !!order[props as keyof typeof order]
        : !!arrayIndex[props as keyof typeof arrayIndex];

        return buttonVisible ? false : true
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
                                    checked={checkCart(item, arrayIndex, "topping")} />
                                <label htmlFor={item} className={style.labelstyle}>
                                    <p className={style.text}>{item}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
                    <button
                        onClick={() => page <= count ? changePageAndCheck(3) : ''}
                        className={style.buttonNext} 
                        >
                        Proximo
                    </button> 
            </div>
        </div>
    )
}