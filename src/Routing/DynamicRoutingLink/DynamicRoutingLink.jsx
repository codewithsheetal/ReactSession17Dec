import React from 'react'
import { Link } from 'react-router-dom'

function DynamicRoutingLink() {
    const products=[
        {id:1,name:"phone"},
        {id:2,name:"Laptop"},
        {id:3,name:"Tablet"},
    ]
    return (
        <>
        {
            products.map((item)=>(
                <div key={item.id}>
                    <Link to={`/dynamic/${item.id}`}>
                    {item.name}
                    </Link>
                    
                </div>
            ))
        }
        </>
    )
}

export default DynamicRoutingLink
