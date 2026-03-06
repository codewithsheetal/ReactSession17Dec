import { useState } from "react";

function useCount(initialvalue=0){
    const[count,setCount]= useState(initialvalue);

    const inc=()=>setCount(prev=>prev+1);
    const dec=()=>setCount(prev=>prev-1);

    return {count, inc,dec}
}

export default useCount;

