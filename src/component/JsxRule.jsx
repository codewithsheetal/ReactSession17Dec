import React from 'react'

function JsxRule() {
    let imgUrl = "temp.jpeg"
    let name = "sheetal"


    // greet function call in jsx
    // function greet(){
    //   return <h1>hello</h1>  // return jsx
    //   // return "hello"
    // }


    // function with condition 
    // function display(){  // no parameter
    // function display(name){ 
    //   if(flag){
    //     return <h1>hello {name}</h1>
    //   }
    //   else{
    //     return <h1>bye</h1>
    //   }
    // }
    return (
        <>
            {/* display name  */}
            {/* <h1>hello {name}</h1> */}

            {/* {10+20} */}

            {/* 10+20 */}

            {/* inline css  */}
            {/* <h1 style={{ backgroundColor: "red", color: "white" }}>inline css apply</h1> */}

            {/* always close tags */}

            {/* attribute */}
            {/* <img src="temp.png" alt="" /> */}

            {/* dynamic attribute */}
            {/* <img src={imgUrl} alt="" /> */}

            {/* use ClassName instead of Class  */}
            {/* <h1 className="demo">This is my first react program </h1> */}

            {/* condition based classname  */}
            {/* <div className={active?"active":"inactive"}>hwllnd</div> */}

            {/* camelCase for events */}
            {/* <button onClick={}>submit</button> */}


            {/* Function call  */}
            {/* <h1>{greet()}</h1> */}

            {/* without argument  */}
            {/* <h1>{display()}</h1> */}


            {/* with argument */}
            {/* <h1>{display("sheetal")}</h1> */}


        </>
    )
}

export default JsxRule
