import React, { act } from 'react'


export const initialState = {
    count: 0,
    label: "Start Count"
}
function CounterReducer(state, action) {
    
    
    switch (action.type) {
        case "INC":
            return {
                count: state.count + 1,
                label : "Incremented!"
            };
        case "DEC":
            return {
                count: state.count - 1 ,
                label : "Decremented!"
            };
        case "INC_BY_TEN":
            return{
                count : state.count + 10,
                label:"Incremented by 10"
            }
        case "INC_BY_FIVE":
            return{
                count : state.count + action.payload,
                label:"Incremented by 5"
            }
        case "RESET":
            return{
                count : 0 ,
                label: "Reset"
            }
        default:
            return state;
    }


}

export default CounterReducer
