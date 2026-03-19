import React, { useEffect, useState } from 'react'
import { deleteUser, fetchUsers } from './api';
import EditFormdata from './EditFormdata';

function EditAPI() {
    const [user, setUser] = useState([])
    const [error, setError] = useState("");
    const [selectedUser, setSelecteduser] = useState("");
    const [msg,setMsg]=useState("")


    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUsers();
                // console.log(data);
                setUser(data);

            }
            catch (error) {
                setError("oops");
            }
        }
        getUser();
    }, [])

    const handleUpdate = (updatedUser) => {
        setUser((prev) =>
            prev.map((u) => u.id === updatedUser.id ? updatedUser : u)
        )
        setSelecteduser("")
        setMsg("data Updated Successfully!!")

        setTimeout(()=>{
            setMsg("")
        },3000)
    }

    const handleDelete =async(id)=>{
        // console.log(id);
        try{
            await deleteUser(id)
            setUser((prev)=>prev.filter((u)=>u.id !==id))
            setMsg("user Deleted !!")

            setTimeout(()=>{
            setMsg("")
        },3000)
        }
        catch(error){
            console.log("oops something");
            
        }
        
    }
    return (
        <>
            <h1>user list</h1>
            <ul>
                {user.map((u) => (
                    <li key={u.id} onClick={() => setSelecteduser(u)}
                        style={{ cursor: "pointer" }}
                    >{u.name}- {u.email}
                    <button onClick={(e)=>{
                        e.stopPropagation();
                        handleDelete(u.id)}}>delete</button>
                    </li>
                ))}
            </ul>

            {selectedUser && <EditFormdata user={selectedUser} onUpdate={handleUpdate} />}
            
            {msg && <p>{msg}</p>}
        </>
    )
}

export default EditAPI
