import React from 'react'
import useToggle from './useToggle'

function ToggleUsedcomp() {
    const[isshow, toggleshowhide]= useToggle();
    
    return (
        <>
        <button onClick={toggleshowhide}>
            { isshow ? "Hide": "show"}
        </button>

        {
            isshow && <h1>this is visible</h1>
        }
        </>
    )
}

export default ToggleUsedcomp
