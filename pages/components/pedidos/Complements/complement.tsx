/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import React from 'react';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';
import produtos from '../../../../__test/produtos';
import { useCart } from '../../../../store/cartStore';

type ComplementType = {
    props: {}
}

export default function Complement() {
    const complements = produtos.filter(item => item.tipo === 'complemento')
    const [cart, cartUpdate] = useCart(state => [state.cart, state.cartUpdate])
    const { order, setOrder, saveChecked, page, changePageAndCheck,
        currentIntex, count, setNameProps, name, newArr, checkCart } = useContext(OrderContext);
    const arrayIndex = cart[currentIntex]

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any, index: number) {
        const { value, name } = e.target;

        arrayIndex && cartUpdate(currentIntex, name, value)
        !order[`complemento${index}` as keyof typeof order] ? setOrder({ ...order, [`complemento${index}`]: value })
            : delete order[`complemento${index}` as keyof typeof order]

    }
    console.log(arrayIndex)
    function handlerButtonNext({ props }: ComplementType) {
        const orderLength = Object.values(arrayIndex && arrayIndex || order)
        const nextPage = complements.map(item => {
            return orderLength.includes(item.nome)
        }).some(value => value === true)
        return !nextPage
    }
    return (
        <div className={style.containeroptions}>
            <p>Escolha o seu Complemento</p>
            <div className={style.containeroptions}>
                <div className={style.containerSizes}>
                    {
                        complements.map((item, index) => (
                            <div className={style.bowlcards} key={index + 3}>
                                <input className={style.inputstyle} type='checkbox' name={`complemento${index}`} id={item.nome} value={saveChecked(item.nome)}
                                    onChange={(e) => handleChangeInputValue(e, index)} readOnly
                                    checked={checkCart(`complemento${index}`, arrayIndex, 'Complemento')} />
                                <label htmlFor={item.nome} className={style.labelstyle}>
                                    <p className={style.text}>{item.nome}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
                <Button
                    onClick={() => page <= count ? changePageAndCheck(2) : ''}
                    className={style.buttonNext}
                    disabled={handlerButtonNext({ props: name })}
                >
                    Proximo
                </Button>
            </div>
        </div>
    )
}