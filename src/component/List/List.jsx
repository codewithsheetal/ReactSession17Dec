import React from 'react'

function List() {

    const users = ["A", "B", "X","Y"];

    const usersO = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "X" },
        { id: 4, name: "Y" },
    ]

    //  a [10, 20, 30 ]==> [20, 10, 30 ] 
    // const n =[1,2,3]
    // const doubled= n.map(n=>n*2)
    // console.log(doubled)
    return (
        <>
            {/* {
            users.map((user)=>(
                <p>{user}</p>
            ))
        } */}

            {/* with Key  */}

            {/* { users.map((user,key)=>(
                <p key={key}>user ={user} and key ={key}</p>
            ))} */}

            {/* user id as a key  */}

            {/* {
                usersO.map((user)=>(
                    <p key={user.id}>id = {user.id} and name ={user.name}</p>
                ))
            } */}
            {
                usersO.map((user) => (
                    <div key={user.id}>
                        <p>id = {user.id} </p>
                        <h1>{user.name}</h1>
                    </div>
                ))
            }
        </>
    )
}

export default List
