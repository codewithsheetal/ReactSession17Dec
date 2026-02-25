import React, { useRef } from 'react'

function FormDataUseRef() {

    
    const nameRef = useRef()
    const emailRef = useRef()

    console.log("render");
    

    function handleSubmit(e){
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        console.log(name,email);
        
    }

    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} placeholder='name'/>
            <input type="text" ref={emailRef} placeholder='email'/>
            <button>submit</button>
        </form>
        </>
    )
}

export default FormDataUseRef
