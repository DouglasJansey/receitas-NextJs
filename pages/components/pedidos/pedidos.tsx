/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useState } from 'react';
import style from '../../../styles/PedidoStyle/Pedido.module.sass';
import React from 'react';

export default function Pedidos() {
    const icons = ['Açaí', 'Complementos', 'Cobertura', 'frutas', 'Adicionais']
    const sizeBowl = ['300ml', '400ml', '500ml', '700ml', '1litro']
    const fruit = ["Morango", "Banana", "Natural"]
    const disable = false;
    const [count, setCount] = useState(0);
    const [order, setOder] = useState({
        tigela: '',
        fruta: '',
        complement: {},
        sweetSouce: '',
        frutaComplemento: '',
        plus: {}
    })

    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        setOder({ ...order, [name]: value })
    }
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
                <p>Escolha o seu Tamanho</p>
                <div className={style.containeroptions}>
                    <div className={style.containerSizes}>
                        {
                            sizeBowl.map((item: string, index: number) => (
                                <div className={style.bowlcards} key={index + 3}>
                                    <input className={style.inputstyle} type='radio' name="tigela" id={item} value={item}
                                        onChange={(e) => handleChangeInputValue(e)}
                                    />
                                    <label htmlFor={item} className={style.labelstyle}>
                                        <img src={`/images/icons/tigela.png`} alt="" />
                                        <p className={style.text}>{item}</p>
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <p>Escolha seu sabor</p>
                <div className={style.containeroptions}>
                    <div className={style.containerSizes}>
                        {
                            fruit.map((item: string, index: number) => (
                                <div className={style.bowlcards} key={index + 4}>
                                    <input className={style.inputstyle} type='radio' name={"fruta"} id={item} value={item}
                                        onChange={(e) => handleChangeInputValue(e)}

                                    />
                                    <label htmlFor={item} className={style.labelstyle}>
                                        <img src={`/images/icons/${item}.png`} alt="" />
                                        <p className={style.text}>{item}</p>
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {order.tigela && order.fruta ?
                    <button type='button'
                     onClick={() => count <= 3 ? setCount(count + 1) : ''}
                     className={style.buttonNext}
                     > Próximo </button>
                    : ''}
            </div>
        </div>
    )
}