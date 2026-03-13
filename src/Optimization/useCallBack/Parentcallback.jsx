import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback';

function Parentcallback() {
    const [count,setCount]=  useState(0);
    console.log("parent ");

    // function handleClick (){
    //     console.log("function calling");
    //     // 1000, 2000 
    // }

    // memoize function so ref is stable
    const handleClick = useCallback(()=>{
        console.log("function is calling");
        
    },[]);
    // },[count]);
    
    return (
        <>
        <h1>this is parent callback</h1>
        <h2>count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>count</button>
        <ChildCallback onClick={handleClick}/>
        </>
    )
}

export default Parentcallback
