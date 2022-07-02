import React from 'react';
import {Link} from  "react-router-dom";
import NavbarCss from "./Navbar.css";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Navbar = () => {
  return <>
   <nav>
   <Link exact activeClassName='navLink' to="home">Home</Link>
   <Link exact activeClassName='navLink' to="/Services">Services</Link>
   <Link exact activeClassName='navLink' to="/About">About</Link>
   <Link exact activeClassName='navLink' to="/Contact">Contact Us</Link>
   </nav>
  </>;
};

export default Navbar;
