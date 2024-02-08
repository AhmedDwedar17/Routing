import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="title text-center pt-5">
            <h2>CONATCT SECTION</h2>
          </div>
        <div className='form w-50'>
    <div className="mb-5">
    <input type="text" className="form-control" placeholder='userName'/>
    </div>
    <div className="mb-5">
    <input type="text" className="form-control" placeholder='userAge'/>
    </div>
    <div className="mb-5">
    <input type="email" className="form-control" placeholder='userEmail'/>
    </div>
    <div className="mb-5">
    <input type="password" className="form-control" placeholder='userPassword' />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
        </div>
      </div>
    </>
  )
}
