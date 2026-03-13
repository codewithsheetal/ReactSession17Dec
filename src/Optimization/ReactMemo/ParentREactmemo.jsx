import React, { useState } from 'react'
import ChildReactMemo from './ChildReactMemo'

function ParentREactmemo() {
    const[count,setCount]=useState(0)
    console.log("parent Render");
    
    return (
        <>
        <h1>Paerent memo</h1>
        <button onClick={()=>setCount(count+1)}>count {count}</button>
        <ChildReactMemo/>
        </>
    )
}

export default ParentREactmemo
