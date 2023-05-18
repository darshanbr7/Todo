import React from 'react'
import{BrowserRouter,Routes,Route } from "react-router-dom"
 import Navbarpage from './Navbar/Navbar'
 import Login from './Login/Login'
 import Signup from './Signup/Signup'
 import Home from './Home/Home'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbarpage />
    <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App