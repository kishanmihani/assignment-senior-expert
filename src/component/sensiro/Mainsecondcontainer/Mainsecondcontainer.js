import React, { useState } from 'react'
import './Mainsecondcontainer.css'
import Listli from '../liListRender/Listli'
import { InputSwitch } from 'primereact/inputswitch'
import { FaUser } from "react-icons/fa6";
import { RiSearchFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa"
import { GiConcentrationOrb } from "react-icons/gi";
import { MdOutlineMaximize } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
export default function Mainsecondcontainer() {
        const [Radio,setRadio]=useState(false)
  function radiochange(){
        setRadio(!Radio)
      }
  return (
    <div className='card fontPopins rounded-0 border-0'>
       <div className='card-body p-5 w-100'>
        <div  className='d-flex justify-content-around p-3 text-start'>
          <div>
          <p className='text-uppercase  fw-normal headingtext me-2'>For seniors <InputSwitch checked={Radio}  className="secondswitch" onChange={radiochange} /> For Smes</p>
          <p className=' fs-2 fonstweight text-primary  headingtext  me-2'>How It Works?</p>
          </div>
          <div>
            <p className='fw-normal headingtext me-2'>Embark on a fulfilling journey, leveraging<br ></br>your expertise to make a lasting impact.</p>
             <button className='text-white Getbutton border-0 rounded-3 fs-6 p-2'><small>Get Started</small></button>
          </div>
       </div>

       <div  className='d-flex w-75 p-1  m-auto mb-5 text-start mainsecondgrid rounded-4'>
          <div className='d-flex text-start'>
          {mainsecondgrid.map((data)=>{
                return ( <div className='w-auto p-2 m-2' key={data.id}>
                <div className='d-flex  align-items-center mt-1 mb-3'>
                    <div className='mainsecondicon rounded-circle text-white bg-primary  text-center'>{data.id}</div>
                    <MdOutlineMaximize className='middleline text-secondary ' /> 
                   <div className='profilemainsecond rounded-circle  bg-white text-center'>{data.icon}</div>
                </div>
                <p className='fonstweight mb-1'>{data.profilehead}</p>
                <p ><small>{data.profilesummary}</small></p>
              </div>
               )
                })}
              
          </div>
       </div>
       <div  className='d-flex w-75 p-1 m-auto mt-3 text-start border-top'>
         {footerstatus.map((data)=>{
            return (
                    <div className='w-auto d-flex m-3 mt-4 mb-0' key={data.id}>
                        <div className='shieldicon ms-1 me-1'>
                         <IoShieldCheckmarkSharp className='text-primary' />
                        </div>
                       <p className='text-secondary'><small><span className='fonstweight'>{data.footerhead} :</span><span className='fw-light'>{data.footersummary}</span></small></p> 
                    </div>
                   )
                })}
        </div>
       </div>
    </div>
  )
}

const mainsecondgrid=[
                      {
                        id:1,
                        icon:<FaUser />,
                        profilehead:'Create Your Profile',
                        profilesummary:'Hightlight your skill, experience and areas of experties to attract potential clients'
                      },
                      {
                        id:2,
                        icon:<RiSearchFill />,
                        profilehead:'Create Your Profile',
                        profilesummary:'Hightlight your skill, experience and areas of experties to attract potential clients'
                      },
                      {
                        id:3,
                        icon:<GiConcentrationOrb  />,
                        profilehead:'Create Your Profile',
                        profilesummary:'Hightlight your skill, experience and areas of experties to attract potential clients'
                      },
                      {
                        id:4,
                        icon:<FaCheckCircle />,
                        profilehead:'Create Your Profile',
                        profilesummary:'Hightlight your skill, experience and areas of experties to attract potential clients'
                      }
                    
                    ]
 const footerstatus=[
                     {
                       id:1,
                       footerhead:'Efficient Management',
                       footersummary:'Tools that steamline project communication and collaboration.'
                     },
                     {
                        id:2,
                        footerhead:'Secure & Trusted',
                        footersummary:'Tools that steamline project communication and collaboration.'
                    },
                    {
                        id:1,
                        footerhead:'Dedicated Support',
                        footersummary:'Tools that steamline project communication and collaboration.'
                    }
                    ]