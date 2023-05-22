import React from 'react'
import Card from './Card'
import {Icon} from '@iconify/react'

const Cards = () => {

    const cardList = [
        {id: 1, title: "FX", subtitle:"Spread as low as", figure: 0.2, subfigure: "pip", desc:"Trade 182 FX spot pairs and 140 forwards across majors, minors, exotics and metals."},
        {id: 2, title: "CFDs", subtitle:"Spread from", figure: 0.4, subfigure: "on US500", desc:"Go long or short on 9,000+ instruments with tight spreads & low commissions."},
        {id: 3, title: "Stocks", subtitle:"Commissions from", figure: "$3", subfigure: "on US stocks", desc:"Access 19,000+ stocks across core and emerging markets on 36 exchanges worldwide."},
        {id: 4, title: "Commodities", subtitle:"Commission as low as", figure: "$1.25", subfigure: "per lot", desc:"Trade a wide range of commodities as CFDs, futures, options, spot pairs, & more."},
    ]


  return (
      <div className='cards'>
          <div className="nav-container">
              <div className="cds">
                  <div className="cds-top">
                      {
                          cardList && cardList.map(card => (
                              <div style={{height: "100%"}}  key={card.id}>
                              <Card
                                  title={card.title}
                                  subtitle={card.subtitle}
                                  figure={card.figure}
                                  subfigure={card.subfigure}
                                  desc={card.desc}
                              />
                              </div>
                          ))
                      }
                  </div>
                  <div className="cds-bottom">
                      <div className="cdsb-sect">
                          <Icon className='sect-icon' icon="mdi:customer-service" />
                          <p>FRIENDLY CUSTOMER <br /> SUPPORT</p>
                      </div>
                      <hr />
                      <div className="cdsb-sect">
                          <Icon className='sect-icon' icon="mdi:bank" />
                          <p>REGULATED BY THE <br /> FCA, UK</p>
                      </div>
                      <hr />
                      <div className="cdsb-sect">
                          <Icon className='sect-icon' icon="ph:clock-clockwise-bold" />
                          <p>OVER 10 YEARS <br /> EXPERIENCE</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Cards