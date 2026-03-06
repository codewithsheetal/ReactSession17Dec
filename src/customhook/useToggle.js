import { useState } from "react"

function useToggle(){
    const [value,setValue] = useState(false)
    const toggle=()=>{
        setValue(value=>!value)
    }

    return[value,toggle];

}
export default useToggle;