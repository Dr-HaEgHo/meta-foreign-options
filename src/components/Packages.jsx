import React from 'react';
import { Icon } from '@iconify/react'
import badgeNum from '../assets/badgeNum.png'

const Packages = () => {

    const awards = [
        {id:1, title:"Best CFD Broker", num:"01",  desc:"TradeON Summit 2012"},
        {id:2, title:"Best Trading Experience", num:"02",  desc:"Jordan Forex EXPO 2020"},
        {id:3, title:"Best Execution Broker", num:"03",  desc:"Forex EXPO Dubai 2017"},
        {id:4, title:"Best Trading Platform", num:"04",  desc:"London Summit 2018"},
        {id:5, title:"Best Broker Asia", num:"05",  desc:"iFX EXPO 2012"}
    ]

  return (
      <div className='packages' >
          <div className="nav-container">
              <div className="pkg">
                  <div className="pkg-top">
                      <h1>Complete Package for Every Trader</h1>
                  </div>
                  <div className="pkg-bottom">
                      <div className="pkg-card">
                          <div className="pkg-card-top">
                              <p>MINIMUM</p>
                              <span>USD 500</span>
                          </div>
                          <div className='pkg-card-mid' >
                              <h1>Classic Account</h1>
                              <p>Benefit from industry-leading entry prices</p>  
                          </div>
                          <hr />
                          <div className='pkg-card-bottom'>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> One of the established industry leaders</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Three decades of trading know-how</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Award-winning customer service*</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Highly-regarded trader education*</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Advanced rick management</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Tax-free spread betting profits</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Low minimum deposit</p>
                          </div>
                         
                          <div className='pkg-btn'>
                              <a href="http://Metaforeignoptions.com/views/signup.php"><button> Open an Account <Icon icon="bxs:chevron-right-circle"/> </button></a>
                          </div>
                      </div>
                      <div className="pkg-card pkg-light">
                          <div className="pkg-card-top">
                              <p>MINIMUM</p>
                              <span>USD 1000</span>
                          </div>
                          <div className='pkg-card-mid' >
                              <h1>Platinum</h1>
                              <p>Receive even tighter spreads and commisiions</p>  
                          </div>
                          <hr />
                          <div className='pkg-card-bottom'>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Award-winning trading platform*</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Wide range of charting tools</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Fast, automated excecution</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Expert news & analysis</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Competitive spreads</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Advanced trading tools</p>
                              <p><Icon className='pkg-icon' icon="material-symbols:check"  /> Tax-free spread betting profits</p>
                          </div>
                         
                          <div className='pkg-btn'>
                              <a href="http://Metaforeignoptions.com/views/signup.php"><button> Open an Account <Icon icon="bxs:chevron-right-circle"/> </button></a>
                          </div>
                      </div>

                  </div>
                  <div className="pkg-awards">
                      {
                          awards && awards.map(ad => (
                              <div className="pkg-last">
                                  <div className="pkg-last-top">
                                      <p>{ad.num}</p>
                                      <img src={badgeNum} alt="badgenum.png" />
                                  </div>
                                  <div className="pkg-last-bottom">
                                      <h4>{ad.title}</h4>
                                      <p>{ad.desc}</p>
                                  </div>
                              </div>
                          ))
                      }
                      
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Packages;