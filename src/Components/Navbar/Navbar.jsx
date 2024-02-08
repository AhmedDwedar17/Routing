import React from 'react'
import  './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg py-4'>
        <div className="container">
            <Link className='navbar-brand text-white' to="">START FRAMEWORK</Link>
            <div className="collapse navbar-collapse">
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link to="about" className='nav-link text-white'>ABOUT</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="portfolio" className='nav-link text-white'>PORTFOLIO</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contact" className='nav-link text-white'>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
