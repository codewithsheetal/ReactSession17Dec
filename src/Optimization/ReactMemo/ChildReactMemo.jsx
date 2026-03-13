import React from 'react'

// function ChildReactMemo() {
//     console.log("child render");
    
//     return (
        
//         <>
//         <h2>child react memo</h2>
//         </>
//     )
// }

const ChildReactMemo = React.memo(
function ChildReactMemo() {
    console.log("child render");
    
    return (
        
        <>
        <h2>child react memo</h2>
        </>
    )
}
)
export default ChildReactMemo
