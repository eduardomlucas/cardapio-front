import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCreditCard, FaDollarSign, FaFlag, FaMotorcycle, FaPix, FaRegCreditCard, FaStore } from "react-icons/fa6";
import { useOrderDataMutate } from "../../hooks/useOrderDataMutate";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface EntregaFormProps {
    data: any
}

export function EntregaForm({data}: EntregaFormProps){

    const {register, handleSubmit} = useForm()
    
    const pedido = data;
    const {mutate} = useOrderDataMutate();
    const response  = useLocalStorage("order-data",[]);
    const [formaPagamento, setFormaPagamento] = useState("");
    const [entrega, setEntrega] = useState("");

    const submit = async (form: any) => {
        console.log(form);
        console.log(pedido)

        const dto = {
            nome: form.nome,
            telefone: form.celular,
            entrega: entrega,
            endereco: {
                logradouro: form.endereco,
                numero: form.numero,
                complemento: form.complemento,
            },
            pagamento: {
                formaPagamento: formaPagamento,
                bandeira: form.bandeira
            },
            pedido: pedido,
        };
        
        mutate(dto);
        alert(JSON.stringify(response[0]));
        window.location.replace("http://localhost:5173/final");
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col items-center justify-center gap-5">
            <p>Informe mais alguns dados e já iremos iniciar o seu pedido</p>
            {/* campos basicos */}
            <div className="flex flex-col gap-3 ">
                <div className=" flex gap-5">
                    <div className="flex items-center gap-2">
                        <label>Nome</label>
                        <input type="text" {...register('nome')} />

                        <label>Celular</label>
                        <input type="text" {...register('celular')}/>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-10 ">
                    <div className="flex gap-10">
                        <button disabled={entrega === "local"} onClick={ () => setEntrega("local")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                            <FaStore/>
                            <p>Buscar no Local</p>
                        </button>
                        <button  disabled={entrega === "casa"} onClick={ () => setEntrega("casa")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                            <FaMotorcycle/>
                            <p>Entrega em Casa</p>
                        </button>
                    </div>
                </div>
                </div>                     
                
                {/* div-endereco */}
                {entrega === "casa" &&(
                    <div className="flex gap-3 p-3 items-center justify-between rounded-xl border border-violet-600">
                        <div className="flex gap-3 items-start">
                            <label>Endereço</label>
                            <input type="text" {...register("endereco")}/>
                        </div>
                        <div className="flex gap-3 justify-center">
                            <label>Número</label>
                            <input type="text" {...register("numero")}/>
                        </div>
                        <div className="flex gap-3 justify-center">
                            <label>Complemento</label>
                            <input type="text" {...register("complemento")}/>
                        </div>
                    </div>
                )}

            </div>

            {/* forma-pagamento */}
            <div className="flex gap-10 items-center justify-center">
                <button disabled={formaPagamento === "pix"} onClick={ () => setFormaPagamento("pix")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                    <FaPix/>
                    <p>pix</p>
                </button>
                <button disabled={formaPagamento === "credit"} onClick={ () => setFormaPagamento("credit")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                    <FaCreditCard/>
                    <p>cart. de débito</p>
                </button>
                <button disabled={formaPagamento === "debit"} onClick={ () => setFormaPagamento("debit")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                    <FaRegCreditCard/>
                    <p>cart. de crédito</p>
                </button>
                <button disabled={formaPagamento === "money"} onClick={ () => setFormaPagamento("money")} className="disabled:bg-violet-600/40 flex gap-3 items-center">
                    <FaDollarSign/>
                    <p>dinheiro</p>
                </button>
            </div>

            {/* is-card */}
            {(formaPagamento === "credit" || formaPagamento === "debit") && (
                <div className="flex flex-col p-5 border w-1/4 border-violet-600 rounded-xl">
                    <div className="flex gap-2 items-center justify-center">
                        <FaFlag className="text-violet-600"/>
                        <p>Selecione a Bandeira</p>
                    </div>

                    <select {...register('bandeira')}>
                        <option>VISA</option>
                        <option>MASTERCARD</option>
                        <option>ELO</option>
                    </select>   
                </div>
            )}

            <div className="flex gap-10 mt-20">
                <button className="bg-red-600">Cancelar</button>
                <button type="submit" className="bg-green-600">Finalizar Pedido</button>
            </div>
            
        </div>
    </form>
    )
}