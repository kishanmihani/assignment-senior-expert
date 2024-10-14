import React, { PureComponent } from 'react'
import Listli from '../liListRender/Listli'
import './Mainonecontainer.css'
import { HiLightBulb } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { IoMdTrendingUp } from "react-icons/io";
// import { grid } from './MainOnedata';
class Mainonecontainer extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            gridinfor:grid
        }
    }
  render() {
    return (
      <div className='Mainonecontainer-bg card border-0 rounded-0 pt-3 pb-3'>
        <div className='card-body p-5'>
        <h2 className=' headingtext mt-2 mb-4  Mainonecontainer fw-bolder'>Empower Your Next Chapter: Discover the Benefits<br></br>of Joining Our Senior Expert Community</h2>
         <div className='w-75 d-flex text-start justify-content-center m-auto'>
          {this.state.gridinfor.map((gridinfo)=>{
           return (
          
           <div key={gridinfo.id} className='p-4'>
            <div className='gridicon text-white fs-5 mb-2 '>{gridinfo.icon}</div>
            <div><p className='headingtext fw-bolder  mb-1'>{gridinfo.gridheading}</p></div>
            <div><p className='headingtext'>{gridinfo.gridsummary}</p></div>
           </div>)
           })}
         </div> 
        </div>
      </div>
    )
  }
}
export default React.memo(Mainonecontainer)

const grid=[
  {
      id:1,
      icon:<HiLightBulb/>,
      gridheading:'Share Your Experties',
      gridsummary:'Continue making a meaningful impact by shareing Your knowledge and experience with businesses seeking your guidance.'
  },
  {
      id:2,
      icon:<CiCalendar/>,
      gridheading:'Share Your Experties',
      gridsummary:'Continue making a meaningful impact by shareing Your knowledge and experience with businesses seeking your guidance.'
  },
  {
      id:2,
      icon:<IoMdTrendingUp />,
      gridheading:'Share Your Experties',
      gridsummary:'Continue making a meaningful impact by shareing Your knowledge and experience with businesses seeking your guidance.'
  }
]