import React, { useReducer } from 'react'
import CounterReducer, { initialState } from './CounterReducer'

function CounterAppusingReducer() {
    const [state, dispatch] = useReducer(CounterReducer, initialState)

    return (
        <>
            <h1>counter using Reducer</h1>
            <br /><br />
            <h2>counter: {state.count} </h2>
            <br /><br />
            <h3>{state.label}</h3>
            <br /><br />
            <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
            <br /><br />
            <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
            <br /><br />
            <button onClick={() => dispatch({ type: "INC_BY_TEN" })}>Increment by 10</button>
            <br /><br />
            <button onClick={() => dispatch({ type: "INC_BY_FIVE", payload: 5 })}>Increment by 5</button>
            <br /><br />
            {/* <button onClick={() => dispatch({
                type: "INC_BY_FIVE", payload: {

                    count: 5,
                    label: "addedsomething"
                }
                })
            }
            >
                Increment by 5</button> */}
            <br /><br />
            <button onClick={() => dispatch({ type: "RESET" })}> Reset</button>
        </>
    )
}

export default CounterAppusingReducer
