import React from 'react'
import Parentcontextcomp from './Parentcontextcomp'

function Grandparentcontextcomp() {
    return (
        <>
        <h1> grand parent comp</h1>
        <Parentcontextcomp/>
        </>
    )
}

export default Grandparentcontextcomp
