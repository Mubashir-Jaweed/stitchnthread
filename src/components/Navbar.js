import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='n_logo'>
            <img className='logo' src={logo}/>
        </div>
        <div className='n_tabs'>
            <a className='n_tab' href='/'>Home</a>
            <a className='n_tab' href='/'>About</a>
            <a className='n_tab' href='/'>Service</a>
            <a className='n_tab' href='/'>Digitizing</a>
            <a className='n_tab' href='/'>Vectorizing</a>
            <a className='n_tab' href='/'>Gallery</a>
            <a className='n_tab' href='/'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar