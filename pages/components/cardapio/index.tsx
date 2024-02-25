/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import style from "../../../styles/CardapioStyle/Cardapio.module.sass";
import products from "../../../__test/produtos";

export default function Cardapio() {
  const [inputValue, setInputValue] = useState({
    name: "açaí",
  });

  // list of products and prices
  const list = (value: string) => {
    const newList = products.filter((product) => product.tipo === value);
    return newList.map((item, index) => (
      <>
      <li>
          <div className={style.cardapio} key={index}>
            {item.image ? (
              <div className={style.containerItens}>
                <img src={item.image} alt={item.nome} />
              </div>
            ) : (
              ""
            )}
            <div className={style.containerName}>
              <h3>{item.nome}</h3>
            </div>
            {item.preco ? (
              <>
              {item.tamanho ? 
                <div className={style.containerSize}>
                  <h4>{item.tamanho}</h4>
                </div> : <></>}
                <div className={style.containerPrice}>
                  {item.preco ? <h4>{item.preco?.toFixed(2)}</h4> : ""}
                </div>
              </>
            ) : ( <></>)}
            <span />
          </div>
      </li>
      </>
    ));
  };

  return (
      <div className={style.container}>
        <div className={style.subContainerMenu}>
          <div className={style.flex}>
            <div className={style.divProducts}>
              <div className={style.divInfoText}>
                <h1>
                  Já tomou seu
                  <p>Açaí</p>
                </h1>
                <h2>hoje?</h2>
              </div>
              <div className={style.divInfoText}>
                <h3>Monte do seu jeito</h3>
                <h4>Banana - Morango - Natural</h4>
              </div>
              <div className={style.divInfoText}>
                <img src="/images/copoAcai.png" alt="" />
              </div>
            </div>
          </div>
          <div className={style.cardapioContainer}>
            <div className={style.subContainerMenu}>
                <div className={style.textTitulo}>
                  <h2>Açaí</h2>
                </div>
                <ul className={style.ulcontainer}>
                {list(inputValue.name)}
                </ul>
            </div>
            <div className={style.containerComplemento}>
              <div className={style.textTitulo}>
                <h2>Complementos</h2>
              </div>
              <ul>{list("complemento")}</ul>
              <div className={style.textTitulo}>
                <h2>Caldas</h2>
              </div>
              <ul>{list("calda")}</ul>
              <div className={style.textTitulo}>
                <h2>Frutas</h2>
              </div>
              <ul>{list("fruta")}</ul>
            </div>
          </div>
          <div className={style.cardapioContainer}>
            <div className={style.subContainerMenu}>
              <div className={style.textTitulo}>
                <h2>Adicionais</h2>
              </div>
              <ul className={style.ulcontainer}>{list("adicional")}</ul>
            </div>
          </div>
        </div>
      </div>
  );
}
