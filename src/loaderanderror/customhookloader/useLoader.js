import { useState } from "react";

export default function useLoader(){
    const[Loading,setLoading]= useState(false);
    const[error,setError]= useState("");

    const startLoading=()=>{
        setLoading(true);
        setError("");
    }

    const stopLoading =()=>{
        setLoading(false);
    }

    const setErrormsg =(msg)=>{
        setError(msg);
        setLoading(false);
    }

    return {
        Loading,
        error,
        startLoading,
        stopLoading,
        setErrormsg
    }
    

}

