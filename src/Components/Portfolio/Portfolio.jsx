import React from 'react'
import "./Portfolio.css"
import img1 from "../../Images/poert1.png"
import img2 from "../../Images/port2.png"
import img3 from "../../Images/port3.png"

export default function Portfolio() {
  return (
    <>
            <div className="portfolio">
        <div className="container">
          <div className="row text-center">
          <h2>Portfolio Component</h2>
            <div className="col-md-4 p-3">
              <img className='w-100' src={img1} alt="" />
            </div>
            <div className="col-md-4 p-3">
            <img className='w-100' src={img2} alt="" />
            </div>
            <div className="col-md-4 p-3">
            <img className='w-100' src={img3} alt="" />
            </div>
            <div className="col-md-4 p-3">
              <img className='w-100' src={img1} alt="" />
            </div>
            <div className="col-md-4 p-3">
            <img className='w-100' src={img2} alt="" />
            </div>
            <div className="col-md-4 p-3">
            <img className='w-100' src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
