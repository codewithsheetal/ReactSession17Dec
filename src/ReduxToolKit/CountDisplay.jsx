import React from 'react'
import { useSelector } from 'react-redux'

function CountDisplay() {
    const selector = useSelector((state)=>state.counter.value);
    console.log(selector);
    
    return (
        <>
        <h1>{selector}</h1>
        </>
    )
}

export default CountDisplay
