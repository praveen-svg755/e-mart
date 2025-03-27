








import { Link} from 'react-router-dom'
import {womenData} from '../data/women'
import React from 'react'

const Women = () => {
    const firstFiveImages = womenData.slice(0,5)
  return (
    <>
   <h1 className='probuct-heading'>womens</h1>
    <div className='product-section'>
        {
            firstFiveImages.map((item)=>{
                 return(
                    <>
                    
                    <div className='image-box'>
                    <Link to="/women"> <img src={item.image} className='product-image' alt="" /></Link>
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

export default Women