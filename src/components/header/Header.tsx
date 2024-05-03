import React, { Component } from 'react'
import logo from '../../assets/logo.png'
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <img src={logo} alt='' className='header-logo'/>
      </div>
    )
  }
}

export default Header