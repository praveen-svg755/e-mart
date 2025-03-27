



import { Link} from 'react-router-dom'
import {acData} from '../data/ac'
import React from 'react'

const Ac = () => {
      const firstFiveImages = acData.slice(0,5)
  return (
    <>
    <h1 className='probuct-heading'>Ac</h1>
     <div className='product-section'>
         {
             firstFiveImages.map((item)=>{
                  return(
                     <div className='image-box'>
                         <Link to="/ac"> <img src={item.image} className='product-image' alt="" /></Link>
                         <h3 className="image-name">{item.brand}</h3>
                     </div>
                  )
             })
         }
     </div>
    </>
  )
}

export default Ac