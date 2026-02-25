import React, { useRef } from 'react'

function SimpleuseRef() {

    const inputRef = useRef()
    console.log("render");
    
    function focusInput(){
        console.log("focus");
        inputRef.current.focus();
    }

    function getvalue(){
        console.log(inputRef.current.value);
        
    }

    function toggle(){
        if(inputRef.current.style.display !='none'){
            inputRef.current.style.display='none';
        }
        else{
            inputRef.current.style.display='inline'
        }
    }
    return (
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={focusInput}>focus Input</button>

        <button onClick={getvalue}>get value</button>

        <br />
        <button onClick={toggle}>Toggle</button>
        </>
    )
}

export default SimpleuseRef
