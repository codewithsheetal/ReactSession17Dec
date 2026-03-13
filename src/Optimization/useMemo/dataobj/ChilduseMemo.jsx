import React from 'react'

const ChilduseMemo= React.memo(({data}) =>{
    console.log("child");
    
    return (
        <>
        <h1>child use memo {data.name}</h1>
        </>
    )
})

export default ChilduseMemo
