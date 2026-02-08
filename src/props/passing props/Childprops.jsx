import React from 'react'

function Childprops(props) {
    return (
        <>
        <h1>child comp</h1>
        <h3>{props.name} - {props.age}</h3>
        </>
    )
}

export default Childprops
