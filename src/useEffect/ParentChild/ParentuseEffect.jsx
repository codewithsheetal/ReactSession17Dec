import React, { useState } from 'react'
import ChildUseEffect from './ChildUseEffect';

function ParentuseEffect() {
    const[count,setCount]= useState(0);
    return (
        <>
        <button onClick={()=>setCount(count+1)}>update{count}</button>

        <br /><br />
        <ChildUseEffect count={count} />
        </>
    )
}

export default ParentuseEffect
