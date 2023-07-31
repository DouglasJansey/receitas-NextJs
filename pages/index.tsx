import style from '../styles/Home.module.sass';
import Register from './components/Form/register/register';
export default function Home() {
  return (
    <div className={style.container}>
      <div>
        <Register />
      </div>
    </div>
  )
}