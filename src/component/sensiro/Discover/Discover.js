import React, { Component } from 'react'
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { PiWindowsLogoBold } from "react-icons/pi";
import './Discover.css'
import { Rating } from "primereact/rating";
import phote5 from '../../../Asset/images/phote5.jpg'
import { InputSwitch } from 'primereact/inputswitch';
import Discoverm from '../Discoverm2/Discoverm';
export default class Discover extends Component {
    constructor(props){
        super();
        this.state={
            Discovers:Discoverobj,
            radio_button:false,
            valuerating:4,
            buttons:['Business Strategy','Marketing & Sales','Finance & Accounting','Technology & IT','Oerations & Management','Human Resources','Legal & Compliance','HealthCare', 'Eduations']
        }
        this.radiochange=this.radiochange.bind(this);
    }
    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
    radiochange(){
      let radiobuttonval=this.state.radio_button
      this.setState({
        radio_button: !radiobuttonval
      })
    }
  render() {
    return (
      <div className='card fontPopins border-0 rounded-0'>
        <div className='card-body p-5'>
          <div className=' fw-bolder text-center text-primary'>
            <h2 className='fontPopins fw-bolder '>Discover a World of Opportunities Tailored to Your Experties.</h2>
          </div>
          <div className=''>
            <p className='fw-normal'>Discover a advice range of project tailored to your skill and experience. Browser through current<br></br> openings and find the Project fit for your expertise.</p>
          </div>
          <div className='w-75 m-auto d-flex flex-wrap mt-5 justify-content-center'>
          {this.state.buttons.map((data)=>{
            return (
                <button className='rounded-2 border-0 d-flex   headingtext m-1 p-2 fonstweight mainsecondgrid'><PiWindowsLogoBold className='m-1' /><small>{data}</small> </button>
                   )
          })} 
            </div>

            <div className='w-100 m-auto  mt-5 '>
              <div className='col-sm-12 d-flex flex-wrap justify-content-center'>
             {this.state.Discovers.map((data)=>{
              return (
                <div className='card blogcard-bg broder-0 col-xl-3 m-2 ' key={data.id}>
                <div className='card-header d-flex justify-content-between tex'>
                  <div className='text-start'> 
                  <p className='fontsweight mb-0'><small>{data.companyname}</small></p>
                  <p className='mb-0 text-secondary'><small>{data.joindate}</small></p>
                  </div>
                  <div className='text-end'>
                    <img src={data.logo} className='Discovergrid'></img>
                  </div>
                </div>
                <div className='card-body text-start'>
                <p className=' fw-bolder mb-0'>{data.work}</p>
                <p className='fontsweight text-secondary mb-0'><small>{data.companyssummary}</small></p>
                <span className='bg-white rounded-2 p-1 headingtext m-1 ms-0 '> <small>Part-time, Remorte</small></span>

                <span className='bg-white rounded-2 p-1 headingtext m-1 ms-0 '><small>startup experince</small></span>                    </div>
                <div className='card-footer d-flex justify-content-between align-items-center'>
                  <button class="btn btn-primary pt-1 pb-1 ps-2 pe-2 headingtext text-white fw-normal" id='buttonbackgroundcolor'>Apply Now</button>
                  <p className={`mb-0 headingtext ms-5 ${data.varified== true ? 'd-block':'d-none' }`}><IoShieldCheckmarkSharp className='text-primary' />Verified</p>
                </div> 
            </div>
              )
             })}
                </div>
            </div>
        

        </div>
        <Discoverm />
        <div className='card-body p-5 m-5 fontPopins text-start'>
         <div className='w-75 m-auto p-5'>
           <div className='col-sm-12 d-flex align-items-center'>
            <div className='col-md-6'>
            <p className='text-uppercase  fw-normal headingtext me-2'>For seniors <InputSwitch checked={this.state.radio_button}  className="secondswitch" onChange={this.radiochange} /> For Smes</p>
            <h2 class="fw-bolder text-primary ">Hear from Our Thriving Community of Senior Experts and SMEs.</h2>

            <p><small>Discover firsthand how our platform is empowering Senior Expert to share their valueable Knowledge and helping SMEs achive their goal.</small></p>
            </div>
            <div className='col-md-6'>
              <div className='card me-5 m-2 blogcard-bg border-0'>
                <div className='card-header d-flex justify-content-between'>
                <button className='rounded-2 border-0 d-flex bg-white   headingtext m-1 p-2 fonstweight'><small>Expert Testimonal</small> </button>
                <Rating value={this.state.valuerating}cancel={false} onChange={(e) => this.handleChange(e)}  />                </div>
                <div className='card-body'>
                <p>Discover firsthand how our platform is empowering Senior Expert to share their valueable Knowledge and helping SMEs achive their goal.</p>
                <button className='d-flex align-items-center btn btn-light bg-white rounded-5 text-start'>
                  
                    <img src={phote5} className='discovericon rounded-circle'></img>
                  
                  <p className='mb-0 ms-1'>
                    <span className='fw-bolder mb-0'><small>Rajesh Sharma</small></span><br />
                    <span className='text-secondary fw-normal mb-0'><small>Margketing Execute</small></span>
                  </p>
                </button>
                </div>
              </div>
              <div className='card ms-5 m-2 blogcard-bg border-0'>
                <div className='card-header d-flex justify-content-between'>
                <button className='rounded-2 border-0 d-flex bg-white   headingtext m-1 p-2 fonstweight'><small>Expert Testimonal</small> </button>
                <Rating value={this.state.valuerating}cancel={false} onChange={(e) => this.handleChange(e)}  />                </div>
                <div className='card-body'>
                <p>Discover firsthand how our platform is empowering Senior Expert to share their valueable Knowledge and helping SMEs achive their goal.</p>
                <button className='d-flex align-items-center btn btn-light bg-white rounded-5 text-start'>
                  
                    <img src={phote5} className='discovericon rounded-circle'></img>
                  
                  <p className='mb-0 ms-1'>
                    <span className='fw-bolder mb-0'><small>Rajesh Sharma</small></span><br />
                    <span className='text-secondary fw-normal mb-0'><small>Margketing Execute</small></span>
                  </p>
                </button>
                </div>
              </div>
            </div>
           </div>
         </div>
        </div>
      </div>
    )
  }
}

const Discoverobj=[
                {
                  id:0,
                  companyname:'Tech Innovation Ltd',
                  joindate:'Banglore',
                  companyssummary:'Provide financial guidance strategic planing to a growing startup.',
                  varified:true,
                  work:'finance',
                  logo:'./logo/logo-1.svg'
                },
                {
                  id:2,
                  companyname:'Tech Innovation Ltd',
                  joindate:'pune',
                  work:'eduation',
                  companyssummary:'Provide financial guidance strategic planing to a growing startup.',
                  varified:true,
                  logo:'./logo/logo2.svg'
                },
                {
                  id:3,
                  companyname:'Tech Innovation Ltd',
                  joindate:'Sap 04 2024',
                  work:'civil',
                  companyssummary:'Provide financial guidance strategic planing to a growing startup.',
                  varified:true,
                  logo:'./logo/logo-3.svg'
                },
                {
                  id:4,
                  companyname:'Tech Innovation Ltd',
                  joindate:'Sap 04 2024',
                  work:'finance',
                  companyssummary:'Provide financial guidance strategic planing to a growing startup.',
                  varified:false,
                  logo:'./logo/logo-4.svg'
                },
                {
                  id:5,
                  companyname:'Tech Innovation Ltd',
                  joindate:'Sap 04 2024',
                  work:'finance',
                  companyssummary:'Provide financial guidance strategic planing to a growing startup.',
                  varified:true,
                  logo:'./logo/logo-5.svg'
                },
                {
                  id:6,
                  companyname:'Tech Innovation Ltd',
                  joindate:'Sap 04 2024',
                  work:'finance',
                  companyssummary:'Provide financial guidance strategic planing to a growing startup.',
                  varified:true,
                  logo:'./logo/logo-6.svg'
                },
]