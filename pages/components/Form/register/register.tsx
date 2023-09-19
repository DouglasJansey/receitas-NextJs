import { FormEvent, useState } from "react";
import style from "../../../../styles/RegisterStyle/Register.module.sass";

import RegisterAccount from "../../../../service/register";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const inputHandlerValue = (event: any) => {
    const { name, value } = event;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    await RegisterAccount({ formData });
  };
  return (
    <div className={style.flex}>
      <div className={style.container}>
        <form className={style.form} onSubmit={(ev) => handleSubmit(ev)}>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(ev) => inputHandlerValue(ev.target)}
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(ev) => inputHandlerValue(ev.target)}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(ev) => inputHandlerValue(ev.target)}
            />
          </label>
          <button className={style.btn}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
