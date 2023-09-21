/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useState } from 'react';
import style from '../../../../styles/PedidoStyle/Pedido.module.sass';
import React from 'react';

export default function AcaiOption() {
    const sizeBowl = ['300ml', '400ml', '500ml', '700ml', '1litro']
    const fruit = ["Morango", "Banana", "Natural"]
    const [order, setOder] = useState({
        tigela: '',
        fruta: '',
    })
    function handleChangeInputValue(e: ChangeEvent<HTMLInputElement> | any) {
        const { value, name } = e.target
        setOder({ ...order, [name]: value })
    }
    return (
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
            </div>
    )
}