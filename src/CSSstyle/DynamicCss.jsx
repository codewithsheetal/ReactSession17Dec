import React, { useState } from 'react'

function DynamicCss() {
    const [color , setColor]=useState("blue");

    function handleclick(){
        setColor(prev=>prev === "blue"? "red":"blue");
    }
    return (
        <>
        <h1 style={{color:color}}>Dynamic CSS </h1>
        <button onClick={()=>setColor("red")}>Change color</button>

        <button onClick={handleclick}> color</button>
        </>
    )
}

export default DynamicCss
