import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Home'
import { Link } from 'react-router-dom'

function Layout() {
    return (
        <>
        <h1>Layout </h1>
        
        <Link to ="profile">Profile</Link> |
        <Link to ="settings">settings</Link> |
        <Outlet/>

        {/* <Home/> */}
        </>
    )
}

export default Layout
