
import Footer from '../../Footer/Footer'
import FooterData from '../../Footer/FooterData'
import Marquee from '../../Hover/Marquee'

import Navbar from '../components/Navbar'
import Products from '../components/Products'


import React from 'react'

const Landingpage = () => {
  return (
    <div className='landing-full-page'>
       
        <Navbar/>
        
        <Products />
        <FooterData/>
        <Footer/>
       
    </div>
  )
}

export default Landingpage