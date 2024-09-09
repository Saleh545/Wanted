import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../header/header.css"
import { Turn as Hamburger } from 'hamburger-react'


const Header = () => {
  const [open, setOpen]= useState(false)
  const toggleMenu= ()=>{
    open ? (document.body.style.overflow = 'visible') : (document.body.style.overflow='hidden')
    setOpen(!open)}
  return (
    <div className='header'>
      <div className="container">
   <header>
    <div className="logo">
      <Link>My Mentor</Link>
    </div>
    <div className={open?"resp-bar " :"resp-bar-close"}>
    <nav>
      <ul>
        <li><Link>Find team member</Link></li>
        <li><Link>Candidates</Link></li>
        <li><Link>Company</Link></li>
        <li><Link>Vacancy</Link></li>
      </ul>
    </nav>
    <div className="login">
      <Link to="login" >Log in</Link>
      <Link to="sign-up" >Sign up</Link>
    </div>


    </div>
    <Hamburger direction="left" toggled={open}  toggle={toggleMenu}/>
   </header>

    </div>
    </div>
  )
}

export default Header