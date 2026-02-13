import React, { Suspense } from 'react'
// import About from '../../Routing/About,'

const Event = React.lazy(()=>import("../Event"));
const List = React.lazy(()=>import("../List/List"));
const Extra = React.lazy(()=>import("./Extra"))

function LazyLoading() {
    return (
        <>
        
        <Suspense fallback={<h2>loading</h2>}>
            <Event/>
        </Suspense>
        <Suspense fallback={<h2>loading list</h2>}>
            <List/>
        </Suspense>
        <Suspense fallback={<h2>Extra list</h2>}>
            <Extra/>
        </Suspense>
        
        </>
    )
}

export default LazyLoading
