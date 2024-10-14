import React, { Component } from 'react'
import image1 from '../../../Asset/images/ij-1.png'
import image2 from '../../../Asset/images/ij-2.png'
import image3 from '../../../Asset/images/ij-3.png'
import './Discoverm.css'
export default class Discoverm extends Component {
    constructor(){
        super();
        this.state={
            Discoverms:Discovermnew
        }
    }
  render() {
    return (
      <React.Fragment>
        <div className='card-body Mainonecontainer-bg p-5 fontPopins text-start'>
        <div className='w-75 m-auto'>
        <div className='col-sm-12 d-flex align-items-center justify-content-center'>
            {this.state.Discoverms.map((data)=>{
                return (
                    <div className='card text-start col-md-3 m-3 rounded-5' key={data.id}>
                    <div className='card-body'>
                      <div className='border w-100 rounded-2 '> 
                        <img src={data.images} alt='image1' className='h-100 w-100'></img>
                      </div>
                      <div>
                        <p className='fs6 mt-3 mb-0 fw-bolder'>{data.head}</p>
                        <p className='text-secondary'><small>{data.profile}</small></p>
                      </div>
                    </div>
                    </div>            
                )

            })}
            
        </div>
        <div className='w-75 m-auto mt-5'>
        <div className='col-sm-12 d-flex  justify-content-around'>
           <h3 className='text-primary m-2 fw-bolder col-md-6 ms-0'>Benifit of Joining Our Senior Expert Community</h3>
           <div className='col-md-6 m-2 '>
            <p className='fw-bolder mb-0'><small>choose project that align with your interest and availablity, enjoy the freedom and Fliexable of independent work.  </small></p>
            <button class="text-white mt-4 mb-2 Getbutton border-0 rounded-3 fs-6 p-2"><small>Explore Opportunities</small></button>
           </div>
            </div></div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

const Discovermnew=[
    {
        id:1,
        images:image1,
        head:'Fliexable Engament',
        profile:'choose project that align with your interest and availablity, enjoy the freedom and Fliexable of independent work.'
    },
    {
        id:2,
        images:image2,
        head:'Meaningful Impact',
        profile:'choose project that align with your interest and availablity, enjoy the freedom and Fliexable of independent work.'
    },
    {
        id:3,
        images:image3,
        head:'Continous Growth',
        profile:'choose project that align with your interest and availablity, enjoy the freedom and Fliexable of independent work.'
    },
]