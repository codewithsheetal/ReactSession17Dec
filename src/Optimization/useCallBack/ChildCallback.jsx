import React from 'react'

const ChildCallback = React.memo(
    ({ onClick }) => {
        console.log("child");

        return (
            <>
                <h2>this is child callback</h2>
                {/* <button onClick={onClick}>clickme</button> */}
            </>
        )
    }
)

export default ChildCallback
