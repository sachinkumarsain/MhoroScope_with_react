import React from 'react'
import logo from "../images/logo.jpeg"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"

function Header() {
  return (
   <>
  <header>
    <div className='header1'>
    <div className='logo'>
        <img src={logo}></img>
    </div>
    <div className='search'>
        <div className='menu'>
            <input type='text'placeholder='Where do you want to travel?'></input>
            <input type='date'placeholder='Month'></input>
            <input type='number'placeholder='Budget'></input>
            <button><SearchIcon /></button>
        </div>
        <div className='search'>
           <button>{<CallIcon/>}</button>
           <button>{<PersonIcon/>}</button>
           <button>{<MenuIcon/>}</button>
        </div>
    </div>
    <div className='contacts'>

    </div>
   </div>
   <div className=' header2'>
    <ul>
        <li><a href=''>Destinations</a></li>
        <li><a href=''>Speciality Tours</a></li>
        <li><a href=''>Customized Holidays</a></li>
        <li><a href=''>Corporate Travel</a></li>
        <li><a href=''>Forex</a></li>
        <li><a href=''>Inbound</a></li>
        <li><a href=''>Cpntact Us</a></li>
    </ul>
   </div>
   </header>
   </>
  )
}

export default Header