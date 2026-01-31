import React, { useState } from 'react'

function DropDown() {

    const [country,setCountry]=useState("");

    function handleChange(e){
        setCountry(e.target.value);
    }
    return (
        <>
        <select onChange={handleChange}>
            <option value=""> select Country </option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Aus">Aus</option>

        </select>

        <h1>{country}</h1>
        </>
    )
}

export default DropDown
