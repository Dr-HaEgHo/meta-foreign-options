import React from 'react'
import { Icon } from '@iconify/react';
import tradepc from '../assets/tradepc.png'

const JoinAClub = () => {
  return (
      <div className='join-a-club' >
          <div className="nav-container">
              <div className="jac">
                  <div className="jac-top">
                      <h1>Join a club of more than 1,000,000+ Traders</h1>
                  </div>
                  <div className="jac-bottom">
                      <div className="jac-bottom-img">
                          <img src={tradepc} alt="tradepc.png" />
                      </div>
                      <div className="jac-bottom-cards">
                        <div className="jac-bottom-card">
                            <div className="jac-bottom-icon">
                                <Icon className='jac-icon' icon="cil:badge" />
                            </div>
                            <h2>Best Reputation</h2>
                            <p>Do your research, we are known for quality service, transparent and profitable trading</p>
                        </div>
                        <div className="jac-bottom-card">
                            <div className="jac-bottom-icon">
                                <Icon className='jac-icon' icon="cil:badge" />
                            </div>
                            <h2>Advanced Tools</h2>
                            <p>Do your research, we are known for quality service, transparent and profitable trading</p>
                        </div>
                        <div className="jac-bottom-card">
                            <div className="jac-bottom-icon">
                                <Icon className='jac-icon' icon="cil:badge" />
                            </div>
                            <h2>1,000,000+ Clients</h2>
                            <p>Do your research, we are known for quality service, transparent and profitable trading</p>
                        </div>
                        <div className="jac-bottom-card">
                            <div className="jac-bottom-icon">
                                <Icon className='jac-icon' icon="cil:badge" />
                            </div>
                            <h2>Worldwide Office</h2>
                            <p>Do your research, we are known for quality service, transparent and profitable trading</p>
                        </div>
                      </div> 
                  </div>
              </div>
          </div>
    </div>
  )
}

export default JoinAClub

