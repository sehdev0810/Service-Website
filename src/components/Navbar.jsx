import React from 'react';
import { Link } from 'react-scroll';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <img src="src/assets/Images/Top Shapes (3).png" alt="img1" className='img1' />
      <img src="src/assets/Images/Logo.png" alt="logo" className='logo' />
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} className="nav-link">HOME</Link>
          </li>
          <li>
            <Link to="about-us" smooth={true} duration={500} className="nav-link">ABOUT US</Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500} className="nav-link">BLOG</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="nav-link">SERVICES</Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500} className="nav-link">TESTIMONIALS</Link>
          </li>
          <li>
            <Link to="contact-us" smooth={true} duration={500} className="nav-link">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
