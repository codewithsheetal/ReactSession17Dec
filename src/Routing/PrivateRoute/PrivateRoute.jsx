import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({children}) {
    const isAuthenticate=false;
    return (
        <>
        {isAuthenticate ? children : <Navigate to="/login"/>}
        {/* {isAuthenticate ? <Outlet/> : <Navigate to="/login"/>} */}
        </>
    )
}

export default PrivateRoute
