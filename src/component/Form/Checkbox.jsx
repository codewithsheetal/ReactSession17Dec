import React, { useState } from 'react'

function Checkbox() {

    const [isChecked,setIschecked]= useState(false);

function handleChange(e){
    console.log(e.target.checked);  // true or false 
    console.log(e.target.value);  // true or false 
    setIschecked(e.target.checked)
}
    return (
        <>
        <input type="checkbox" onChange={handleChange} value="termsandcondition"/> Terms and Conditions 

        <p>{isChecked ? "yes":"no"}</p>
        </>
    )
}

export default Checkbox
