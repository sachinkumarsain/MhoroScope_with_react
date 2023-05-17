import React from 'react'
import logo from "../images/logo.jpeg"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
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
            <span><LocationOnIcon /></span>
            <input type='text' placeholder='Where do you want to travel?'></input>
            <span><DateRangeIcon /></span>
            <input type='text' placeholder='Month'></input>
            <span><CurrencyRupeeIcon /> </span>
            <input type='number' placeholder='Budget'></input>
            <button><SearchIcon /></button>


          </div>
          <div className='contacts'>
            <button>{<CallIcon />}</button>
            <button>{<PersonIcon />}</button>
            <button>{<MenuIcon />}</button>
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