import PropTypes from 'prop-types'
import React, { Component, PureComponent } from 'react'
// import logoweb from '../../../Asset/images/logo.png'
import  './Header.css'
import Listli from '../liListRender/Listli'
const heading=['About Us','Resource','Contact','Explor Project']

class Header extends PureComponent {
    constructor(){
        super();
        this.state={
            heading:['About Us','Resource','Contact']
        }
      }

  render() {
    return (
      <div className={`d-flex p-5 pt-3 pb-2 background position-fixed w-100 top-0 z-3 justify-content-between card-header border-0 bg-transparent`}>
        <ul className='d-flex'>
         <li className='headingtext'><img src='./logo.png' alt='logoweb' className='logoweb'/></li>
         {this.state.heading.map((car) => <Listli brand={car} className='headingtext fw-normal text-white p-2 ps-5 pe-5 ' />)}
        </ul>
        <div>
            <button className="btn headingtext text-white fw-normal">Sign in</button>
            <button className='btn btn-primary pt-1 pb-1 ps-2 pe-2 headingtext text-white fw-normal' id='buttonbackgroundcolor'>Register</button>
        </div>
      </div>
    )
  }
}

export default React.memo(Header)