import React, { useState } from 'react'
import ChildComp from './ChildComp'

function ParentComp() {
    const [name,setName]=useState("sheetal");
    console.log(name); //sheetal
    
    return (
        <>
        <ChildComp name={name} />
        </>
    )
}

export default ParentComp
