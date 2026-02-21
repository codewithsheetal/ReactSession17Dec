import React, { use, useEffect, useState } from 'react'

function SimpleUseEffect() {
    const [count, setCount ]= useState(0);
    const [countby10, setCountBy10 ]= useState(10);

    function demo(){
        console.log("call once");
        
    }
    
    // run only once
    // useEffect(()=>{
    //     demo();
    // },[])

    // call on every render
    // useEffect(()=>{
    //     demo();
    // })


    useEffect(()=>{
        demo();
    },[count])

    return (
        <>
        <h1>use effect</h1>
        <button onClick={()=>setCount(count+1)}>Count update {count}</button>
        <button onClick={()=>setCountBy10(countby10+10)}>Count update by 10 {countby10}</button>
        </>
    )
}

export default SimpleUseEffect
