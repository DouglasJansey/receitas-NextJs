/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ChangeEvent, useContext, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import { OrderContext } from '../../../../contexts/orderContext';
import Button from '../../../../Utils/Button/button';
import produtos from '../../../../__test/produtos';

export default function Plus() {
    const { order, setOrder, saveChecked,setPage, page,setCount, count,cart, setCart, 
    setNameProps, numberClient, setNumberClient, newArr, editItensCart, checkCart } = useContext(OrderContext);
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
    function ButtonAbleNext(){
        return false
    }
    function addCart(order: {}){
        !arrayIndex && setCart({...cart, [numberClient]:{...order, check: true}})
       if(numberClient >= 4){
          return setNumberClient(0)
       }
       setOrder({})
       setNumberClient(numberClient + 1)
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
                                <input className={style.inputstyle} type='checkbox' name={item.nome} id={item.nome} value={saveChecked(item.nome)}
                                    onChange={(e) => handleChangeInputValue(e)}
                                    checked={checkCart(item.nome, arrayIndex, 'Adicional')} />
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