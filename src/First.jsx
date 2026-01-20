import React, { useState } from 'react'
import Second from './component/Myfile'
import Sec from './Sec';

function First() {
    const [count,setCount]=useState(0);
    
    return (
        <>
        {count}
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <Sec/>
        </>
        
    )
}


export default First

