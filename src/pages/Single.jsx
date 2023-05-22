import React, { useState } from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import { Icon } from '@iconify/react'
import Dashtray from '../components/Dashtray'
import Dashbody from '../components/Dashbody'
 
const Single = () => {

    const [link, setLink] = useState("Live Trade");

  return (
    <div className='single'>
          <div className="si-nav">
              <div className="si-logo">
                  <img src={logo} alt="logo.png" />
              </div>
              <div className="si-userdets">
                  <div className="siu-icon">
                      <h2>₿TC</h2>
                      {/* <Icon className='sicon' icon="ion:chatbox" /> */}
                  </div>
                  <div className="siu-price">
                      <p>0.00000</p>
                      <Icon className='sicon' icon="ic:twotone-arrow-drop-down" />
                  </div>
                  <div className="siu-btn">
                      <button><Icon className='sibon' icon="fa-solid:donate" />Deposit</button>
                  </div>
                  <div className="siu-user">
                      <img src={user} alt="meta foreign options" />
                  </div>
              </div>
          </div>
          <div className="si-body">
              <div className="sib-left">
                  <Dashtray link={link} setLink={setLink} />
              </div>
              <div className="sib-right">
                  <Dashbody link={link} setLink={setLink} />
              </div>
          </div>
    </div>
  )
}

export default Single