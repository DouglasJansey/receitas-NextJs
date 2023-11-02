import style from '../../styles/PedidoStyle/Pedido.module.sass';
import dynamic from 'next/dynamic';

const PedidosPage = dynamic(() => import('../components/pedidos/pedidos'), {ssr: false})

export default function Index() {
    return (
        <div className={style.container}>
            <>
                <PedidosPage />
            </>
        </div>
    )
}