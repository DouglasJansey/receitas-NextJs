/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ChangeEvent, useContext } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';
type OptionsType = {
    tigela: string
    batido: string
}

export default function AcaiOption() {
    const sizeBowl = ['300ml', '400ml', '500ml', '700ml', '1litro']
    const fruit = ["Morango", "Banana", "Natural"]
    const { order, setOrder, saveChecked, page, changePageAndCheck, editItensCart, newArr, checkCart, currentIntex } = useContext(OrderContext)
    const arrayIndex = newArr[currentIntex]

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        arrayIndex && editItensCart(name, value)
        return setOrder({ ...order, [name]: value })

    }
    function handlerButtonNext({tigela, batido}: OptionsType):boolean {
        const nameTigela = !arrayIndex ? order[tigela as keyof typeof order]
            : arrayIndex[tigela as keyof typeof arrayIndex];

        const nameFruta = !arrayIndex ? order[batido as keyof typeof order]
            : arrayIndex[batido as keyof typeof arrayIndex];
        return (!!nameTigela && !!nameFruta) ? false : true
        
    }
    console.log(order)
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
                                    checked={checkCart(item, arrayIndex, "tigela")}
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
                                <input className={style.inputstyle} type='radio' name="batido" id={item} value={saveChecked(item)}
                                    onChange={(e) => handleChangeInputValue(e)}
                                    checked={checkCart(item, arrayIndex, "batido")}
                                />
                                <label htmlFor={item} className={style.labelstyle}>
                                    <img src={`/images/icons/${item}.png`} alt="" />
                                    <p className={style.text}>{item}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Button
                    onClick={() => page <= 3 ? changePageAndCheck(1) : ''}
                    className={style.buttonNext}
                    disabled={handlerButtonNext({tigela: "tigela", batido: "batido"})}
                >Proximo
                </Button>
                </div>
            </div>
        </div>
    )
}