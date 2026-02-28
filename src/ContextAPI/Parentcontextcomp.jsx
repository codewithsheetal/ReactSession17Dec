import React, { useContext } from 'react'
import ChildContextcomp from './ChildContextcomp'
import SeprateContext from './SeprateContext'

function Parentcontextcomp() {
    const data= useContext(SeprateContext);
    return (
        <>
        <h2>parent comp {data}</h2>
        {/* <ChildContextcomp/> */}
        </>

    )
}

export default Parentcontextcomp
