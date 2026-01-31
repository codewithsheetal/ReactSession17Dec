import React, { useState } from 'react'

function RadioButton() {
    const[gender,setGender]= useState("female")

    function handleChange(e){
        setGender(e.target.value)
        
        

    }

  
    return (
        <>
        <input type="radio" name="gender" value="male" onChange={handleChange} checked= {gender==="male"}/> Male 
        <input type="radio" name="gender" value="female" onChange={handleChange} checked= {gender==="female"}/> Female
        <input type="radio" name="gender" value="other" onChange={handleChange} checked= {gender==="other"}/> Other

        <p>selected gender : {gender}</p>
        </>
    )
}

export default RadioButton
