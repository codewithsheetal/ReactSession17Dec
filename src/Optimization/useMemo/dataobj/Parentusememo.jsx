import React, { useMemo, useState } from 'react'
import ChilduseMemo from './ChilduseMemo';

function Parentusememo() {
        const [count,setCount]=  useState(0);
        
        console.log("parent ");
    const data =useMemo(()=>({name:"sanvi"}),[])
    return (
        <>
        <h1>parent usememo</h1>
        <h2>count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>count</button>
        {/* <ChilduseMemo data={{name:"sheetal"}}/> */}
        <ChilduseMemo data={data}/>
        </>
    )
}

export default Parentusememo
