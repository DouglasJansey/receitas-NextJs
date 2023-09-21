/* eslint-disable @next/next/no-img-element */
import { FormEvent, useContext, useState } from "react";
import Link from "next/link";
import style from "../../../../styles/LoginStyle/Login.module.sass";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import Register from "../register/register";

export default function Login() {
  const  signIn = false;
  const [register, setRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    savePassword: false,
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
  };
  const SavePassword = (ev: any) => {
    const {checked} = ev.target
    setFormData({...formData, ["savePassword"]: checked})
    console.log(checked)
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.containerImage}>
          <img src="/images/acai2.webp" className={style.image} alt="" />
        </div>
        <div className={style.containerLogin}>
          {register ? (
            <div className={style.form}>
              <h4>Cadastro</h4>
              <Register />
            </div>
          ) : (
            <>
              <form className={style.form} onSubmit={(ev) => handleSubmit(ev)}>
              <h4>Login</h4>
                <label className={style.labelContainer}>
                  Email:
                  <div>
                    <MdOutlineEmail className={style.IconeForm} />
                    <input
                      type="text"
                      name="email"
                      className={style.inputLogin}
                      value={formData.email}
                      onChange={(e) => handleInputChange(e.target)}
                    />
                  </div>
                </label>
                <label className={style.labelContainer}>
                  Password:
                  <div>
                    <MdLockOutline className={style.IconeForm} />
                    <input
                      type="password"
                      name="password"
                      className={style.inputLogin}
                      value={formData.password}
                      onChange={(e) => handleInputChange(e.target)}
                    />
                  </div>
                </label>
                <span className={style.savePassword}>
                  <input
                    type="checkbox"
                    checked={formData.savePassword}
                    onChange={(e) => SavePassword(e)}/>
                  <p className={style.text}>Lembrar minha senha</p>
                </span>
                <button className={style.submitBotton}>Entrar</button>
              </form>
            </>
          )}
          <div className={style.footerRegister}>
            <div className={style.containerSwitch}>
              <input
                className="checkbox"
                id="checkbox"
                type="checkbox"
                checked={register}
               onChange={(e) => setRegister(!register)}
              />
              <label className={style.switcher} htmlFor="checkbox">
    
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
