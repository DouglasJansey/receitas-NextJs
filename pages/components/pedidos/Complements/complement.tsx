/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import React from 'react';
import { OrderContext } from '../../../../contexts/orderContext';

export default function Complement() {
    const complement = ['Granola', 'Paçoca', 'Amendoim', 'Cereal', 'Aveia', 'Granulado', 'Leite em pó', 'Choco Ball', 'Jujuba', 'Confetti', 'Chantilly', 'Biscoito']
    const { order, setOrder, itemChecked} = useContext(OrderContext);

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        console.log(e)
        setOrder({ ...order, [name]: value })
    }

    return (
            <div className={style.containeroptions}>
                <p>Escolha o seu Complemento</p>
                <div className={style.containeroptions}>
                    <div className={style.containerSizes}>
                        {
                            complement.map((item: string, index: number) => (
                                <div className={style.bowlcards} key={index + 3}>
                                    <input className={style.inputstyle} type='radio' name={item} id={item} value={item}
                                        onChange={(e) => handleChangeInputValue(e)}
                                       checked={itemChecked(item)}
                                    />
                                    <label htmlFor={item} className={style.labelstyle}>
                                        <p className={style.text}>{item}</p>
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}