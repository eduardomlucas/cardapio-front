import { ReactNode } from "react";

interface CardBodyProps{
    children?: ReactNode;
    image?: string;
}
export function CardBody({...props}: CardBodyProps){
    return(
        <div className="flex p-3 justify-between">
                
            <p>pão de hamburguer, carne, alface, tomate </p>
            
            {props.image &&(
                <img className="w-1/2 h-3/4 rounded-t-lg " src={props.image}/>
            )}
            {props.children}
            
        </div>
    );
}