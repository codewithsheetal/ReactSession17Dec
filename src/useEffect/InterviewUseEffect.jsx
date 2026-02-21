import React, { useEffect, useState } from 'react'

function InterviewUseEffect() {
    const [count,setCount]=useState(0);

    //Infinite loop 
    // useEffect(()=>{
    //     setCount(count+1)
    // })

    //Infinite loop
    // useEffect(()=>{
    //     setCount(count+1)
    // },[count])

    // run only once 
    // useEffect(()=>{
    //     setCount(count+1)
    // },[])

    useEffect(()=>{
        if(count<10){
            setCount(count+1);
        }

    },[count])



    return (
        <>
        <p> counter : {count} </p>
        {/* <button onClick={()=>setCount(count+1)}>count {count} </button> */}
        </>
    )
}

export default InterviewUseEffect
