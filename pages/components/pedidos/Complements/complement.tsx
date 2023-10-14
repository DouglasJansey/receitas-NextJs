/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import React from 'react';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';

type ComplementType = {
    props: {}
}

export default function Complement() {
    const complement = ['Granola', 'Paçoca', 'Amendoim', 'Cereal', 'Aveia', 'Granulado', 'Leite em pó', 'Choco Ball', 'Jujuba', 'Confetti', 'Chantilly', 'Biscoito']
    const { order, setOrder, saveChecked, page, changePageAndCheck, editItensCart,
    numberClient, count, setNameProps, name, newArr, checkCart } = useContext(OrderContext);
    const arrayIndex = newArr[numberClient]

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        const boolValue = (value === name || value === false) ? true : false
        if(page === 1){
            arrayIndex && editItensCart(name, boolValue)
            setNameProps(name);
            !order[name as keyof typeof order] ? setOrder({ ...order, [name]: !!value })
            : setOrder({ ...order, [name]: false })
        }
    }
    function handlerButtonNext({ props }: ComplementType) {
        const valuesTrue: boolean[] = []
        const orderLength = Object.values(order)
        if (orderLength) {
            for (let i in order) {
                if (order[i as keyof typeof order] === true) valuesTrue.push(order[i as keyof typeof order])
            }
        }
        complement.forEach((item) => {
            for (let i in arrayIndex) {
                if (i === item && arrayIndex[i as keyof typeof arrayIndex] === true) {
                    valuesTrue.push(arrayIndex[i as keyof typeof arrayIndex])
                }
            }
        })
        return valuesTrue.length > 0 ? false : true
    }
    return (
        <div className={style.containeroptions}>
            <p>Escolha o seu Complemento</p>
            <div className={style.containeroptions}>
                <div className={style.containerSizes}>
                    {
                        complement.map((item: string, index: number) => (
                            <div className={style.bowlcards} key={index + 3}>
                                <input className={style.inputstyle} type='checkbox' name={item} id={item} value={saveChecked(item)}
                                    onChange={(e) => handleChangeInputValue(e)} readOnly
                                    checked={checkCart(item, arrayIndex, 'Complemento')} />
                                <label htmlFor={item} className={style.labelstyle}>
                                    <p className={style.text}>{item}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
                <button
                        onClick={() => page <= count ? changePageAndCheck(2) : ''}
                        className={style.buttonNext}
                        >
                        Proximo
                    </button> 
            </div>
        </div>
    )
}