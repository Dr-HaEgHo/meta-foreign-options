import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
      <div className='topbar'>
          <div className="container">
              <div className="tb">
                  <div className="tb-mail">
                    <Icon className='icon' icon="fluent:payment-20-regular" />
                    <p>Info@metaforeignoptions.com</p>
                  </div> 
                  <hr className='tb-hr'/>
                  <div className="tb-links">
                      <div className="tb-fnb">
                        {/* <Icon className='icon' icon="fluent:location-48-regular" />
                        <p>Find Nearest Branch</p> */}
                      </div>
                      <ul>
                          <Link to="/education" ><p>Careers</p></Link>
                          <Link to="/contact-us" ><p>Contact</p></Link>
                          <Link to="/terms" ><p>Terms</p></Link>
                          <Link to="/faqs" ><p>FAQs</p></Link>
                      </ul>
                  </div>
                  {/* <hr className='tb-hr'/> */}
                  {/* <div className="tb-search">
                      <Icon className='icon' icon="uil:search" />
                      <p className=''>Search</p>
                </div> */}
              </div>
          </div>
    </div>
  )
}

export default TopBar;