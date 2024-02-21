import { useState } from "react";
import { Input } from "../components/input/Input";
import { useFoodDataMutate } from "../hooks/useFoodDataMutate";
import { FoodData } from "../interface/FoodData";
import { useFoodData } from "../hooks/useFoodData";


export function Cadastro(){

    const {data} = useFoodData();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description] = useState("pão de hamburguer, carne, alface, tomate");
    const { mutate } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData={
            title,
            price,
            image,
        }
        mutate(foodData);

        document.location.reload();
    }
    
    return(
        <div className="flex flex-col gap-5 items-center justify-center p-10 w-screen h-screen overflow-hidden">
            <h1 className="text-zinc-200 font-light text-3xl">Cadastro de Items do Cardapio</h1>
            {/* form de cadastro */}
            <div className="flex flex-col gap-10 border-b items-center justify-center">
                <form className="flex gap-5">
                    <Input label="Nome" value={title} updateValue={setTitle}/>
                    <Input label="Preço" value={price} updateValue={setPrice}/>
                    <Input label="Imagem" value={image} updateValue={setImage}/>
                </form>
                <div className="flex gap-5 mb-5">
                    <button type="submit" onClick={submit} className="rounded bg-violet-500" >Cadastrar</button>
                </div>
            </div>
            {/* tabela com itens cadastrados */}
            <div className="w-full p-10 overflow-auto">
                <table className="w-full rounded border-separate border-spacing-2 bg-violet-500 ">
                    <thead>
                        <th className="rounded bg-zinc-950">Title</th>
                        <th className="rounded bg-zinc-950">Description</th>
                        <th className="rounded bg-zinc-950">Price</th>
                    </thead>
                    <tbody >
                    {data?.map(item =>
                        <tr >
                            <td className="flex justify-center rounded bg-zinc-700 ">{item.title}</td>
                            <td className="rounded bg-zinc-700">{description}</td>
                            <td className="flex justify-center rounded bg-zinc-700 ">{`R$ ${item.price},00`}</td>
                        </tr>
                    )}   
                    </tbody>
                </table>
            </div>

        </div>
    )
}