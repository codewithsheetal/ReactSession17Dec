import React, { useEffect, useState } from 'react'
import { fetchUsers } from './api'

function GetAPIdata() {
    const [user,setUser] =useState([])
    const[error,setError]=useState("");

    useEffect(()=>{
        const getUser = async()=>{
            try{
                const data = await fetchUsers();
                // console.log(data);
                setUser(data);
                
            }
            catch(error){
                setError("oops");
            }
        }
        getUser();
    },[])
    return (
        <>
        <h1>user list</h1>
       <ul>
        {user.map((u)=>(
            <li key ={u.id}>{u.name}- {u.email}</li>
        ))}
        </ul>
        </>
    )
}

export default GetAPIdata
