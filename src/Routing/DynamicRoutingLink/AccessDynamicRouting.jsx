import React from 'react'
import { useParams } from 'react-router-dom'

function AccessDynamicRouting() {
    const {id}= useParams();
    // console.log(id);
    const products=[
        {id:1,name:"phone"},
        {id:2,name:"Laptop"},
        {id:3,name:"Tablet"},
    ]
    
    return (
        <>
        <h3>id ={id}</h3>
        </>
    )
}

export default AccessDynamicRouting
