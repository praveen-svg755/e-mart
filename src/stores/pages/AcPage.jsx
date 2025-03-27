

import Navbar from '../components/Navbar'
import { acData } from '../data/ac'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const AcPage = () => {
   const [selectProduct , setSelectProduct] = useState([])
      const companyHandler=(mango)=>{
           if(selectProduct.includes(mango)){
            setSelectProduct(selectProduct.filter(item=> item !== mango))
           }else{
            setSelectProduct([...selectProduct,mango])
           }
      }
      const filterProduct = selectProduct.length===0?
      acData : acData.filter((orange)=>selectProduct.includes(orange.brand))
   return (
       <>
       <Navbar/>
        <div className="full-page">
        <div className="product-selected">
            {[...new Set(acData.map((key) => key.brand))].map((brand) => {
         return (
           <div className="selected-product-input" key={brand}>
             <label>
               <input
                 type="checkbox"
                 checked={selectProduct.includes(brand)}
                 onChange={() => companyHandler(brand)}
               />
               {brand}
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
                          <Link to={`/ac/${item.id}`}>
                          <div className="div-image-product">
                                   <img className='product-image'src={item.image} alt="" />
                               </div>
                          </Link>
                               
                              <div className="product-model">
                                  <h3 className='image-name'> <i>Brand: </i>{item.brand} <br/><i>Model: </i>{item.model}</h3>
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

export default AcPage