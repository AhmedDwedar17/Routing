import React from 'react'
import  './Footer.css'

export default function Footer() {
  return (
    <>
      <div className="footer text-white ">
        <div className="container">
        <div className="row">
        <div className="col-md-4 text-center">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4 text-center">
            <h3>AROUND THE WEB</h3>
            <div className="icons ">
            <i class="fa-brands fa-facebook border border-1 rounded-circle p-1 mx-1"></i>
            <i class="fa-brands fa-twitter border border-1 rounded-circle p-1 mx-1"></i>
            <i class="fa-brands fa-linkedin border border-1 rounded-circle p-1 mx-1"></i>
            <i class="fa-solid fa-globe border border-1 rounded-circle p-1 mx-1"></i>
            </div>
        </div>
        <div className="col-md-4 text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </div>
        </div>
    </div>
    <div className='footer-p'>
        <p className='text-center'>Copyright © Your Website 2021</p>
        </div>
    </>
  )
}
