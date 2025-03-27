





import {furnitureData} from '../data/furniture'
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const FurniturePage = () => {

   const [selectProduct , setSelectProduct] = useState([])
       const companyHandler=(mango)=>{
            if(selectProduct.includes(mango)){
             setSelectProduct(selectProduct.filter(item=> item !== mango))
            }else{
             setSelectProduct([...selectProduct,mango])
            }
       }
       const filterProduct = selectProduct.length===0?
       furnitureData : furnitureData.filter((orange)=>selectProduct.includes(orange.category))

  return (
   <>
   <Navbar/>
     <div className="full-page">
     
         <div className="product-selected">
                  {[...new Set(furnitureData.map((key) => key.category))].map((category) => {
               return (
                 <div className="selected-product-input" key={category}>
                   <label>
                     <input
                       type="checkbox"
                       checked={selectProduct.includes(category)}
                       onChange={() => companyHandler(category)}
                     />
                     {category}
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
                         <Link to={`/furniture/${item.id}`}>
                           <div className="div-image-product">
                                <img className='product-image'src={item.image} alt="" />
                           </div>
                         </Link>
                              <div className="product-model">
                                  <h3 className='image-name'> <i>Material: </i>{item.material} <br/><i>Name:</i>{item.name}</h3>
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

export default FurniturePage