import React from "react";
import { NavLink } from "react-router-dom";
import './MainNavigation.css';


export default function MainNavigation() {

  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "#e6047e" : "black",
      padding: "20px",
      // borderBottom: isActive ? '': 'underline',
    };
  };

  return (
    <nav className="Navigation">
      <ul className="nav-link">
        <li className="nav-item">
          <NavLink to='/' style={NavLinkStyles}>Homepage</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/login' style={NavLinkStyles}>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/registration' style={NavLinkStyles}>Register</NavLink>
        </li>
      
      </ul>
    </nav>
  );
}
