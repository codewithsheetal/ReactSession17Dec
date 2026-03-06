import React from 'react'
import useCount from './useCount'

function Counterhookused() {
    const {count,inc ,dec }=useCount();
    return (
        <>
        <h1>{count}</h1>

        <button onClick={inc}>increment</button>
        <button onClick={dec}>Decrement</button>
        </>
    )
}

export default Counterhookused
