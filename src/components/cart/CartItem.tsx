import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import { useFoodData } from "../../hooks/useFoodData"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const {storeItems} = useFoodData();
  const item = storeItems?.find(i => i.id === id)
  if (item == null) return null

  return (
    <div className="gap-2 p-2 flex items-center justify-center text-zinc-200 ">
        <img
          className="h-1/4 w-1/4  rounded border border-violet-600"
          src={item.image}
        />
      
      <div>
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <p>
              x{quantity}
            </p>
          )}
        </div>
        <div>
          {formatCurrency(item.price)}
        </div>

      </div>

      <div> {formatCurrency(item.price * quantity)}</div>
      <button className="bg-red-600" onClick={() => removeFromCart(item.id)}>X</button>
    </div>
  )
}