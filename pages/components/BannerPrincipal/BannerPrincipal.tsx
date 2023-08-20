/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "../../../styles/BannersStyle/Banners.module.sass";
import { FaArrowCircleRight } from "react-icons/fa";
import carouselImage from "../../__test/Banner";
import { useState } from "react";

export default function BannerPrincipal() {
  const testCarr = [1, 1, 1, 1, 1, 1,1,1,1];
  const [moveX, setMoveX] = useState(0)
  let x = 0;
  return (
    <div className={style.container}>
      <div className={style.arrowRight} onClick={(e) => console}>
        <FaArrowCircleRight />
      </div>
      <div className={style.arrowLeft}>
        <FaArrowCircleRight />
      </div>
      <div className={style.containerTest}>
        {/*div principal*/}
        <div>
        {testCarr.map((_, index) => (
          <div
            key={index}
            className={style.containerImage}
            style={{ transform: `translateX(${moveX}px)` }}
            >{index}</div>
            ))}
            </div>
      </div>
      {/*
      <div className={style.backgroundLeft}>
        <img src={carouselImage.imageLeft} alt="couresel" />
      </div>
      <div className={style.containerMiddle}>
        <img
          src={carouselImage.middleImg}
          alt=""
        />
      </div>
      <div className={style.backgroundRight}>
        <img src={carouselImage.imageRight} alt="couresel" />
      </div>
            <div className={style.containerTextoInfo}>
                <p className={style.textTitle}>Combinações</p>
                <div className={style.containerDesc}>
                <p>Se você gosta de variedades,
                    são muitas combinações de complementos
                    que você pode escolher,
                    além de opções de misturas 
                    para o seu Açaí.
                </p>
                </div>
                <Link href="/index/cardapio" className={style.btnInfo} >Conheça</Link>
            </div>
        */}
    </div>
  );
}
