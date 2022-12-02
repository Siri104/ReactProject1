import React from 'react'
import Signup from './sirisha.js/Signup'
import { BrowserRouter } from "react-router-dom"
import {Route, Routes} from "react-router-dom" 
import Navbar from './Navbar'
import Home from './sirisha.js/Home'
import Contact from './sirisha.js/Contact'


const App = () => {
  return (
    <div>
  
      <div>
        <center>
          <BrowserRouter>
    
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Signup" element={<Signup/>}/>
          </Routes>
          </BrowserRouter>
          
        </center>
      </div>
    </div>
  )
}

export default App