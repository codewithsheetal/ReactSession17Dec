import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About,'
import Contact from './Contact'
import Home from './Home'
import Layout from './NestedRouting/Layout'
import Profile from './NestedRouting/Profile'
import Settings from './NestedRouting/Settings'

function RouteExample() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hello" element={<h1>hello this is hello route</h1>  }/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            
            {/* nested route  */}
            <Route path="/layout" element={<Layout/>}>
                <Route path="profile" element={<Profile/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="multi" element={
                    <>
                    <About/>
                    <Contact/>
                    
                    </>
                }/>
            </Route>
        </Routes>
        </>
    )
}

export default RouteExample
