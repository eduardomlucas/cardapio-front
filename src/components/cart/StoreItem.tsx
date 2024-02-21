import { useShoppingCart } from "../../context/ShoppingCartContext"

type StoreItemProps = {
  id: number
}

export function StoreItem({ id }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <div>
        <div >
          {quantity === 0 ? (
            <button onClick={() => increaseCartQuantity(id)}>
              Adicionar ao Carrinho
            </button>
          ) : (
            <div className="flex">
              
              <div className="flex items-center gap-3">
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                
                <div>
                  {quantity}
                </div>
                
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              
              <div className="ml-20">
                <button className="bg-red-600" onClick={() => removeFromCart(id)}>Remove</button>
              </div>
              
            
            </div>
          )}
        </div>
    </div>
  )
}