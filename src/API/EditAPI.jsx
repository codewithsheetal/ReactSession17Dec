import React, { useEffect, useState } from 'react'
import { deleteUser, fetchUsers, updateUser } from './api';
import EditFormdata from './EditFormdata';

function EditAPI() {
    const [user, setUser] = useState([])
    const [error, setError] = useState("");
    const [selectedUser, setSelectedUser] = useState();
    const [msg, setMsg] = useState("")

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
        // if match -> replace with updated user
        //else-> keep original user
        setUser((prev) =>
            prev.map((u) =>
                u.id === updatedUser.id ? updatedUser : u
            ))
        setMsg("data updated")
        setSelectedUser(null)
    }

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            //user ui 
            setUser((prev) => prev.filter((u) => u.id !== id));
            setMsg("data deleted")

        }
        catch (error) {
            console.log("oops");

        }
    }
    return (
        <>
            <ul>
                {user.map((u) => (
                    <li key={u.id}
                        onClick={() => setSelectedUser(u)}
                    >{u.name}- {u.email}
                        <button onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(u.id);
                        }}>delete</button>
                    </li>
                ))}
            </ul>

            {selectedUser &&
                <EditFormdata user={selectedUser} onUpdate={handleUpdate} />
            }
            {msg && <p>{msg}</p>}
        </>
    )
}

export default EditAPI
