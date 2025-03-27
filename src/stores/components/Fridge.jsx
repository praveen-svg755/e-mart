



import { Link} from 'react-router-dom'
import {fridgeData} from '../data/fridge'
import React from 'react'

const Fridge = () => {
      const firstFiveImages = fridgeData.slice(0,5)
  return (
    <>
    <h1 className='probuct-heading'>Fridge</h1>
     <div className='product-section'>
         {
             firstFiveImages.map((item)=>{
                  return(
                     <div className='image-box'>
                         <Link to="/fridge"> <img src={item.image} className='product-image' alt="" /></Link>
                         <h3 className="image-name">{item.brand}</h3>
                     </div>
                  )
             })
         }
     </div>
    </>
  )
}

export default Fridge