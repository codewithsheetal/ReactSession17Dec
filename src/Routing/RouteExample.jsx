import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About,'
// import Contact from './Contact'
import Home from './Home'
import Layout from './NestedRouting/Layout'
import Profile from './NestedRouting/Profile'
import Settings from './NestedRouting/Settings'
import Login from './PrivateRoute/Login'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Dashboard from './PrivateRoute/Dashboard'
import AccessDynamicRouting from './DynamicRoutingLink/AccessDynamicRouting'

// lazy loading 
const Contact =lazy(()=>import("../Routing/Contact"));

function RouteExample() {
    return (
        <>
        <Suspense fallback ={<h1> Loading pages</h1>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hello" element={<h1>hello this is hello route</h1>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>Page not found</h1>}/>

                {/* nested route  */}
                <Route path="/layout" element={<Layout />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="multi" element={
                        <>
                            <About />
                            <Contact />

                        </>
                    } />
                </Route>

                {/* private  */}

                <Route path="/login" element={<Login />} />

                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
                />

                {/* private Routes group */}
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                {/* dynamic routing  */}
                <Route path="/dynamic/:id" element={<AccessDynamicRouting/>}/>
            </Routes>
            </Suspense>
        </>
    )
}

export default RouteExample
