import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Applications from '../pages/Applications'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Projects from '../pages/Projects'
import Logins from '../pages/Logins'

function Routess() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}> </Route>
                    <Route path="Applications" element={<Applications></Applications>}></Route>
                    <Route path="Projects" element={<Projects></Projects>}></Route>
                    <Route path="About" element={<About></About>}></Route>
                    <Route path="Contact" element={<Contact></Contact>}></Route>
                    <Route path="Login" element={<Logins></Logins>}></Route>
                    
                    <Route path="*" element={<Error></Error>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default  React.memo(Routess)
