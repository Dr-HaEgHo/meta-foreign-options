import React, { useState } from 'react'
import { Icon } from '@iconify/react'


const Dashtray = ({link, setLink}) => {

                //     function fetchCountries () { 
                //     fetch("https://restcountries.com/v2/all")
                //     .then((res) => res.json())
                //     .then((data) => (
                //         data.map(dat => {
                //             countries.innerHTML += `
                //             <option class="text-primary" value="${dat.name}">${dat.name}</option>
                //             `
                //         })
                //         ))
                // }
    
    const items = [
        {id: 1, name: "Live Trade", icon:<Icon className='tricon' icon="material-symbols:insert-chart-rounded" /> },
        {id: 2, name: "Deposit", icon:<Icon className='tricon' icon="mdi:credit-card-plus-outline" /> },
        {id: 3, name: "Withdraw", icon:<Icon className='tricon' icon="zondicons:wallet" /> },
        {id: 4, name: "History", icon:<Icon className='tricon' icon="mdi:clock-arrow" />},
        {id: 5, name: "Accounts", icon:<Icon className='tricon' icon="fa6-solid:user-tie" /> },
        {id: 6, name: "Purchase Bitcoin", icon:<Icon className='tricon' icon="akar-icons:bitcoin-fill" /> },
        {id: 7, name: "Support", icon:<Icon className='tricon' icon="mdi:support" /> },
        {id: 8, name: "Verification", icon:<Icon className='tricon' icon="material-symbols:verified-rounded" /> },
        {id: 9, name: "Logout", icon:<Icon className='tricon' icon="fa:power-off" /> },
    ]

    const handleTab = (e) => {
        setLink(e.target.lastChild.textContent);
    } 


  return (
      <div className='tray' >
          {
              items && items.map(item => (
                <div onClick={handleTab} key={item.id} className='label' style={{background: item.name === link ? "rgba(0, 0, 0, 0.2)" : "none"}}>
                    { item.icon }
                    <h3>{ item.name }</h3>
                </div>
              ))
          }

    </div>
  )
}

export default Dashtray