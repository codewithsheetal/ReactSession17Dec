import React, { useState } from 'react'

function Form() {
    const [name,setName]= useState("");
    const [fname,setFname]= useState("");
    const [isSubmitted,setIssubmitted]= useState(false);
    const [fnameSubmitted,setFnameSubmitted]=useState("");

    let fnamenormal="";

    function handleSubmit(e){
        e.preventDefault();
        // console.log(fname);
        setIssubmitted(true);
        setFnameSubmitted(fname);
        fnamenormal=fname;
        console.log(fnamenormal);
        setFname("");

    }

    function handleNormalClick(){
        console.log("hello");
    }

    return (
        <>
        {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h1>{name}</h1> */}

        <form onSubmit={handleSubmit}>
            <input type="text"  value={fname} onChange={(e)=>setFname(e.target.value)}/>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleNormalClick}>Normal button</button>
            <button type="button" onClick={()=>console.log("normal button 2")}>Normal button2</button>
        </form>

        {isSubmitted && <h1>your first name is : {fnamenormal}</h1>}
        </>
    )
}

export default Form
