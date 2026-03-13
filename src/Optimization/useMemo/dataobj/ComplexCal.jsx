import React, { useMemo, useState } from 'react'

function ComplexCal() {
    const[count,setCount]= useState(0);
    const[value,setValue] = useState("");

    const expensivecal =(num)=>{
        console.log("calculating...");
        
        return num*2;
        
    }

    // const result = expensivecal();
    // console.log(result);

    const ans = useMemo(()=>expensivecal(count),[count]);
    console.log(ans);
    
    

    return (
        <>
        <h1>count : {count}</h1>

        <button onClick={()=>setCount(count+1)}>count ++</button>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <p>{value}</p>
        </>
    )
}

export default ComplexCal
