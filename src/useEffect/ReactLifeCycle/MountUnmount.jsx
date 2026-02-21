import React, { useState } from 'react'
import ReactLifeCycle from './ReactLifeCycle';

function MountUnmount() {
const[show,setShow]=useState(true);

    return (
        <>
        <button onClick={()=>setShow(!show)}>
            Toggle Child Comp
        </button>

        {show && <ReactLifeCycle/>}

        </>
    )
}

export default MountUnmount
