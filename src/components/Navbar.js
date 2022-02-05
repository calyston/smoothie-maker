//Imports
import React from "react";
import logo from '../smoothie.png'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <img id="logo" src={logo} alt="smoothie" />
        <h4>Smoothie Creator</h4>
      </div>
    </nav>
  )
}

export default Navbar;