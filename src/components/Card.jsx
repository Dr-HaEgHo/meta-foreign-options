import React from 'react'
import { Icon } from '@iconify/react';

const Card = ({key, title, subtitle, figure, subfigure, desc}) => {
  return (
      <div className='card'>
          <div className="cd-top">
              <h4>{title}<Icon className='' icon="ic:baseline-chevron-right" /> </h4>
              <p>{subtitle}</p>
          </div>
          <div className='cd-mid' >
              <h1>{ figure }</h1>
              <p>{subfigure}</p>
          </div>
          <div className='cd-tom' >
              <p>{desc}</p>
          </div>
    </div>
  )
}

export default Card
