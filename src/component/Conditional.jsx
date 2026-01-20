import React from 'react'
import First from '../First';
import Sec from '../Sec';

function Conditional() {
    const isLogin= false;
    const flag = true;

     // if-else outside jsx 
     //Variable Based Rendering
    let msg;
    if(false){
        msg =<h1> har har mahadev</h1>
    }
    else{
        msg= <h1>please try later</h1>
    }

    let show =true;
    return (
        <>
        {/* ternary operator */}
        {/* {isLogin? <h1>Welcome</h1>:<h1>oops Please Login</h1>} */}

        {/* Logical AND  */}
        {/* {flag && <h1>hello welcome</h1>} */}
          {/* {msg} */}

        {isLogin ? <First/>: <Sec/>}
        

        {show && <h1>hello, hey</h1>}
      
        </>
    )
}

export default Conditional
