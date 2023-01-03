import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

 
import Register from './components/Register/Register'
import Signin from './components/signin/Sign_in'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}/>
        <Route path="/register" element={<Register />}/>
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
