import React from 'react'
import {Icon} from "@iconify/react"

const TradeWorldClass = () => {
  return (
      <div className='trade-world-class'>
          <div className="nav-container">
              <div className="twc">
                  <div className="twc-left">
                      <div className="twc-left-top">
                          <div className="twc-top-badge">
                              <Icon className='twc-icon'  icon="ion:logo-google-playstore" />
                              <div className="twc-badge-cont">
                                  <p>Download From</p>
                                  <h5>Play Store</h5>
                              </div>
                          </div>
                          <div className="twc-top-badge">
                              <Icon className='twc-icon' icon="ic:outline-apple" />
                              <div className="twc-badge-cont">
                                  <p>Download From</p>
                                  <h5>App Store</h5>
                              </div>
                          </div>
                          <div className="twc-top-badge">
                              <Icon className='twc-icon' icon="ri:windows-fill" />
                              <div className="twc-badge-cont">
                                  <p>Download From</p>
                                  <h5>Microsoft Store</h5>
                              </div>
                          </div>
                      </div>
                      <hr />
                      <div className="twc-left-bottom">
                          <h2>Trade on world class platform</h2>
                          <p>Experience first class trading services and the best trading tools available in the market.</p>
                      </div>
                  </div>
                  <div className="twc-right">
                      {/* <img src={} alt="" /> */}
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TradeWorldClass