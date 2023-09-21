/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useState } from 'react';
import style from '../../../styles/PedidoStyle/Pedido.module.sass';
import Complement from './Complements/complement'
import React from 'react';
import AcaiOption from './AcaiOption/acaiOption';

export default function Pedidos() {
    const icons = ['Açaí', 'Complementos', 'Cobertura', 'frutas', 'Adicionais']
    const [count, setCount] = useState(0);

    function handleDisable(index: number): boolean {
        const num = count
        if (index > num) return true
        return false
    }
    return (
        <div className={style.container}>
            <div className={style.containerIcons}>
                {icons.map((icon, index) => (
                    <div className={style.optionscard} key={index + 2}>
                        <input className={style.inputstyle} type='checkbox'
                            name={icon} id={icon}
                            disabled={handleDisable(index)} checked={index <= count}
                        />
                        <label htmlFor={icon} className={style.labelstyle}>
                            <img src={`/images/icons/${icon.toLowerCase()}.png`} alt="" />
                            <p className={style.text}>{icon}</p>
                        </label>
                    </div>
                ))}
            </div>
            <div className={style.containeroptions}>
                <AcaiOption />
                {
                    <button type='button'
                        onClick={() => count <= 3 ? setCount(count + 1) : ''}
                        className={style.buttonNext}
                    > Próximo </button>
                }
            </div>
        </div>
    )
}