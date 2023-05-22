import React from 'react'
import { useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import JoinAClub from '../components/JoinAClub'
import MarketAnalysis from '../components/MarketAnalysis'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Packages from '../components/Packages'
import Strip from '../components/Strip'
import TopBar from '../components/TopBar'
import TradeWorldClass from '../components/TradeWorldClass'

const Home = () => {

    const [position, setPosition] = useState("-91px")
    
    window.addEventListener("scroll", handleNav)

    function handleNav() {
        let y = window.pageYOffset;

        if (y >= 90) {
            setPosition("-0px")
        } else if (y > 0) {
            setPosition("-90px")
        } 
    } 

  return (
      <div>
         <Navbar position={position} />
          <TopBar />
          <Hero />
          <Strip />
          <Cards />
          <TradeWorldClass /> 
          <JoinAClub />
          <MarketAnalysis />
          <Packages />
          <Meta />
          <Footer/>
          {/* <div style={{height: "600px"}} ></div> */}
    </div>
  )
}

export default Home;