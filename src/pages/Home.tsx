import { useFoodData } from "../hooks/useFoodData";
import { Card } from "../components/card";
import { BiSearch, BiCart } from "react-icons/bi";
import { StoreItem } from "../components/cart/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Home(){

    const {storeItems} = useFoodData();

    const errorMessage = "erro ao buscar dados do servidor, tente novamente mais tarde";
    
    const { openCart, cartQuantity } = useShoppingCart() 

    return(
        <div className="flex flex-col gap-5 items-center justify-center p-10 relative">
            {/* carrega a tela apenas se tiver dados */}
            {storeItems ? (
                <>
                    <div className="flex flex-col gap-3 ">
                        <h1 className='flex items-center justify-center text-zinc-300 font-light'>Bem-vindo ao nosso Cardápio Virtual!</h1>
                        <div className='flex justify-center items-center gap-5 '>
                            <div className="flex bg-violet-600 rounded-full items-center gap-3 ">
                                <input className="bg-violet-600 rounded-full placeholder-zinc-200" placeholder="   Procure..." type="text" />
                                <button className="bg-violet-600 rounded-full" > <BiSearch/></button>
                            </div>
                            
                        </div>
                        <div className="flex flex-col items-center text-zinc-100">
                            <p>Explore nossa variedade de pratos deliciosos e descubra sabores incríveis! Estamos felizes por você estar aqui.</p>
                            <p>Deixe-se levar pela experiência gastronômica que preparamos especialmente para você.</p>
                            <b>Bom apetite!</b>
                        </div>
                    </div>

                    {/* carrinho */}
                    {cartQuantity > 0 && (
                        <button
                            onClick={openCart}
                            style={{ width: "3rem", height: "3rem", position: "relative" }}
                            className="rounded-full"
                        >
                            <BiCart/>
                            <div
                                className="rounded-full bg-red-600 flex justify-center items-center"
                                style={{
                                    color: "white",
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    transform: "translate(25%, 25%)",
                                }}
                            >
                                {cartQuantity}
                            </div>
                        </button>
                    )}

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                        {storeItems?.map(foodData=>
                            <Card.Root>
                                <Card.Header>
                                    <div className="flex justify-between">
                                        <p>{foodData.title}</p>
                                        <p>{`R$ ${foodData.price},00`}</p>
                                    </div>
                                    
                                </Card.Header>
                                <Card.Body image={foodData.image}/>
                                <Card.Footer >
                                    <StoreItem id={foodData.id}></StoreItem>
                                </Card.Footer>
                            </Card.Root>
                        )}         
                    </div>
                </>  
            ) : <h1>{errorMessage}</h1>}
        </div>
    );
}