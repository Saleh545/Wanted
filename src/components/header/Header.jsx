import React from 'react'
import { Link } from 'react-router-dom'
import "../header/header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="container">

   <header>
    <div className="logo">
      <Link>wanted</Link>
    </div>
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
   </header>

    </div>
    </div>
  )
}

export default Header