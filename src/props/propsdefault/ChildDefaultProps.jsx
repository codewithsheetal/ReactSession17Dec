import React from 'react'

function ChildDefaultProps({name, color="red"}) {
    return (
        <>
        <h2>{name}- {color}</h2>
        </>
    )
}

export default ChildDefaultProps
