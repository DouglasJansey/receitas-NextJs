/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import React from 'react';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';

type ButtonType = {
    fruta: string,
}

export default function FruitOption() {
    const fruit = ["Morango", "Banana", "Manga"]
    const { order, setOrder, saveChecked, page, changePageAndCheck,checkCart, newArr, numberClient, editItensCart } = useContext(OrderContext)
    const arrayIndex = newArr[numberClient]

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        arrayIndex && editItensCart(name, value)
        setOrder({ ...order, [name]: value })
    }
    function handlerButtonNext({fruta}: ButtonType){
       const nameFruta = order[fruta as keyof typeof order];
       return (nameFruta) ? true : false
    }

    return (
        <div className={style.containeroptions}>
            <p>Escolha sua fruta</p>
            <div className={style.containeroptions}>
                <div className={style.containerSizes}>
                    {
                        fruit.map((item: string, index: number) => (
                            <div className={style.bowlcards} key={index + 4}>
                                <input className={style.inputstyle} type='radio' name="frutas" id={item} value={saveChecked(item)}
                                    onChange={(e) => handleChangeInputValue(e)}
                                    checked={checkCart(item, arrayIndex, "frutas")}
                                />
                                <label htmlFor={item} className={style.labelstyle}>
                                    <img src={`/images/icons/${item}.png`} alt="" />
                                    <p className={style.text}>{item}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
                {handlerButtonNext({fruta: "frutas"}) ? 
                <Button 
                onClick={() => page <= 3 ? changePageAndCheck(4): ''}
                className={style.buttonNext}
                 >Proximo</Button> : ''}
            </div>
        </div>
    )
}