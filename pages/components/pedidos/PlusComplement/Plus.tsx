/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';
import produtos from '../../../../__test/produtos';

export default function Plus() {
    const { order, setOrder, saveChecked,setPage, page,setCount, count,cart, setCart, 
    setNameProps, numberClient, setNumberClient, newArr, editItensCart } = useContext(OrderContext);
    const plus = produtos.filter(item => item.tipo === "adicional")
    const arrayIndex = newArr[numberClient]
    
    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        const boolValue = (value === name || value === false) ? true : false
       arrayIndex && editItensCart(name, boolValue)
        setNameProps(name);
        !order[name as keyof typeof order] ? setOrder({ ...order, [name]: !!value })
            : setOrder({ ...order, [name]: false })
    }  
    function addCart(order: {}){
        !arrayIndex && setCart({...cart, [numberClient]:order})
       if(numberClient >= 4){
          return setNumberClient(0)
       }
       setOrder({})
       setNumberClient(numberClient + 1)
       setCount(0)
       setPage(0)        
    }
    function checkCart(item: string, arr: object) {
        return !arr ? (order[item as keyof typeof order] === true)
            : (arr && arr[item as keyof typeof arr] === true)
    }
    return (
        <div className={style.containeroptions}>
            <p>Escolha o seus itens adicionais</p>
            <div className={style.containeroptions}>
                <div className={style.containerSizes}>
                    {
                        plus.map((item, index) => (
                            <div className={style.bowlcards} key={index + 3}>
                                <input className={style.inputstyle} type='checkbox' name={item.nome} id={item.nome} value={saveChecked(item.nome)}
                                    onChange={(e) => handleChangeInputValue(e)}
                                    checked={checkCart(item.nome, arrayIndex)} />
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
                        className={style.buttonNext} >
                        Adicionar na Sacola
                    </Button>
            </div>
        </div>
    )
}