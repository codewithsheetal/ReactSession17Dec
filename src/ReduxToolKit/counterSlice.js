import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    value:0
}
const initialState1 =[]
const initialState2 =[
    {id:1, name:'xyz'},
    {id:2, name:'xyz'}
]

const counterSlice = createSlice({
    name:"counter", // slice name
    initialState, 
    reducers:{
        inc:(state)=>{
            state.value +=1;
            // state.push(action.payload)
        },
        dec:(state)=>{
            state.value -=1;
        },
        clearall:(state)=>{
            state.value =0;
            // return [];
        },
        
        incbyfive:(state,action)=>{
            state.value +=action.payload
            // state.push(action.payload)
        },

    }
})

export const {inc,dec,clearall,incbyfive} = counterSlice.actions;

export default counterSlice.reducer