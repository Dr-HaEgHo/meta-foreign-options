import React, { useState } from 'react'
import logo from '../assets/logo.png'
import pattern from '../assets/sliderShape.png'
import { Icon } from '@iconify/react';
import NavTab from './NavTab';
import ButtonComp from './ButtonComp';
import { Link } from 'react-router-dom';

const Hero = () => {

    const [openNav, setOpenNav] = useState(false);
    const [comp, setComp] = useState(false)
   
    const handleToggleComp = () => {
        setComp(!comp);
    }

    const handleToggleNav = () => { 
        setOpenNav(!openNav)
    }

  return (
      <div className='hero'>
          <div style={{left: openNav === true ? "0%" : "-100%"}} className="hr-nav">
              <div className="hnv-top">
                  <a href='http://metaforeignoptions.com' ><div className="hnv-logo">
                      <img src={logo} alt="logo.png"/>
                  </div></a>
                  <Icon onClick={handleToggleNav} className='hnv-icon' icon="ep:close-bold" />
              </div>
              <div className="hnv-links">
                  <div className="hnv-links-wrap">
                      <a href="http://metaforeignoptions.com"><div className="hnv-link-tab">
                          <p>Home</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></a>
                      {/* <div className="hnv-link-cont">
                          <p><a href="#">Home 1</a></p>
                          <p><a href="#">Home 1</a></p>
                          <p><a href="#">Home 1</a></p>
                          <p><a href="#">Home 1</a></p>
                      </div> */}
                  </div>
                  <div className="hnv-links-wrap">
                      <Link to="/education" ><div className="hnv-link-tab">
                          <p>Education</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></Link>

                  </div>
                  <div className="hnv-links-wrap">
                      <div className="hnv-link-tab">
                          <p>Company</p>
                          <Icon onClick={handleToggleComp} style={{ transform: comp === true ? "rotateZ(90deg)" : "rotateZ(0deg)" }} className='hnv-tab-icon' icon="bxs:chevron-right" />
                      </div>
                      <div className="hnv-link-cont" style={{height: comp === true ? "80px" : "0px"}} >
                          <Link to="/faqs" ><p>FAQs</p></Link>
                          <Link to="/terms"><p>Legal Docs</p></Link>
                      </div>
                  </div>
                  <div className="hnv-links-wrap">
                      <Link to='/contact-us'><div className="hnv-link-tab">
                          <p>Contact Us</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></Link>

                  </div>
                  <div className="hnv-links-wrap">
                      <Link to='/about-us'><div className="hnv-link-tab">
                          <p>About Us</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></Link>

                  </div>
                  <div className="hnv-links-wrap">
                      <a href="https://metaforeignoptions.com/views/login.php"><div className="hnv-link-tab">
                          <p>Login</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></a>

                  </div>
                  <div className="hnv-links-wrap">
                      <a href="https://metaforeignoptions.com/views/signup.php"><div className="hnv-link-tab">
                          <p>Sign Up</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></a>

                  </div>
                 
                  {/* <div className="hnv-links-wrap">
                      <a className='whatsapp hup-flex' href="https://wa.me/message/ZVCCF54HRKLFP1" target="blank" ><Icon className='icon' icon="logos:whatsapp-icon" /> WhatsApp</a>

                  </div> */}
                  
              </div>
            </div>
            <div onClick={handleToggleNav} style={{left: openNav === true ? "0%" : "-100%"}} className="hr-overlay"></div>
          <div className="container rel">
              
              <div className="hr">
                  <div className="hr-top">
                      <a href='http://metaforeignoptions.com' ><div className="hr-logo">
                          <img src={logo} alt="" />
                      </div></a>
                      <div className="hr-links-updates">
                          <div className="hr-links">
                                 <a href="http://metaforeignoptions.com"><NavTab desc="Home" /> </a>
                                 {/* <NavTab desc="Markets" />  */}
                                 <Link to="/education"><NavTab desc="Education" /> </Link>
                                 <div className='hr-comp'>
                                    <NavTab desc="Company" icon={<Icon className='icn' icon="ion:chevron-down-outline" />} /> 
                                    <div className="hr-comp-list">
                                        <Link to="/about-us" >About Us</Link>
                                        <Link to="/contact-us" >Contact Us</Link>
                                        <Link to="/terms" >Legal Docs</Link>
                                        <Link to="/faqs" >FAQs</Link>
                                    </div>
                                 </div>
                                 {/* <NavTab desc="Register" />  */}
                                 
                                 <a href="http://Metaforeignoptions.com/views/login.php"><NavTab desc="Login" /> </a>
                                 <a href="http://Metaforeignoptions.com/views/signup.php"><NavTab desc="Signup" /> </a>
                          </div>
                          <div className="hr-updates">
                              <p className='hup-1'>Trading involves substantial risk and may result in the loss of your invested/greater that your invested capital, respectively.</p>
                              {/* <a href="https://wa.me/message/ZVCCF54HRKLFP1" target="blank" ><p className='hup-flex'><Icon className='icon' icon="logos:whatsapp-icon" /> WhatsApp </p></a> */}
                              <p className='hup-flex'><Icon className='icon' icon="ion:chatbox" /> LIVE CHAT </p>
                              <p className='hup-flex'><Icon className='icon' icon="ic:baseline-phone" /> +1 (929) 464-5936</p>
                          </div>
                      </div>
                      <div className="hr-burger">
                          <Icon onClick={handleToggleNav} className=' burg-icon' icon="heroicons-solid:menu-alt-3" />
                      </div>
                  </div>
                  <div className="hr-bottom">
                      <div className="nav-container">
                          <div className="hrb">
                              <div className="hrb-content">
                                  <h1>Trade Shares and Forex with Financial Thinking</h1>
                                  <p>Access 40,000+ instruments – across asset classes – to trade, hedge and invest from a single account.</p>
                                  <a href="http://Metaforeignoptions.com/views/signup.php"><ButtonComp desc="Discover it Now"/></a>
                              </div>
                          </div>
                      </div>
                      <div className="hr-pattern">
                         <img src={pattern} alt="pattern.png" />
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero