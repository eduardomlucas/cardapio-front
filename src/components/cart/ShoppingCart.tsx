import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import { CartItem } from "./CartItem"
import { useFoodData } from "../../hooks/useFoodData"
import { useLocalStorage } from "../../hooks/useLocalStorage"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

    const {storeItems} = useFoodData();
    const { closeCart, cartItems } = useShoppingCart()
    const pedido = useLocalStorage("shopping-cart",[]);
    const handleSubmit = () =>{

        console.log(" aqui: "+JSON.stringify(pedido) );

        //envia para o back consulta se tem disponível

        //se sim redireciona para a tela
        window.location.replace("http://localhost:5173/entrega");
    }
    return (
            <div className="bg-zinc-900 ">
                {isOpen && (
                    <div className="flex flex-col ">
                        {/* header */}
                        <div className="p-2 flex justify-between border-b mb-10 ">
                            <h1>Carrinho</h1>
                            <button onClick={() => closeCart()}>X</button>
                        </div>

                        {/* items */}
                        
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))}
                        
                        {/* footer */}
                        <div style={{width: "-webkit-fill-available"}} className="p-2 flex items-center justify-between gap-20 fixed bg-zinc-950 bottom-0">
                            <div>
                                <h3>Valor Total</h3>{" "}
                                {formatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const item = storeItems?.find(i => i.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.quantity
                                }, 0)
                                )}
                            </div>
                            
                            <button onClick={handleSubmit} className="bg-green-600">Comprar</button>
                        </div>
                    </div>
                )}
            </div>
    )
}