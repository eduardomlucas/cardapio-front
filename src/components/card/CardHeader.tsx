import { ReactNode } from "react";

interface CardHeaderProps{
    children: ReactNode
}

export function CardHeader({...props}: CardHeaderProps){
    return(
        <>
            <div className="p-2 text-zinc-100 font-light text-3xl">
                {props.children}
            </div>
        </>
    );
}