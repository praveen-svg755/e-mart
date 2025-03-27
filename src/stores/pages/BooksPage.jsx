

import {booksData} from '../data/books'
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const BooksPage = () => {

      const [selectProduct , setSelectProduct] = useState([])
      const companyHandler=(mango)=>{
           if(selectProduct.includes(mango)){
            setSelectProduct(selectProduct.filter(item=> item !== mango))
           }else{
            setSelectProduct([...selectProduct,mango])
           }
      }
      const filterProduct = selectProduct.length===0?
      booksData : booksData.filter((orange)=>selectProduct.includes(orange.author))

  return (
    
    <>
      <Navbar/>
     <div className="full-page">
          <div className="product-selected">
           {[...new Set(booksData.map((key) => key.author))].map((author) => {
        return (
          <div className="selected-product-input" key={author}>
            <label>
              <input
                type="checkbox"
                checked={selectProduct.includes(author)}
                onChange={() => companyHandler(author)}
              />
              {author}
            </label>
          </div>
        );
      })}
      
           </div>
     <div className="page-section">
              {
                  filterProduct.map((item)=>{
                      return(
                          <>
                            <div className="page-image">
                              <Link to={`/books/${item.id}`}>
                              <div className="div-image-product">
                                     <img className='product-image'src={item.image} alt="" />
                                  </div>
                              </Link>
                                 
                                 <div className="product-model">
                                     <h3 className='image-name'> <i>Title: </i>{item.title} <br/><i>Author: </i>{item.author}</h3>
                                 </div>
                            </div>
                           
                          </>
                      )
                  })
              }
            </div>
     </div>
    </>
  )
}

export default BooksPage