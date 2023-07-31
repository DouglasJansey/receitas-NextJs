/* eslint-disable react/jsx-key */
import { useContext } from "react";
import Link from "next/link";

import { MdKeyboardArrowDown } from "react-icons/md";

import { AuthContext } from "../../contexts/authContext";
import style from "../../../styles/HeaderStyle/Header.module.sass";

export default function Header() {
  const {isAuthtenticated}  = useContext(AuthContext)

  const menu: Array<string> = [
    "Receitas",
    "Minhas Receitas",
    "Cadastrar Receitas",
    "Categoria",
  ];

  return (
    <>
      <div className={style.container}>
        <div>
          <h2>
            <Link className={style.linkStyle} href="/">
              <img width={80} height={80} src={"https://w7.pngwing.com/pngs/754/944/png-transparent-dining-room-drawing-tapet-design-food-recipe-logo.png"} alt=""/>
            </Link>
          </h2>
        </div>
        <nav className={style.nav}>
          {menu.map((item, index) => (
            <div key={index}>
              <a className={style.linkStyle} href="#">
                {item}
              </a>
            </div>
          ))}
        </nav>
        <div className={style.profile} onClick={(e) => console.log(e)}>
          {isAuthtenticated ? (<p>Perfil</p>) : (<Link className={style.linkStyle} href={"/login"}>Login</Link>)}
          <MdKeyboardArrowDown />
        </div>
      </div>
    </>
  );
}
