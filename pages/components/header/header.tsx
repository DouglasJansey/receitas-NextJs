/* eslint-disable react/jsx-key */
import { useContext } from "react";
import Link from "next/link";

import { MdKeyboardArrowDown } from "react-icons/md";

import style from "../../../styles/HeaderStyle/Header.module.sass";
import { useRouter } from "next/router";
import { AuthContext } from "../../../contexts/authContext";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext)
  const { pathname } = useRouter();

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
        <div className={style.divImage}>
          <Link href="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <span>
          <nav className={style.nav}>
            {menu.map((item, index) => (
              <div key={index}>
                <Link
                  className={activeLink(`/${filterWords(item)}`)}
                  href={`/${filterWords(item)}`}
                >
                  {item}
                </Link>
              </div>
            ))}
          </nav>
          <div className={style.profile}>
            {isAuthenticated ? (
              <p>Perfil</p>
            ) : (
              <div>
                <Link className={activeLink(`/index/${filterWords("login")}`)} href={"/index/login"}>
                  Login
                </Link>
                <MdKeyboardArrowDown />
              </div>
            )}
          </div>
        </span>
      </div>
    </>
  );
}
