/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, ElementType, ReactNode, useContext, useState } from 'react';
import style from '../../../styles/PedidoStyle/Pedido.module.sass';
import Complement from './Complements/complement'
import React from 'react';
import AcaiOption from './AcaiOption/acaiOption';
import Topping from './topping/topping';
import FruitOption from './FruitOption/fruitOption';
import { OrderContext } from '../../../contexts/orderContext';

export default function Pedidos() {
    const icons = ['Açaí', 'Complementos', 'Cobertura', 'frutas', 'Adicionais']
    const { count, page, setPage } = useContext(OrderContext);
    
    const handlePagesOptions = (num?: number): ReactNode => { 
        let pageCount = num;
        const page = {
            0:  <AcaiOption />,
            1:  <Complement />,     
            2:  <Topping />,     
            3:  <FruitOption />,     
        }
        return page[pageCount as keyof typeof page] 
    }

    function handleDisable(index: number): boolean {
        const num = count
        if (index <= num) return false
        return true
    }
    function handleChangePage(e: React.MouseEvent<HTMLDivElement, MouseEvent> | any, index: number): void {
       console.log(count, index)
        if(index !== page) setPage(index)
    }

    return (
        <div className={style.container}>
            <div className={style.containerIcons}>
                {icons.map((icon, index) => (
                    <div className={style.optionscard} key={index + 2}>
                        <input className={style.inputstyle} type='checkbox'
                            name={icon} id={icon}
                            disabled={handleDisable(index)} checked={index <= count}
                            onClick={(e) => handleChangePage(e, index)}
                        />
                        <label htmlFor={icon} className={style.labelstyle}>
                            <img src={`/images/icons/${icon.toLowerCase()}.png`} alt="" />
                            <p className={style.text}>{icon}</p>
                        </label>
                    </div>
                ))}
            </div>
            <div className={style.containeroptions}>
                {handlePagesOptions(page)}
            </div>
        </div>
    )
}