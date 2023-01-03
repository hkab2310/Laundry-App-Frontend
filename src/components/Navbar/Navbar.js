import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
    <div className='header'>
            <label className='title__header'>LAUNDRY</label>
            <nav className='Navbar'>
               <div className='list__item'>
                    Home
                </div>
                <div className='list__item'>
                    Pricing
                </div>
                <div className='list__item'>
                    Career
                </div>
                <div className="list__item " >
                  Sign In
                </div>
               
                
            </nav>
      </div>
    </div>
  )
}

export default Navbar


