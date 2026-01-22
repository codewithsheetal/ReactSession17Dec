import React from 'react'

function Event() {
    function clickHandler(){
        alert("Button clicked")
    }
    function clickHandlerForArg(a){
        console.log(a);

    }

    function handleChange(e){
        // console.log(e)
        console.log(e.target.value)
        console.log(e.target.name)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("form submitted")
    }
    return (
        <>
        {/* html 
        <button onclick="xyz()">click me</button> */}

        {/* wrong way  */}
        {/* <button onClick={clickHandler()}>Click Me</button> */}

        {/* <button onClick={clickHandler}>Click Me</button> */}

        {/* Argument  */}
        {/* wrong way */}
        {/* <button onClick={clickHandlerForArg(5)}>Click Me</button> */}

        {/* <button onClick={()=>clickHandlerForArg(5)}>Click Me</button>

        <input type="text" onChange={handleChange} /> */}

            {/* inline Event Handling  */}
        {/* <button onClick={()=>alert("hello buddy")}>Click me for Alert </button>

        <button> show </button> */}


        {/* <form onSubmit={handleSubmit}>
<button>submit</button>

        </form> */}
        </>
    )
}

export default Event
