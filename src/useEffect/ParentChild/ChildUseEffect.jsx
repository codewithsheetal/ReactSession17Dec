import React, { useEffect } from 'react'

function ChildUseEffect({count}) {

    function childfun(){
        console.log("child function call only once");
        
    }

   //only one time run
    useEffect(()=>{
         childfun();
    },[])
    
    return (
        <>
        <h2>child comp {count} </h2>
        </>
    )
}

export default ChildUseEffect
