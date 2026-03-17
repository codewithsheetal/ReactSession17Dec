import React, { useState } from 'react'
import { createUser } from './api';

function PostAPI() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg,setMsg] = useState("");

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const newUser = await createUser({name,email});
            setMsg("user added!!")
            setName("");
            setEmail("");
        }
        catch(error){
            setMsg("Failed to add")
            console.log("oops something is wrong",error);
            
        }
    }
    return (
        <>
            <h1>Add user </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder='enter your name' onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input type="email" value={email} placeholder='enter your name' onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <button type='submit'>Add user</button>
            </form>
            
            {msg && <p>{msg}</p>}
        </>
    )
}

export default PostAPI
