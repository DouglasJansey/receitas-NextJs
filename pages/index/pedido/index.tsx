import style from '../../../styles/Home.module.sass'
import Pedidos from '../../components/pedidos/pedidos'

export default function Index() {
    return (
        <div className={style.container}>
            <>
                <Pedidos />
            </>
        </div>
    )
}