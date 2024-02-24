/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputSelectProps{
    label: string,
    items: Array<{id: number, text: string}>,
}

export function InputSelect({...props}: InputSelectProps){
    return(
        <div className="flex flex-col items-center">
            <label className="text-zinc-200 font-light text-xl">{props.label}</label>
            <select className="text-zinc-950 rounded bg-zinc-200" >
                {props.items.map( item => {
                    return(
                        <option key={item.id}>{item.text}</option>
                    )
                })}
            </select>
        </div>
    )
}