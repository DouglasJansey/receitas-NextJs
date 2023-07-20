/* eslint-disable @next/next/no-img-element */
import { FormEvent, useContext, useState } from "react";
import style from '../../../styles/LoginStyle/Login.module.sass'
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { AuthContext } from "../../contexts/authContext";

export default function Login() {
  const { signIn } = useContext(AuthContext)
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
    await signIn(formData)
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.containerImage}>
          <img src="/images/picture.png" className={style.image} alt="" />
        </div>
        <div className={style.containerLogin}>
          <h4>Login</h4>
          <form className={style.form} onSubmit={(ev) => handleSubmit(ev)}>
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
                <MdLockOutline className={style.IconeForm}/>
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ["savePassword"]: !!e.currentTarget.checked,
                  })
                }
              />
              <p className={style.text}>Lembrar minha senha</p>
            </span>
            <button className={style.submitBotton}>Entrar</button>
          </form>
          <div className={style.footerRegister}>
            <p className={style.text}>
              Se ainda não tem uma conta{" "}
              <a href="#" className={style.linkRegister}>
                registre-se
              </a>{" "}
              aqui
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
