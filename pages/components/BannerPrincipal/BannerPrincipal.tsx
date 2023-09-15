/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "../../../styles/BannersStyle/Banners.module.sass";
import { FaArrowCircleRight } from "react-icons/fa";
import carouselImage from "../../__test/Banner";
import { useState, useRef, useEffect } from "react";

export default function BannerPrincipal() {
  const containerRef = useRef('');
  const [refcontainer, setRefContainer] = useState();
  const [moveX, setMoveX] = useState({
    arrowleft: 0,
    arrowright: 0,
  });
  const handlerDirectionX = (e: any) => {
    const { parentElement } = e.target.parentElement;
    const { id } = parentElement;
    const width = 0;
    let left = moveX.arrowleft - width;
    let right = moveX.arrowright;
    if(id === "arrowleft") return setMoveX({ ...moveX, [`${id}`]: left })
  };
  console.log(containerRef)
  useEffect(() => {
    const { clientWidth }: any = containerRef;
    console.log(clientWidth)
  
  }, []);
  return (
    <div className={style.container}>
      <div id="arrowright" className={style.arrowRight}>
        <FaArrowCircleRight />
      </div>
      <div
        id="arrowleft"
        className={`${style.arrowLeft} arrowleft`}
        onClick={(e) => handlerDirectionX(e)}
      >
        <FaArrowCircleRight />
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
