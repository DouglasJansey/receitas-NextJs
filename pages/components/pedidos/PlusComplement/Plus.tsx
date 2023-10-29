/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';
import produtos from '../../../../__test/produtos';
import { useCart } from '../../../../store/cartStore';

export default function Plus() {
    const { order, setOrder, saveChecked,setPage, page,setCount, count, setCart, 
    setNameProps, numberClient, currentIntex, newArr, checkCart } = useContext(OrderContext);
    const  [addCart, cart, cartUpdate]  = useCart((state) => [state.addCart, state.cart, state.cartUpdate])
    const plus = produtos.filter(item => item.tipo === "adicional")
    const arrayIndex = newArr[currentIntex]
    
    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any, index: number) {
        const { value, name } = e.target
        setNameProps(name);
        !order[`adicional${index}` as keyof typeof order] ? setOrder({ ...order, [`adicional${index}`]: value })
        : delete order[`adicional${index}` as keyof typeof order]
    }  
    function ButtonAbleNext(){
        return false
    }
    // function addCart(order: {}){
    //     !arrayIndex && setCart([...cart, {...order, check: true}])
    //    setOrder({})
    //    setCount(0)
    //    setPage(0)     

    // }
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
                                    checked={checkCart(`adicional${index}`, arrayIndex, 'Adicional')} />
                                <label htmlFor={item.nome} className={style.labelstyle}>
                                    <p className={style.text}>{item.nome}</p>
                                    <h5>R$: {item.preco?.toFixed(2)}</h5>
                                </label>
                            </div>
                        ))
                    }
                </div>
                    <Button
                        onClick={() => page <= count ? addCart(order) : ''}
                        className={style.buttonNext} 
                        disabled={ButtonAbleNext()}>
                        Adicionar na Sacola
                    </Button>
            </div>
        </div>
    )
}