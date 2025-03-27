
import { Link} from 'react-router-dom'
import {booksData} from '../data/books'
import React from 'react'

const Books = () => {
     const firstFiveImages = booksData.slice(0,5)
  return (
    <>
    <h1 className='probuct-heading'>Books</h1>
     <div className='product-section'>
         {
             firstFiveImages.map((item)=>{
                  return(
                     <div className='image-box'>
                         <Link to="/books"> <img src={item.image} className='product-image' alt="" /></Link>
                         <h3 className="image-name">{item.name}</h3>
                     </div>
                  )
             })
         }
     </div>
    </>
  )
}

export default Books