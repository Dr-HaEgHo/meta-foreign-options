import React from 'react'
// import { Icon } from '@iconify/react';

const NavTab = ({desc, icon}) => {



  return (
      <div className='navtab'>
          <p>{desc}</p>
          {icon}
    </div>
  )
}

export default NavTab