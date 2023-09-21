/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "../../../styles/BannersStyle/Banners.module.sass";
import carouselImage from "../../../__test/Banner";
import { useState, useRef, useEffect } from "react";

export default function BannerPrincipal() {
  const containerRef = useRef('');
  const [refcontainer, setRefContainer] = useState(0);
  const [moveX, setMoveX] = useState(0);

  const handlerDirectionX = (e: any) => {
    const name: string = e.target.id
    const width = refcontainer

    type NameArrow = typeof direction;
    type KeyArrow = keyof NameArrow;
    const direction = {
      "arrowleft": () => {
        return moveX < 0
          ? moveX + width : 0
      },
      "arrowright": () => {
        return (moveX > (carouselImage.length * -width + width))
          ? moveX - width : moveX;
      },
    }
    setMoveX(direction[name as KeyArrow])
  };

  useEffect(() => {
    const { clientWidth }: any = containerRef.current;
    setRefContainer(clientWidth)
  }, []);
  return (
    <div className={style.container}>
      <div>
        <img src="/images/arrow.png" className={style.arrowRight}
          onClick={(e) => handlerDirectionX(e)}
          id="arrowright" />
      </div>
      <div>
        <img src="/images/arrow.png" className={style.arrowLeft}
          onClick={(e) => handlerDirectionX(e)}
          id="arrowleft" />
      </div>
      <div className={style.containerTest}>
        {/*div principal*/}
        {carouselImage.map((banner, index) => (
          <div
            key={index}
            className={style.containerImage}
            style={{ transform: `translateX(${moveX}px)` }}
            ref={containerRef}
          >
            <span className={style.containerTextoInfo}>
              <h2 className={style.textTitle}>{banner.titulo}</h2>
              <h5 className={style.text}>{banner.descricao}</h5>
              <Link className={style.linkRouter} href={"/index/pedido"}>
                Monte o seu!
              </Link>
            </span>
            <div className={style.backgroundLeft}>
              <img src={banner.imageLeft} alt="" />
            </div>
            <span className={style.containerMiddle}>
              <img src={banner.middleImg} alt="" />
            </span>
            <div className={style.backgroundRight}>
              <img
                src={banner.imageRight}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      {/*
    
        */}
    </div>
  );
}
