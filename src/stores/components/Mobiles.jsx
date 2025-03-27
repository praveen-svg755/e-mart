


import { Link} from 'react-router-dom'
import {mobileData} from '../data/mobile'

import React from 'react'

const Mobiles = () => {
  const firstFiveImages = mobileData.slice(0,6)
  return (
   <>
   <h1 className='product-heading'>Mobiles</h1>
    <div className='product-section'>
        {
            firstFiveImages.map((item)=>{
                 return(
                    <>
                    
                    <div className='image-box'>
                    <Link to="/mobile"> <img src={item.image} className='product-image' alt="" /></Link>
                        
                        <h3 className="image-name">{item.name}</h3>
                    </div>
                   
                    
                    
                    </>
                   
                 )
            })
        }
    </div>
   </>
  )
}

export default Mobiles