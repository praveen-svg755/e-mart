




import { Link} from 'react-router-dom'
import {furnitureData} from '../data/furniture'
import React from 'react'

const Furniture = () => {
    const firstFiveImages = furnitureData.slice(0,5)
  return (
    <>
    <h1 className='probuct-heading'>Furniture</h1>
     <div className='product-section'>
         {
             firstFiveImages.map((item)=>{
                  return(
                     <div className='image-box'>
                         <Link to="/furniture"> <img src={item.image} className='product-image' alt="" /></Link>
                         <h3 className="image-name">{item.name}</h3>
                     </div>
                  )
             })
         }
     </div>
    </>
  )
}

export default Furniture