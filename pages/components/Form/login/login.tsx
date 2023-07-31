/* eslint-disable @next/next/no-img-element */
import { FormEvent, useContext, useState } from "react";
import Link from "next/link";
import style from "../../../../styles/LoginStyle/Login.module.sass";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { AuthContext } from "../../../contexts/authContext";
import Register from "../register/register";

export default function Login() {
  const { signIn } = useContext(AuthContext);
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
    await signIn(formData);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.containerImage}>
          <img src="/images/picture.png" className={style.image} alt="" />
        </div>
        <div className={style.containerLogin}>
          {register ? (
            <div>
              <Register />
            </div>
          ) : (
            <>
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
            </>
          )}
          <div className={style.footerRegister}>
            <div>
              <label className={style.switcher} htmlFor="login">
                <span>Login</span>
                <div className={style.containerSwitch}>
                <input
                  name="login"
                  type="checkbox"
                  checked={register}
                  onChange={(e) => setRegister(e.currentTarget.checked)}
                  />
                  </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
