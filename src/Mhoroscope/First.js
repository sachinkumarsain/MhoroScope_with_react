import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Section1 from "./Section1/Section1"
function First() {
    return (
        <BrowserRouter>
        <Header/>
        <Section1/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default First