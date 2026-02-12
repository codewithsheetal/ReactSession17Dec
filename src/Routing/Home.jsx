import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <h1>home comp</h1>
        <Link to="/">Home</Link>  | 
        <Link to="/about">about </Link> |
        <Link to ="/contact">contact</Link> |
        
        </>
    )
}

export default Home
