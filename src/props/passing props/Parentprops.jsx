import React from 'react'
import Childprops from './Childprops'
import ChildDestructuringProps from './ChildDestructuringProps'
import Childfunction from './Childfunction'

function Parentprops() {

    function handleclick (){
        alert("clicked")
    }
    return (
        <>
        <h1>parent comp</h1>
        {/* <Childprops name="sheetal" age ={10}/> */}
        {/* <ChildDestructuringProps name="sheetal" age={10}/> */}

        {/* <Childfunction text ="click me" onClick ={()=>alert("clicked")}/> */}
        <Childfunction text ="click me" onClick ={handleclick}/>
        </>
    )
}

export default Parentprops
