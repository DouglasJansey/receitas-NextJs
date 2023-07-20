import LoginPage from "../components/Form/login"
import style from '../../styles/Home.module.sass'

export default function Login(){
    return(
        <div className={style.container}>
            <LoginPage />
        </div>
    )
}