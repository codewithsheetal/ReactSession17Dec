import React, { useState } from 'react'

function LocalStorage() {
    const [name,setnName]=useState("")
    function saveValue(){
        localStorage.setItem("username","sheetal")
    }
    function getValue(){
        const savedvalue= localStorage.getItem("username")
        console.log(savedvalue);
        setnName(savedvalue)
        
    }
    return (
        <>
        {name}
        <button onClick={saveValue}>set localStorage value</button>
        <button onClick={getValue}>get localStorage value</button>
        </>
    )
}

export default LocalStorage
