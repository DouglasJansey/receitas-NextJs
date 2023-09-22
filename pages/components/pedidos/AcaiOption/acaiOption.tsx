/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import React from 'react';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';

type ButtonType = {
    tigela: string,
    fruta: string,
}

export default function AcaiOption() {
    const sizeBowl = ['300ml', '400ml', '500ml', '700ml', '1litro']
    const fruit = ["Morango", "Banana", "Natural"]
    const { order, setOrder, saveChecked, page, changePageAndCheck } = useContext(OrderContext)

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        setOrder({ ...order, [name]: value })
    }
    function handlerButtonNext({tigela, fruta}: ButtonType){
       const nameTigela = order[tigela as keyof typeof order];
       const nameFruta = order[fruta as keyof typeof order];
       return (nameTigela && nameFruta) ? true : false
    }
    return (
        <div className={style.containeroptions}>
            <p>Escolha o seu Tamanho</p>
            <div className={style.containeroptions}>
                <div className={style.containerSizes}>
                    {
                        sizeBowl.map((item: string, index: number) => (
                            <div className={style.bowlcards} key={index + 3}>
                                <input className={style.inputstyle} type='radio' name="tigela" id={item} value={saveChecked(item)}
                                    onChange={(e) => handleChangeInputValue(e)}
                                    checked={!!(order["tigela" as keyof typeof order] === item)}
                                />
                                <label htmlFor={item} className={style.labelstyle}>
                                    <img src={`/images/icons/tigela.png`} alt="" />
                                    <p className={style.text}>{item}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <p>Escolha seu sabor</p>
            <div className={style.containeroptions}>
                <div className={style.containerSizes}>
                    {
                        fruit.map((item: string, index: number) => (
                            <div className={style.bowlcards} key={index + 4}>
                                <input className={style.inputstyle} type='radio' name="fruta" id={item} value={saveChecked(item)}
                                    onChange={(e) => handleChangeInputValue(e)}
                                    checked={!!(order["fruta" as keyof typeof order] === item)}
                                />
                                <label htmlFor={item} className={style.labelstyle}>
                                    <img src={`/images/icons/${item}.png`} alt="" />
                                    <p className={style.text}>{item}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
                {handlerButtonNext({tigela: "tigela", fruta: "fruta"}) ? 
                <Button 
                onClick={() => page <= 3 ? changePageAndCheck(1): ''}
                className={style.buttonNext} >Proximo</Button> : ''}
            </div>
        </div>
    )
}