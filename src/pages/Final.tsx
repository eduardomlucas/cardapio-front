export function Final (){


    const handleHome = () =>{
        
        window.location.replace("http://localhost:5173/");
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen w-screen gap-5">
            <h1><strong>Em Instantes avisaremos quando estiver pronto!</strong></h1> 
            <div className="flex items-center gap-5  ">
                <p>Deseja Fazer outro Pedido? </p>
                <button onClick={handleHome}>Clique Aqui</button>
            </div>
            

        </div>
    )
}