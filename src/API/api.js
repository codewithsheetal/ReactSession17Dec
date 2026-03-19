import axios  from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/",
    timeout: 5000,
    headers:{
        "Content-Type":"application/json"
    }

})

//GET Request
// comp : <GetAPIdata/>
export const fetchUsers = async()=>{

    try {
        const response = await api.get("/users")
        return response.data;
    }
    catch(error){
        console.error("oops something is wrong", error)
    }
}

//POST request

export const createUser = async(user)=>{
    try{
        const response = await api.post("/users",user);
        return response.data;
    }
    catch(error){
        console.error("oops something is wrong", error)
    }
}


//Edit / Update Request

export const updateUser= async(id,updateddata)=>{
    try{
        const response= await api.put(`/users/${id}`,updateddata);
        return response.data;
    }
    catch(error){
        console.error("oops something is wrong", error)
    }

}


//delete request 

export const deleteUser = async (id) =>{
    try{
        const response = await api.delete(`/users/${id}`);
        return response.data;
    }
    catch(error){
        console.error("oops something is wrong", error)
    }

}

// fetch single user by ID
export const fetchUserByID = async (id) =>{
    try{
        const response = await api.get(`/users/${id}`);
        return response.data;
    }
    catch(error){
        console.error("oops something is wrong", error)
    }

}