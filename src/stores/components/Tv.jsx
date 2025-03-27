





import { Link} from 'react-router-dom'
import {tvData} from '../data/tv'
import React from 'react'

const Tv = () => {
      const firstFiveImages = tvData.slice(0,5)
  return (
    <>
    <h1 className='probuct-heading'>TV</h1>
     <div className='product-section'>
         {
             firstFiveImages.map((item)=>{
                  return(
                     <div className='image-box'>
                         <Link to="/tv"> <img src={item.image} className='product-image' alt="" /></Link>
                         <h3 className="image-name">{item.name}</h3>
                     </div>
                  )
             })
         }
     </div>
    </>
  )
}

export default Tv