import React from 'react'
import products  from './product'
function GetProductlits() {
    return (
        <>
        <h1>Product List</h1>
        {
            products.map((p)=>(
                <div key={p.id}> 
                        <h2>{p.name}- {p.price}</h2>
                </div>
            ))
        }
        </>
    )
}

export default GetProductlits
