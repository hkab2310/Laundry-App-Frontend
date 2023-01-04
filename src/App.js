import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateOrder from './components/CreateOrder/CreateOrder'
import PastOrders from './components/PastOrders/PastOrders'
// import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import Sign_in from './components/signin/Sign_in'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign_in />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/create" element={<CreateOrder />}></Route>
        <Route path="/orders" element={<PastOrders />}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
