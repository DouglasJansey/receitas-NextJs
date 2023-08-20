import style from '../styles/Home.module.sass';
import BannerPrincipal from './components/BannerPrincipal/BannerPrincipal'
export default function Home() {
  return (
    <div className={style.container}>
      <div>
        <BannerPrincipal />
      </div>
    </div>
  )
}