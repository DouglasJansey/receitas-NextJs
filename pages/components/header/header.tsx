/* eslint-disable react/jsx-key */
import { useContext } from "react";
import Link from "next/link";

import { MdKeyboardArrowDown } from "react-icons/md";

import { AuthContext } from "../../contexts/authContext";
import style from "../../../styles/HeaderStyle/Header.module.sass";
import { useRouter } from "next/router";

export default function Header() {
  const { isAuthtenticated } = useContext(AuthContext);
  const { pathname } = useRouter();
  const newarr = pathname.split("/").includes("cardapio");

  const menu: Array<string> = [
    "Cardápio",
    "Pedido",
    "Sobre nós",
    "Onde estamos",
    "Contato",
  ];
  const filterWords = (value: string): string => {
    const path = value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(" ", "");
    
    return path;
  };
  const activeLink = (url: string) => { 
   const path = pathname === url 
   const active = path ? style.activePath : style.linkStyle
      return active
  };
  return (
    <>
      <div className={style.container}>
        <div>
          <h2>
            <Link className={style.linkStyle} href="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </h2>
        </div>
        <nav className={style.nav}>
          {menu.map((item, index) => (
            <div key={index}>
              <Link
                className={activeLink(`/index/${filterWords(item)}`)}
                href={`/index/${filterWords(item)}`}
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <div className={style.profile}>
          {isAuthtenticated ? (
            <p>Perfil</p>
          ) : (
            <Link className={activeLink(`/index/${filterWords("login")}`)} href={"/index/login"}>
              Login
            </Link>
          )}
          <MdKeyboardArrowDown />
        </div>
      </div>
    </>
  );
}
