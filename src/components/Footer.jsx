import React from 'react'
import { Icon } from '@iconify/react'
import logo from '../assets/logo.png'
import {Link, useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    const refreshPage = (e) => {

        navigate(`/${e.target.id.toLowerCase()}`)
        window.location.reload()

        window.scrollTo(0, 0);
        // console.log(e.target.id.toLowerCase())
    }

  return (
      <div className='footer'>
          
          <div className="ft-top">
              <div className="nav-container">
                  <div className='ft-top-content'>
                      <Icon className='ft-icon' icon="mdi:lightbulb-on-20" />
                      <div>
                          <h1>Financial Stability</h1>
                          <p>
                              Financial stability is one of the most widely discussed issues in today’s economic literature. cryptocurrency and commodity trading will help fight financial and economic crisis emerging in the world. <span>BILL GATES </span> 
                          </p>
                      </div>
                </div>
            </div>
          </div>

          <div className="ft-mid">
              <div className="nav-container">
                  <div className="ft-mid-wrap">
                      <div className="ft-mid-1">
                          <a href="http://metaforeignoptions.com"><img src={logo} alt="META-FOREIGN.png" /></a>
                          <h3>Trade With Confidence</h3>
                          <p>MetaForeignOptions LTD <br /> METAFOREIGNOPTIONS LTD 229 Henry St. <br /> New York, NY  10002 United States</p>
                      </div>
                      <div className="ft-mid-2-wrap">
                          <div className="ft-mid-2">
                          <h3>Markets</h3>
                          <ul>
                              <p className='ft-link ' id="forex" onClick={refreshPage}>Forex</p>
                              <p className='ft-link' id="synthetic-indices" onClick={refreshPage} >Synthetic indices</p>
                              <p className='ft-link' id="stock-indices" onClick={refreshPage} >Stock indices</p>
                              <p className='ft-link' id="commodities" onClick={refreshPage} >Commodities</p>
                          </ul>
                      </div>
                      <div className="ft-mid-2">
                          <h3>Company</h3>
                          <ul>
                              <a href='http://metaforeignoptions.com' >Home</a>
                              <Link to='/about-us' >About Us</Link>
                              <Link to='/contact-us' >Contact Us</Link>
                              <a href='http://metaforeignoptions.com/views/signup.php' >Start Now</a>
                          </ul>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="ft-bottom">
              <div className="nav-container">
                  <div className="ftb">
                      <div className="ftb-left">
                          <Link to='/terms' >Legal Documents</Link>
                          <hr />
                          <Link to='/terms' >Privacy</Link>
                          <hr />
                          <Link to='/faqs' >FAQs</Link>
                          <hr />
                          <Link to='/contact-us' >Contact</Link>
                      </div>
                      <div className="ftb-right">
                          <p><a href='http://metaforeignoptions.com' >MetaForeignOptions</a> LTD © 2020. All Rights Reserved</p>
                      </div>
                  </div>
              </div>
          </div>
          


    </div>
  )
}

export default Footer;

// 