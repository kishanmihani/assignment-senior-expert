import React, {  PureComponent } from 'react'
import Listli from '../liListRender/Listli'
import photo5 from '../../../Asset/images/phote5.jpg'
import './NewBlogs.css'
class NewBlogs extends PureComponent {
    constructor(){
        super();
        this.state={
            blogs:grid
        }
    }
  render() {
    return (
      <div className='card border-0 p-5'>
        <div className='card-body'>
           <div className=''>
            <ul className='d-flex flex-column '>
              <p className=' text-primary fs-1 headingtext list-inline-item fw-bolder m-auto'>New and Blogs</p>

              <Listli brand='Explore a variety of topics and grain knowledge from exprienced professionals acrossdifferent industries' className='fs-5 headingtext text-dark fw-normal list-inline-item w-50 m-auto'></Listli>
            </ul>
           
         <div className='d-flex p-5 col-12 flex-wrap justify-content-center '>
         {this.state.blogs.map((data)=>{
           return (<div key={data.id} className='card col-lg-5 m-3 blogcard-bg border-0 text-start fontPopins'>
            <div className='card-body'>
            <p className='text-danger btn btn-light fs-6 pt-1 pb-1 rounded-5 '><small><strong>{data.buttontext}</strong></small></p>
             <div className='d-flex'>
             
                <img src={data.icon} alt='k' className='Blogsiconp rounded-circle'></img>
             
             <ul className='d-flex flex-column m-auto ms-0 ps-1 p-0'>
                <Listli brand={data.name} className='list-inline-item fw-bolder fs-6  '></Listli>
                <Listli brand={data.joindata} className='list-inline-item fs-6 '></Listli>
             </ul>
             
            </div>
            <ul className='d-flex flex-column ps-0 pt-2'>
            <Listli brand={data.gridheading} className='list-inline-item fs-5 fw-bolder '></Listli>
            <Listli brand={data.gridsummary} className='list-inline-item fs-6'></Listli>
            </ul>
           </div>
        </div>
           )
        })}
        </div>
        </div>
      </div>
      </div>
    )
  }
}

export default  React.memo(NewBlogs)

const grid=[
    {
        id:1,
        buttontext:'Marketing',
        joindata:'Sap 04,2024',
        name:'rajesh sharma',
        // joindata:'Sap 04,2024',
        icon:photo5,
        gridheading:'Share Your Experties',
        gridsummary:'Continue making a meaningful impact by shareing Your knowledge and experience with businesses seeking your guidance.'
    },
    {
        id:2,
        buttontext:'Marketing',
        joindata:'Sap 04,2024',
        name:'rajesh sharma',
        icon:photo5,
        gridheading:'Share Your Experties',
        gridsummary:'Continue making a meaningful impact by shareing Your knowledge and experience with businesses seeking your guidance.'
    },
    {
        id:3,
        buttontext:'Marketing',
        joindata:'Sap 04,2024',
        name:'rajesh sharma',
        icon:photo5,
        gridheading:'Share Your Experties',
        gridsummary:'Continue making a meaningful impact by shareing Your knowledge and experience with businesses seeking your guidance.'
    },
    {
        id:4,
        buttontext:'Marketing',
        joindata:'Sap 04,2024',
        name:'rajesh sharma',
        icon:photo5,
        gridheading:'Share Your Experties',
        gridsummary:'Continue making a meaningful impact by shareing Your knowledge and experience with businesses seeking your guidance.'
    }
  ]