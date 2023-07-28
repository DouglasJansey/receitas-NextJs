/* eslint-disable react/jsx-key */
import Link from "next/link";
import style from "../../../styles/HeaderStyle/Header.module.sass";

export default function header() {
  const menu: Array<string> = [
    "Receitas",
    "Minhas Receitas",
    "Cadastrar Receitas",
    "Categoria",
  ];

  return (
    <>
      <div className={style.container}>
        <div><h2><Link href="/">Logo</Link></h2></div>
        <nav className={style.nav}>
          {menu.map((item, index) => (
            <div key={index}>
              <a className={style.linkStyle} href="#">{item}</a>
            </div>
          ))}
        </nav>
        <div className={style.profile}>
          <p>Perfil</p>
        </div>
      </div>
    </>
  );
}
