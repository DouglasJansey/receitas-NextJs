import { render } from "@testing-library/react"
import Pedido from "../components/pedidos/pedidos"

describe("<Pedidos>", ()=>{
    it("should render pedidos",()=>{
        render(<Pedido />)
    })
})