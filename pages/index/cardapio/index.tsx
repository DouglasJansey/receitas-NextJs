import CardapioPage from "../../components/cardapio"
import style from '../../../styles/Home.module.sass'

export default function Index(){
    return(
        <div className={style.container}>
            <CardapioPage />
        </div>
    )
}