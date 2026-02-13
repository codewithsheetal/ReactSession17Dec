import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigateButton() {
    const nav = useNavigate();
    function gotoabout(){
        nav("/about");
    }
    return (
        <>
            <button onClick={gotoabout}>Go to About </button>
        </>
    )
}

export default NavigateButton
