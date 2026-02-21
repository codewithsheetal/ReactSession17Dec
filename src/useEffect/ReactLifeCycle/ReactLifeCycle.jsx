import React, { useEffect } from 'react'

function ReactLifeCycle() {

    // Mounting :- comp is created and insert to DOM (first time render )
    //Updating :- Comp re-render (state)
    //Unmounting:- Comp removed from DOM (comp expired)

    useEffect(()=>{
        //write code which you want to run when comp mount
        console.log("child mount");
        const timer =setInterval(()=>{
            console.log("running....");
            
        },1000);
        

        return ()=>{
            // write code which you want  to display when comp unmount
            console.log("child unmounted");
            clearInterval(timer);
           
        }
        
    },[])

    return (
        <>
        <h1>react life cycle</h1>
        </>
    )
}

export default ReactLifeCycle


