/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';
import produtos from '../../../../__test/produtos';
import { useCart } from '../../../../store/cartStore';
import { CheckedValue } from '../../../../function/checked';

interface targetType {
    name: string,
    value: string,
}

export default function Plus() {
    const { order, setOrder, saveChecked, setPage, page, setCount, count,
        setNameProps, currentIntex } = useContext(OrderContext);
    const [addCart, cart, cartUpdate] = useCart((state) => [state.addCart, state.cart, state.cartUpdate])
    const plus = produtos.filter(item => item.tipo === "adicional")
    const arrayIndex = cart[currentIntex]
    const [checked, setChecked] = useState({})

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement>, index: number) {
        const target = e.target
        if (target !== null && 'value' in target && 'name' in target) {
            const { value, name } = target as targetType
            const orderIndex = `adicional${index}`;

            handleNameAndCartUpdates(name, value)
            handleCheckedUpdate()
            //setChecked(arrayIndex)
            
            if (!order[orderIndex as keyof typeof order] || order[orderIndex as keyof typeof order] !== value) {
                order[orderIndex as keyof typeof order] = value;
            } else {
                delete order[orderIndex as keyof typeof order];
            }
        }
    }
    function handleNameAndCartUpdates(name: string, value: string) {
        setNameProps(name);
        arrayIndex && cartUpdate(arrayIndex, name, value);
    }
    function handleCheckedUpdate() {
        setChecked(arrayIndex);
    }

    function finishedCart() {
        addCart({ ...order, check: true })
        setOrder({
            tigela: '',
            batido: '',
            topping: '',
            frutas: ''
        })
        setCount(0)
        setPage(0)
    }
    return (
        <div className={style.containeroptions}>
            <p>Escolha o seus itens adicionais</p>
            <div className={style.containeroptions}>
                <div className={style.containerSizes}>
                    {
                        plus.map((item, index) => (
                            <div className={style.bowlcards} key={index + 3}>
                                <input className={style.inputstyle} type='checkbox' name={`adicional${index}`} id={item.nome} value={saveChecked(item.nome)}
                                    onChange={(e) => handleChangeInputValue(e, index)}
                                    checked={CheckedValue(arrayIndex, item.nome, `adicional${index}`)} />
                                <label htmlFor={item.nome} className={style.labelstyle}>
                                    <p className={style.text}>{item.nome}</p>
                                    <h5>R$: {item.preco?.toFixed(2)}</h5>
                                </label>
                            </div>
                        ))
                    }
                </div>
                <Button
                    onClick={() => page <= count ? finishedCart() : ''}
                    className={style.buttonNext}
                    disabled={page <= count}>
                    {cart.length > 0 ? 'Salvar' : 'Adicionar na Sacola'}
                </Button>
            </div>
        </div>
    )
}