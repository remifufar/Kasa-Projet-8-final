import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";

function Header() {
  return (
    <header className='conteneur'>

      <img className=' img-banner'src={logo} alt='logo' />

      <nav>
        <ul>
          <li><NavLink to="/" className={(link) => (link.isActive ? 'active' : '')} > Accueil </NavLink></li>
          <li><NavLink to="/About" className={(link) => (link.isActive ? 'active' : '')}> A Propos</NavLink></li>

        </ul>
      </nav>

    </header>
  )
}

export default Header
