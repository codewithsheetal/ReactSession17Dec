import React, { act, useReducer } from 'react'


const studentData={
    name:'',
    password:'',
    email:'',
    city:''

}

const reducer=(data,action)=>{
    // console.log(action);
    return  {...data, [action.type]:action.val}
       
}
function ReducerInput() {

    const [state,dispatch]=useReducer(reducer,studentData);
    console.log(state);
    
    return (
        <>
        <h1>Use Reducer</h1>
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})}placeholder='enter name' />
        <br /><br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder='enter password' />
        <br /><br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder='enter email' />
        <br /><br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'city'})}placeholder='enter city' />
        
        <br />
        <br />
        <button> Add deatails</button>
        
        <h2>name: {state.name}</h2>
        <h2>email: {state.email}</h2>
        <h2>password: {state.password}</h2>
        <h2>city: {state.city}</h2>
        </>
    )
}

export default ReducerInput
