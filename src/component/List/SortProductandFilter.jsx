import React from 'react'

function SortProductandFilter() {

    // const a=[10,3,5,20];
    const products = [
        { id: 1, name: "claptop", price: 10000 },
        { id: 2, name: "aphone", price: 5000 },
        { id: 3, name: "bmacbook", price: 20000 }
    ]

    let nproducts = [...products];

    // let nproducts= [
    //     products[0],
    //     products[1],
    //     products[2]
    // ]

    let dproducts = [...products];

    const sortedProduct = nproducts.sort((a, b) => a.price - b.price); //ascending
    
    const sortedProductD = dproducts.sort((a, b) => b.price - a.price); //descending 

    let atozproduct = [...products];
    const sortAtoZ = atozproduct.sort((a, b) => a.name.localeCompare(b.name)) //  A B --> -1 --> A , B A --> 1 --> A

    let ztoaproduct = [...products]
    const sortZtoA = ztoaproduct.sort((a, b) => b.name.localeCompare(a.name)) //  A B --> -1 --> A , B A --> 1 --> A

    const filterdproduct = products.filter((a,b)=>a.price>6000);
    console.log(filterdproduct);
    
    // 10000-5000 = 5000  ==> b then a
    // 4000-5000 = -1000  ==> a then b


    // const sortedProduct = products.sort((a,b)=>a-b);


    return (
        <>
            <h2>display products</h2>

            {
                products.map((item) => (
                    <div key={item.id}>
                        <h3 >{item.id} - {item.name} - {item.price}</h3>
                        {/* <h2>{item.price}</h2> */}
                      
                        
                    </div>
                    // <Product key={item.id} name={item.name} price={item.price}/>

                  


                ))
            }

            <h2>sorted product ascending</h2>
            {
                sortedProduct.map((item) => (
                    <div key={item.id}>
                        <h3 >{item.id} - {item.name} - {item.price}</h3>
                        {/* <h2>{item.price}</h2> */}
                    </div>


                ))
            }
            <h2>sorted product descending</h2>
            {
                sortedProductD.map((item) => (
                    <div key={item.id}>
                        <h3 >{item.id} - {item.name} - {item.price}</h3>
                        {/* <h2>{item.price}</h2> */}
                    </div>


                ))
            }

            <h2>sorted A to Z </h2>
            {
                sortAtoZ.map((item) => (
                    <div key={item.id}>
                        <h3 >{item.id} - {item.name} - {item.price}</h3>
                        {/* <h2>{item.price}</h2> */}
                    </div>


                ))

            }
            <h2>sorted Z to A</h2>
            {
                sortZtoA.map((item) => (
                    <div key={item.id}>
                        <h3 >{item.id} - {item.name} - {item.price}</h3>
                        {/* <h2>{item.price}</h2> */}
                    </div>


                ))

            }
            <h2>sorted filtered product  </h2>
            {
                filterdproduct.map((item) => (
                    <div key={item.id}>
                        <h3 >{item.id} - {item.name} - {item.price}</h3>
                        {/* <h2>{item.price}</h2> */}
                    </div>


                ))

            }
        </>
    )
}

export default SortProductandFilter
