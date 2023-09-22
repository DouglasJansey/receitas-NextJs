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
    const { order, setOrder, saveChecked, page, changePageAndCheck, count, setNameProps, name } = useContext(OrderContext);

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        setNameProps(name);
        !order[name as keyof typeof order] ? setOrder({ ...order, [name]: value })
            : setOrder({ ...order, [name]: "" })
    }
    function handlerButtonNext({ props }: ComplementType) {
        const buttonVisible = order[props as keyof typeof order]
        return buttonVisible ? true : false
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
                                    onChange={(e) => handleChangeInputValue(e)}
                                    checked={order[item as keyof typeof order] ? true : false} />
                                <label htmlFor={item} className={style.labelstyle}>
                                    <p className={style.text}>{item}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
                {handlerButtonNext({ props: name }) ?
                    <Button
                        onClick={() => page <= count ? changePageAndCheck(2) : ''}
                        className={style.buttonNext} >
                        Proximo
                    </Button> : ''}
            </div>
        </div>
    )
}