import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';
import {Icon} from '@iconify/react'
import NavTab from '../components/NavTab';
import TopBar from '../components/TopBar';
import { Link, useNavigate } from 'react-router-dom';

const AboutUs = () => {

    const navigate = useNavigate()
    const [position, setPosition] = useState("-91px")
    const [openNav, setOpenNav] = useState(false);
    const [comp, setComp] = useState(false)
    
    const handleToggleComp = () => {
        setComp(!comp);
    }
    
    window.addEventListener("scroll", handleNav)

    function handleNav() {
        let y = window.pageYOffset;

        if (y >= 90) {
            setPosition("-0px");
        } else if (y > 0) {
            setPosition("-90px");
        } 
    } 

    const handleToggleNav = () => {
        setOpenNav(!openNav);
    }

    const goToSignUp = () => {
        navigate('http://Metaforeignoptions.com/views/signup.php')
    }


  return (
      <div className='about'>
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
        <Navbar position={position} />
        <TopBar/>
          <div className="about-us">
              
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
                              <p className='hup-flex'><Icon className='icon' icon="ic:baseline-phone" />  +1 (929) 464-5936</p>
                          </div>
                      </div>
                      <div className="hr-burger">
                          <Icon onClick={handleToggleNav} className=' burg-icon' icon="heroicons-solid:menu-alt-3" />
                      </div>
                  </div>
        </div>
        <div className="au-body">
              <div className="nav-container">
                  <div className="au">
                    <div className="au-top-cont">
                        <h1>Putting our clients first since 2009</h1>
                        <p>For more than 11 years, we’ve been empowering clients by helping them take control of their financial lives.</p>
                      </div>
                      <div className="au-top-cards">
                          <div className="aut-card">
                              <div className="aut-icon">
                                  <Icon className='autcon' icon="bxs:leaf"/>
                              </div>
                              <div className="aut-card-cont">
                                  <h2>Philosophy</h2>
                                  <p>MetaForeignOptions ideology is fighting financial problems by creating a market where the experienced and inexperienced can benefit from online investment. </p>
                              </div>
                          </div>
                          <div className="aut-card">
                              <div className="aut-icon">
                                  <Icon className='autcon' icon="material-symbols:hourglass-top-rounded"/>
                              </div>
                              <div className="aut-card-cont">
                                  <h2>History</h2>
                                  <p>established since 11 years ago we have moved from one stage to another and hope to keep growing. </p>
                              </div>
                          </div>
                          <div className="aut-card">
                              <div className="aut-icon">
                                  <Icon className='autcon' icon="mdi:flag-variant"/>
                              </div>
                              <div className="aut-card-cont">
                                  <h2>Vision & Mission</h2>
                                  <p>Wealth creation for all nations. strategic planning for profitable trading </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="au-bottom">
                      <div className="aub-left">
                          <h4>Number Speaks</h4>
                          <h2>We Always Ready for a Challenge</h2>
                          <a href="https://Metaforeignoptions.com/views/signup.php"><button >Create Account <Icon className='aubcon' icon="mdi:chevron-right-circle"/> </button></a>
                      </div>
                      <div className="aub-right">
                          <div className="aubr-top">
                              <h2>150+</h2>
                              <div className="aubr-top-cont">
                                  <h3>Trading Instruments</h3>
                                  <p>Various currency pairs and market commodities coupled with modern trading instruments. your money is secured</p>
                              </div>
                          </div>
                          <div className="aubr-top">
                              <h2>36+</h2>
                              <div className="aubr-top-cont">
                                  <h3>Countries Covered</h3>
                                  <p>Our Offices is located in over 36 countries but our services is offered worldwide.</p>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs;