/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputSelectProps{
    label: string,
    value: string | number,
    items: Array<{id: number, text: string}>,
    updateValue(value : any ): void,
}

export function InputSelect({...props}: InputSelectProps){
    return(
        <div className="flex flex-col items-center">
            <label className="text-zinc-200 font-light text-xl">{props.label}</label>
            <select className="text-zinc-950 rounded bg-zinc-200" value={props.value} onChange={e =>props.updateValue(e.target.value)} >
                {props.items.map( item => {
                    return(
                        <option key={item.id}>{item.text}</option>
                    )
                })}
            </select>
        </div>
    )
}