import React, { Component, PureComponent } from 'react'
import Header from '../Header/Header'
import './FlashFront.css'
import Listli from '../liListRender/Listli'
import { InputSwitch } from 'primereact/inputswitch';
import phote1 from '../../../Asset/images/phote1.jpg'
import phote2 from '../../../Asset/images/phote2.jpg'
import phote3 from '../../../Asset/images/phote3.webp'
import phote4 from '../../../Asset/images/phote4.png'
import phote5 from '../../../Asset/images/phote5.jpg'
import Sildercarosel from './sildercarosel/Sildercarosel';
class FlashFront extends PureComponent {
  constructor(){
    super()
    this.state={
      Radio_before:'For senior',
      Radio_After:'For smes',
      middletext_First:'Explore Fliexable work arrangement that fits your lifestyle. Keep',
      middletext_Second:'learning and growing professionally.',
      radio_button:false,
      comphotoes:[phote1,phote2,phote3,phote4,phote5]
  }
  this.radiochange=this.radiochange.bind(this);
  }
  radiochange(){
    let radiobuttonval=this.state.radio_button
    this.setState({
      radio_button: !radiobuttonval
    })
  }
  render() {
    return (
      <div className='rounded-0 h-100 border-0 gradientflash card   mt-5 pt-3'>
        <Header className='card-header'/>
        <section className='mb-5 mt-5'>
          <div className='d-flex justify-content-center'>
          <Listli brand={this.state.Radio_before} className='text-uppercase text-white fw-normal headingtext me-2'></Listli>
          {/* <input type='switch'></input> */}
          <InputSwitch checked={this.state.radio_button}  className="p-invalid" onChange={this.radiochange} />
          <Listli brand={this.state.Radio_After} className='text-uppercase text-white fw-normal headingtext ms-2'></Listli>
          {/* <Listli brand={this.state.Radio_After} className='text-uppercase text-white fw-normal headingtext ms-2'/> */}
          </div>
          <div className='m-auto'>
          <Listli brand='Unlock New opportunities ' className='fontheadsize text-white fw-bolder headingtext text-capitalize'/>
          <Listli brand='In Retirement' className='fontheadsize text-white fw-bolder headingtext text-capitalize'/>
          </div>
          <div className='m-2'>
          <Listli brand={this.state.middletext_First} className='text-white fs-6 fw-normal headingtext ms-2'></Listli>
          <Listli brand={this.state.middletext_Second} className='text-white fs-6 fw-normal headingtext ms-2'></Listli>
          </div>
          <div className='m-4'>
          <button className='btn btn-light  headingtext m-2 whitebutton'>Register</button>
          <button className='btn btn-danger  headingtext m-2 orangebutton'>Get Demo</button>
          </div>
          <div className='card-footer border-0 bg-transparent'>
            <div className='d-flex justify-content-center'>
            {this.state.comphotoes.map((car) => <img src={car} className='rounded-circle comphotoes border border-2 border-white"'/>)}
            </div>
            <p className='headingtext text-white fw-normal'>Trusted by <b>5000+</b> Senior Expert and <b>200+</b> SMEs</p>
          
          <div className='w-75 m-auto'>
          <Sildercarosel />
          </div>
          </div>
        </section>
      </div>
    )
  }
}

export default React.memo(FlashFront)