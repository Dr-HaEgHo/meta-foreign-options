import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NavTab from '../components/NavTab'
import TopBar from '../components/TopBar'
import logo from '../assets/logo.png'

const Education = () => {

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



    
  return (
      <div>
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
          <TopBar />
          <div className="contact">
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
          </div>
          <div className="contact-us">
              <div className="nav-container">
                <div className="cu">
                    <h1>Knowledge is a wise investment</h1>
                    <p>By combining easy-to-understand information with actionable insights, Our company helps make the market seem less daunting—and more approachable.</p>
                    <div className="edu-bubs-wrap">
                          <span className="edu-bubs">LEARN</span>
                          <span className="edu-bubs">UNDERSTAND</span>
                          <span className="edu-bubs">TRADE</span>
                    </div>
                </div>
                
                <div className="cu edu-card">
                    <h2>Trade Academy</h2> 
                    <p>Ready to learning Binary, commodities trading & mining. Our online account managers are ready for you</p>
                    <a href="http://metaforeignoptions.com/views/signup.php"><button className="edu-btn" > Start Now</button></a>
                </div>

                  
              </div>
          </div>
          <div className="edu-stages-wrap">
              <div className="nav-container">
                  <div className="edu-stages">
                      <div className="edu-stage">
                          <div className="edust-hd">
                              <Icon onClick={handleToggleNav} className=' edu-icon' icon="gridicons:multiple-users" />
                              <h2>Beginner Course</h2>
                          </div>
                          <div className="edust-cont">
                              <p>Learn the basic concepts of forex trading, what this market is all about, and why you should be a part of it.</p>
                          </div>
                      </div>
                      <div className="edu-stage">
                          <div className="edust-hd">
                              <Icon onClick={handleToggleNav} className=' edu-icon' icon="fa-solid:tools" />
                              <h2>Trading Tools</h2>
                          </div>
                          <div className="edust-cont">
                              <p>Familiarize yourself with advanced strategies and Binary trading toolset. Take your trading to the next level.</p>
                          </div>
                      </div>
                      <div className="edu-stage">
                          <div className="edust-hd">
                              <Icon onClick={handleToggleNav} className=' edu-icon' icon="ic:baseline-area-chart" />
                              <h2>Stock and CFDs</h2>
                          </div>
                          <div className="edust-cont">
                              <p>Discover the world of CFD trading: The ins & outs of the CFD market, relevant information and market dynamics.</p>
                          </div>
                      </div>
                  </div>


                  <div className="start-trading">
                      <h2>Start Trading</h2>
                      <p>Trade Stocks and CFDs trading in a risk-free environment</p>
                      <a href="http://metaforeignoptions.com/views/signup.php"><button className='trade-btn' >Open an Account</button> </a>
                  </div>
                  


              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Education