







import { Link} from 'react-router-dom'
import {kitchenData} from '../data/kitchen'
import React from 'react'

const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5)
  return (
    <>
    <h1 className='probuct-heading'>Kitchen </h1>
     <div className='product-section'>
         {
             firstFiveImages.map((item)=>{
                  return(
                     <div className='image-box'>
                         <Link to="/kitchen"> <img src={item.image} className='product-image' alt="" /></Link>
                         <h3 className="image-name">{item.name}</h3>
                     </div>
                  )
             })
         }
     </div>
    </>
  )
}

export default Kitchen