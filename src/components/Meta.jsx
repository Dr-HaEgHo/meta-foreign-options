import React from 'react'
import metaPhone from '../assets/metaPhone.png';
import {Icon} from '@iconify/react'

const Meta = () => {
  return (
      <div className='meta'>
          <div className="nav-container">
              <div className="mt">
                  <div className="mt-left">
                      <img src={metaPhone} alt="" />
                  </div>
                  <div className="mt-right">
                      <h1>Meta Trader 5</h1>
                      <p>best trading experience guaranteed. explore our modern tools and experienced experts for a high profit yield</p>
                      <a href="https://metaforeignoptions.com/views/signup.php"><button>Open an account <Icon className='mt-icon' icon="bxs:chevron-right-circle" /></button></a>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Meta