import React, { Component, PureComponent } from 'react'
import { BsFillCircleFill } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";
import  './WebFooter.css'
import Listli from '../liListRender/Listli'
 class WebFooter extends PureComponent {
  constructor(){
    super();
    this.state={
      productFooter:['Product','Explore Projects','Sign In', 'Register'],
      companyFooter:['Company','About us','Blogs','News','Faq\'s'],
      contactFooter:['Contact','Contact Us','Get Demo'],
      LegalFooter:['Terms & Contdition','Privacy Police','Payments & Refunds','Disclaimers']
    }
  }
  render() {
    return (
      <div className='webfooter card border-0 rounded-0'>
        <div className='card-body p-5'>
          <div className='d-flex text-start justify-content-center'>
            <ul className='text-start d-flex flex-column'>
               
               <li className='list-inline-item'><img src='./logo.png' alt='logoweb' className='logoweb'></img></li>
               <li className='list-inline-item'><button className='list-inline-item btn btn-light headingtext mt-2 whitebutton'> <BsFillCircleFill className='  circlesuccess m-1' /><small>All System Operations</small></button></li>
               <Listli brand='X Facebook Instragram Linkedin' className='list-inline-item headingtext mt-2 mb-2  text-white'></Listli>
               <li className='list-inline-item headingtext   text-white'>
              <small>Made In hosted In India<br></br>
               Senior Expert <MdOutlineCopyright/>2024
               </small>
               </li>
               </ul>


               <ul className='footerfirstli'>
               {this.state.productFooter.map((car) => <Listli brand={car} className='headingtext fw-normal text-white p-1 ps-5 pe-5 ' />)}
               </ul>

               <ul className='footerfirstli'>
               {this.state.companyFooter.map((car) => <Listli brand={car} className='headingtext fw-normal text-white p-1 ps-5 pe-5 ' />)}
               </ul>

               <ul className='footerfirstli'>
               {this.state.contactFooter.map((car) => <Listli brand={car} className='headingtext fw-normal text-white p-1 ps-5 pe-5 ' />)}
               </ul>

               <ul  className='footerfirstli'>
               {this.state.LegalFooter.map((car) => <Listli brand={car} className='headingtext fw-normal text-white p-1 ps-5 pe-5 ' />)}
               </ul>
                </div>
        </div>
      </div>
    )
  }
}

export default React.memo(WebFooter)
