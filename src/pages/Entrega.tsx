import { TbTruck } from "react-icons/tb";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Input } from "../components/input/Input";
import { useState } from "react";
import { FaPix, FaCreditCard, FaRegCreditCard, FaDollarSign, FaFlag } from "react-icons/fa6";
import { InputSelect } from "../components/input/InputSelect";


export function Entrega(){

    const pedido = useLocalStorage("shopping-cart",[]);

    //dto example
    const dto = {
        nome: "Eduardo",
        telefone: "53991034448",
        endereco: "marcilio dias - 2233, Centro, Bagé - RS" ,
        formaPagamento: {
            id: 1,
            text: "pix"
        },
        pedido: pedido[0],
    }   

    const [nome, setNome] = useState("");
    const [celular, setCelular] = useState("");
    const [endereco, setEndereco] = useState("");
    const [entrega, setEntrega] = useState(0);
    const [formaPagamento, setFormaPagamento] = useState("");
    const [pix, setPix] = useState(false);
    const [credit, setCredit] = useState(false);
    const [debit, setDebit] = useState(false);
    const [money, setMoney] = useState(false);
    const [cardType, setCardType] = useState(0);

    const [isCard, setIsCard] = useState(false);

    const handlePayment = (id: string) => {

        // ajuste dos botões e da div
        switch(id){
            case "pix":
                setIsCard(false);
                setPix(true);
                setCredit(false);
                setDebit(false);
                setMoney(false);
                setFormaPagamento("pix");
            break;
            case "credit":
                setIsCard(true);
                setPix(false);
                setCredit(true);
                setDebit(false);
                setMoney(false);
                setFormaPagamento("credit");
            break;
            case "debit":
                setIsCard(true);
                setPix(false);
                setCredit(false);
                setDebit(true);
                setMoney(false);
                setFormaPagamento("debit");
            break;
            case "money":
                setIsCard(false);
                setPix(false);
                setCredit(false);
                setDebit(false);
                setMoney(true);
                setFormaPagamento("money");
            break;
        }
    }

    const submit = () => {
        const dto = {
            nome: nome,
            telefone: celular,
            entrega: entrega,
            endereco: endereco,
            formaPagamento: {
                id: formaPagamento,
                bandeira: cardType
            },
            pedido: pedido[0],
        }   
        console.log("-----------------")
        console.log(JSON.stringify(dto));
        console.log("POST -> makeOrder");
    }

    return(
        <div className="h-screen w-screen flex flex-col gap-10">
            <div className="flex p-3 items-center gap-5 justify-center">
                <TbTruck className="text-violet-600 mt-2" size={50} />
                <h1> Estamos quase lá  </h1>
            </div>
            
            {/* form */}
            <div className="flex flex-col items-center justify-center gap-5">
                <p>Informe mais alguns dados e já iremos iniciar o seu pedido</p>
                <div className="flex gap-5">
                    <Input label="Nome" value={nome} updateValue={setNome} />
                    <Input label="Celular" value={celular} updateValue={setCelular} />
                    <Input label="Endereco" value={endereco} updateValue={setEndereco} />
                    <InputSelect label="Forma de Entrega" items={[{id: 1, text: "buscar no local"}, {id: 2, text: "delivery"}]} value={entrega} updateValue={setEntrega} />
                </div>

                {/* forma-pagamento */}
                <div className="flex gap-10 items-center justify-center">
                    <button disabled={pix} onClick={ () => handlePayment("pix")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                        <FaPix/>
                        <p>pix</p>
                    </button>
                    <button disabled={credit} onClick={ () => handlePayment("credit")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                        <FaCreditCard/>
                        <p>cart. de débito</p>
                    </button>
                    <button disabled={debit} onClick={ () => handlePayment("debit")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                        <FaRegCreditCard/>
                        <p>cart. de crédito</p>
                    </button>
                    <button disabled={money} onClick={ () => handlePayment("money")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                        <FaDollarSign/>
                        <p>dinheiro</p>
                    </button>
                </div>

                {/* is-card */}
                {isCard && (
                    <div className="flex flex-col p-5 border w-1/4 border-violet-600 rounded-xl">
                        <div className="flex gap-2 items-center justify-center">
                            <FaFlag className="text-violet-600"/>
                            <p>Selecione a Bandeira</p>
                        </div>
                        <InputSelect label="" items={[{id: 0, text: "VISA"}, {id: 1, text: "MASTERCARD"}, {id: 3, text: "ELO"}]} value={cardType} updateValue={setCardType} />
                        
                    </div>
                )}

                <div className="flex gap-10">
                    <button className="bg-red-600">Cancelar</button>
                    <button onClick={submit} className="bg-green-600">Finalizar Pedido</button>
                </div>
                
            </div>
        
            <p>{JSON.stringify(dto).toString()}</p>
        </div>
    )
}