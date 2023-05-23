import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


const Navbar = ({position}) => {
  return (
      <div className='navbar' style={{ top:position }} >
          <div className="nav-container">
              <div className="nav">
                  <a href='http://metaforeignoptions.com'><div className="nav-logo">
                      <img src={logo} alt="logo.svg" />
                  </div></a>
                  <div className="nav-links">
                      <ul>
                          <a href="http://metaforeignoptions.com"><p>Home</p></a>
                          {/* <Link to="/"><p>Markets</p></Link> */}
                          <Link to="/education"><p>Education</p></Link>
                          <p className='nav-chev'>Company <Icon className='chev' icon="ion:chevron-down-outline" />
                              <div className="nav-chev-list">
                                  <Link to="/about-us" >About Us</Link>
                                  <Link to="/contact-us" >Contact Us</Link>
                                  <Link to="/terms" >Legal Docs</Link>
                                  <Link to="/faqs" >FAQs</Link>
                            </div>
                          </p>
                          <hr className='nav-hr'/>
                          <a href="login.html"><p>Login</p></a>
                          <a href="http://Metaforeignoptions.com/views/signup.php"><p>Signup</p></a>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar