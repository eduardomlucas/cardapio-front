import { ReactNode } from "react";

interface CardFooterProps{
    children?: ReactNode
}

export function CardFooter({...props}: CardFooterProps){

    return(
        <>
            <div className="flex items-center justify-center">
                <div className="text-zinc-200">
                    {props.children}
                </div>
            </div>
        </>
    ); 
}