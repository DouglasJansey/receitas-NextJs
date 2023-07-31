/* eslint-disable @next/next/no-img-element */
import style from "../../../../styles/CardStyle/Card.module.sass";
import { FaStar } from "react-icons/fa";

export default function Card() {
  const rate = [100, 45, 102, 187, 733];
  const calcRate = (arr: Array<number>) => {
    const reduce = arr.reduce((prev, curr) => prev + curr)
    const multiply = arr.map((i, index) => i * (index + 1))
    .reduce((prev, curr) => prev + curr)
    const result = +(multiply / reduce).toFixed(0)
    return result
}
const avaliacao = calcRate(rate)
console.log(calcRate(rate))
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img
          src="https://cdn0.tudoreceitas.com/pt/posts/6/8/8/strogonoff_de_frango_simples_9886_600_square.jpg"
          alt=""
        />
      </div>
      <div className={style.containerInfo}>
        <p className={style.texto}>Strogonoff de Frango</p>
        <p>Deliciosa receita de strogonoff de frango.</p>
        <div className={style.flex}>
          {rate.map((i, index) => (
            index + 1 <= avaliacao ? (
              <FaStar key={index} color="yellow" />
            ) : (
              <FaStar key={index + 1} color="gray" />
            )
          ))}
        </div>
        <p>Autor: Fulaninho </p>
        <p className={style.rodape}>Data Publicação: 30/07/2023 </p>
      </div>
    </div>
  );
}
