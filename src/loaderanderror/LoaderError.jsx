import React, { useState } from 'react'

function LoaderError() {
    const[Loading,setLoading]= useState(false);
    const[data,setData]=useState();
    const[error,setError]= useState("");

    const handleClick=()=>{
        setLoading(true);

        setTimeout(()=>{
            const result = false;

            if(result){
                setData("data loaded successfully");
                setError("");
            }
            else{
                setError("Oops!! something is wrong");
                setData("");
            }
            setLoading(false);
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

export default LoaderError
