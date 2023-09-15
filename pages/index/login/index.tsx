import LoginPage from "../../components/Form/login/login"
import style from '../../../styles/Home.module.sass'

export default function Index(){
    return(
        <div className={style.container}>
            <LoginPage />
        </div>
    )
}