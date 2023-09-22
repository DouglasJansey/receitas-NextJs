/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';
import produtos from '../../../../__test/produtos';

type ComplementType = {
    props: {}
}

export default function Plus() {
    const { order, setOrder, saveChecked, page, changePageAndCheck, count, setNameProps, name } = useContext(OrderContext);
    const plus = produtos.filter(item => item.tipo === "adicional")
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
            <p>Escolha o seu Adicionais</p>
            <div className={style.containeroptions}>
                <div className={style.containerSizes}>
                    {
                        plus.map((item, index) => (
                            <div className={style.bowlcards} key={index + 3}>
                                <input className={style.inputstyle} type='checkbox' name={item.nome} id={item.nome} value={saveChecked(item.nome)}
                                    onChange={(e) => handleChangeInputValue(e)}
                                    checked={!!(order[item.nome as keyof typeof order] === item.nome)} />
                                <label htmlFor={item.nome} className={style.labelstyle}>
                                    <p className={style.text}>{item.nome}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
                {handlerButtonNext({ props: "" }) ?
                    <Button
                        onClick={() => page <= count ? '' : ''}
                        className={style.buttonNext} >
                        Proximo
                    </Button> : ''}
            </div>
        </div>
    )
}