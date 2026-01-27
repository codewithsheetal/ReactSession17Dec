import React, { useState } from 'react'

function StateExample() {
    const[count,setCount]= useState(0); // count = 0
    const[display,setDisplay]=useState(false);
    const[name,setName]=useState("sheetal");

    console.log("render")
    // setCount(count+1)

    function handleClick(){
        setCount(count+1);
        console.log(count); //0
    }
    return (
        <>
        <h1>{count}</h1>
        {/* <button onClick={()=>setCount(count+10)}>increment </button> */}

        {/* <button onClick={handleClick}>Count Console</button> */}
{/* 
        <button onClick={()=>{
            setCount(count+1)
            setCount(count+1)
            setCount(count+1)
        }}>increment by 3</button> */}

        {/* <button onClick={()=>{
            setCount(prev=>prev+1);
            setCount(prev=>prev+1);
            setCount(prev=>prev+1);
        }}>Inc by 3</button> */}

    <button onClick={()=>setDisplay(!display)}>Display h1 tag</button>
        {display && <h1>hello everyone, </h1> }
        </>
    )
}

export default StateExample
