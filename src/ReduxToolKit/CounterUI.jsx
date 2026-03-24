import React from 'react'
import { useDispatch } from 'react-redux'
import {inc,dec,clearall,incbyfive} from './counterSlice'
import CountDisplay from './CountDisplay';

function CounterUI() {
    const dispatch = useDispatch();
    return (
        <>
        <button onClick={()=>dispatch(inc())}>inc ++ </button>
        <button onClick={()=>dispatch(dec())}>dec -- </button>
        <button onClick={()=>dispatch(incbyfive(5))}>inc by 5</button>
        {/* incbyFive(5) => {type: "inc", payload:5} */}
        <button onClick={()=>dispatch(clearall())}>clear all</button>
        <CountDisplay/>
        </>
    )
}

export default CounterUI
