import React from 'react'
import stockEx from '../assets/stockEx.mp4'

const MarketAnalysis = () => {
  return (
      <div className='market-analysis' >
          <div className="nav-container _90">
              <div className="ma">
                  <div className="ma-left">
                      <h1>Market Analysis and Trade Inspiration</h1>
                      <p>Best analysis and trade signals. Cryptocurrency mining and multiple currency trading and exchanges.</p>
                      <div className='ma-left-boxes'>
                          <div><p>Strategies & Discussions</p></div>
                          <div><p>Forecasts & Educations</p></div>
                      </div>
                  </div>
                  <div className="ma-right">
                      <video controls autoPlay={false} src={stockEx}></video>
                      <div className='ma-right-cont'>
                          <p>Explore the markets at your own pace with short online courses</p>
                          <a href="https://metaforeignoptions.com/views/signup.php"><button  >Sign up</button></a>
                      </div>
                  </div>
              </div>
          </div>
  
    </div>
  )
}

export default MarketAnalysis