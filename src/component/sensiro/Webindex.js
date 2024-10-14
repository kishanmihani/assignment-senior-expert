import PropTypes from 'prop-types'
import React, { Component, PureComponent } from 'react'
import Header from './Header/Header'
import FlashFront from './Flash/FlashFront'
import WebFooter from './WebFooter/WebFooter'
import Mainonecontainer from './Mainonecontainer/Mainonecontainer'
import NewBlogs from './NewBlogs/NewBlogs'
import Mainsecondcontainer from './Mainsecondcontainer/Mainsecondcontainer'
import Mainfourcontainer from './Mainfourcontainer/Mainfourcontainer'
import Mainfivecontainer from './Mainfivecontainer/Mainfivecontainer'
import Discover from './Discover/Discover'

export default class Webindex extends PureComponent {
 
  render() {
    
    return (
      <div >
        <FlashFront />
        <Mainonecontainer />
        <Mainsecondcontainer />
        <Mainfourcontainer />
        <Discover />
        <Mainfivecontainer />
        <NewBlogs  />
        <WebFooter />
      </div>
    )
  }
}

// const allcom=[<FlashFront />,<Mainonecontainer />,<Mainsecondcontainer />,<NewBlogs  />,<WebFooter />]