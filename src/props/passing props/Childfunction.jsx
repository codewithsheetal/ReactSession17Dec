import React from 'react'

function Childfunction({text,onClick}) {
    return (
        <>
            <button onClick={onClick}> {text}</button>
        </>
    )
}

export default Childfunction
