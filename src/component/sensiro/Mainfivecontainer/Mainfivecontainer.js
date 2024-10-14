import React, { Component } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import './Mainfivecontainer.css'
class Mainfivecontainer extends Component {
  render() {
    return (
      <div className='card background border-0 rounded-0 text-white text-start fontPopins'>
        <div className='card-body p-5 w-75 m-auto' >
            <div className='col-md-12 d-flex justify-content-center align-items-center'>
        <div className='col-md-7 text-start  pe-5  '>
            <h2 className='fonstweight mb-3'>Why SMEs should Choose Our Platform?</h2>
            <button className='list-inline-item d-flex justify-content-between btn btn-light headingtext mt-2 whitebutton w-100 pt-1 pb-1 fw-bolder'><small>Access a Vast Network of Experties</small> <IoIosArrowForward className='text-white  Getbutton border- fw-bolder rounded fs-4' /></button>
            <div className='m-3'>
                Tap into a diverse pool of seasoned professionals with specialized skill and experience across various industries.
            </div>
            <button className='list-inline-item d-flex justify-content-between btn btn-light headingtext mt-2 mb-4 whitebutton pt-1 pb-1 w-100 fw-bolder'><small>steamlined collaboration</small> <IoIosArrowForward className='text-white  Getbutton border- fw-bolder rounded fs-4' /></button>
            <button className='list-inline-item d-flex justify-content-between btn btn-light headingtext mt-2 whitebutton w-100 fw-bolder pt-1 pb-1'><small>Power Result</small><IoIosArrowForward className='text-white  Getbutton border- fw-bolder rounded fs-4' /></button>
            {/* <p><small>Connect with expirenced talent to fuel your growth, innovation, and success.</small></p>
            <button className='text-white mt-2 mb-2 Getbutton border-0 rounded-3 fs-6 p-2'><small>Post a Project</small></button> */}
        </div>
            <div className='col-md-5 '>
              <img src='./images/poster2.jpg'  className='w-100 h-100 rounded-4 mainfiveimg p-1'alt='poster'/>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
export default React.memo(Mainfivecontainer)