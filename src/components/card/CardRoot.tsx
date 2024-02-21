import { ReactNode } from "react";

interface CardRootProps{
    children: ReactNode;
}

export function CardRoot({...props}: CardRootProps){
    return(
        <>
            <div className="flex bg-violet-950 flex flex-col gap-5 rounded-xl" >
                {props.children}
            </div>
        </>
    );
}