import React, { useState } from 'react'
import useLoader from './useLoader'

function Loaderusedincomp() {
    const { Loading,error,
        startLoading,
        stopLoading,
        setErrormsg} = useLoader();

        const[data,setData]=useState("")
        const handleClick=()=>{
        startLoading();

        setTimeout(()=>{
            const result = true;

            if(result){
                setData("data loaded successfully");
               
            }
            else{
                setErrormsg("Oops!! wrong")
                setData("");
            }
            stopLoading();
        },2000);
    }
    
    return (
        <>
         <button onClick={handleClick}>Load data </button>
          {Loading && <h1>Loading.....</h1>}
        {data && <h1>{data}</h1>}
        {error && <p style={{color:'red'}}>{error}</p>}
        </>
    )
}

export default Loaderusedincomp
