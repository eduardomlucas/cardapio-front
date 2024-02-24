import { TbTruck } from "react-icons/tb";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { EntregaForm } from "../components/forms/EntregaForm";
export function Entrega(){

    const pedido = useLocalStorage("shopping-cart",[]);

    return(
        <div className="h-screen w-screen flex flex-col gap-5">
            <div className="flex p-3 items-center gap-2 justify-center">
                <h1> Estamos quase lá  </h1>
                <TbTruck className="text-violet-600" size={64} />
            </div>
            
            <EntregaForm data={pedido[0]}/>
            {/* <p>{JSON.stringify(dto).toString()}</p> */}
        </div>
    )
}