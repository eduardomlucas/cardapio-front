/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps{
    type?: string,
    label: string,
    placeholder?: string,
    value: string | number,
    updateValue(value : any ): void,
}

export function Input({label, type, placeholder, value, updateValue}:InputProps ){
    if( type === undefined){
        type = "text";
    }
    return(
        <div className="flex flex-col items-center">
            <label className="text-zinc-200 font-light text-xl">{label}</label>
            <input className="text-zinc-200 rounded" type={type} value={value} placeholder={placeholder} onChange={e =>updateValue(e.target.value)} />      
        </div>
    );
}