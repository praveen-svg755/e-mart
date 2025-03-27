








import { Link} from 'react-router-dom'
import {watchData} from '../data/watch'
import React from 'react'

const Watch = () => {
    const firstFiveImages = watchData.slice(0,5)
  return (
    <>
    <h1 className='probuct-heading'>Watches</h1>
     <div className='product-section'>
         {
             firstFiveImages.map((item)=>{
                  return(
                     <div className='image-box'>
                         <Link to="/watch"> <img src={item.image} className='product-image' alt="" /></Link>
                         <h3 className="image-name">{item.name}</h3>
                     </div>
                  )
             })
         }
     </div>
    </>
  )
}

export default Watch