import React, { useEffect, useRef, useState } from 'react'

function LastValue() {
    const [count,setCount]=useState(0);
    const prevCount = useRef(null); // stores value without re-rendering
    console.log("render");

    //save the current value after render , so next render can use it as prev value
    //runs after render
    useEffect(()=>{
        prevCount.current= count;
    },[count])
    
    return (
        <>
        <p>current: {count}</p>
        <p>Previous value: {prevCount.current}</p>
        <button onClick={()=>setCount(count+1)}>count </button>
        </>
    )
}

export default LastValue

// first render 
// count=0; 
// prevcount =null 

// prevcount =0 

// second render 
// count =1
// prevcount =0

// prevcount =1
