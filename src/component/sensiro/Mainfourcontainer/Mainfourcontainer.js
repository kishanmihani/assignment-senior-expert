import React, { Component } from 'react'

class Mainfourcontainer extends Component {
  render() {
    return (
      <div className='card background border-0 rounded-0 text-white text-start fontPopins'>
        <div className='card-body p-5 w-75 m-auto' >
            <div className='col-md-12 d-flex justify-content-center align-items-center'>
        <div className='col-md-7 text-start  pe-5  '>
            <h2 className='fonstweight'>Empowering SMEs to achive their full potential</h2>
            <p><small>Connect with expirenced talent to fuel your growth, innovation, and success.</small></p>
            <button className='text-white mt-2 mb-2 Getbutton border-0 rounded-3 fs-6 p-2'><small>Post a Project</small></button>
        </div>
            <div className='col-md-5'>
              <img src='./images/poster.jpg'  className='w-100 rounded-4'alt='poster'/>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
export default React.memo(Mainfourcontainer)