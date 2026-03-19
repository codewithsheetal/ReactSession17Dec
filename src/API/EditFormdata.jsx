import React, { use, useEffect, useState } from 'react'
import { updateUser } from './api';

function EditFormdata({user,onUpdate}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // console.log(user);
    
    useEffect(()=>{
        if(user){
            setName(user.name || "")
            setEmail(user.email || "")
        }
    },[user])
    const handleSubmit =async (e)=>{
        e.preventDefault();

        try{
            const updatedUser = await updateUser(user.id,{
                name,email
            })

            if(onUpdate){
                onUpdate(updatedUser)
            }
        }
        catch(error){
            console.log("oops!!");
            
        }
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button type='submit'>Update user</button>
            </form>
        </>
    )
}

export default EditFormdata
