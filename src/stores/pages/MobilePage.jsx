


import Navbar from '../components/Navbar'
import {mobileData} from '../data/mobile'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const MobilePage = () => {

    const [selectProduct , setSelectProduct] = useState([])
    const companyHandler=(mango)=>{
         if(selectProduct.includes(mango)){
          setSelectProduct(selectProduct.filter(item=> item !== mango))
         }else{
          setSelectProduct([...selectProduct,mango])
         }
    }
    const filterProduct = selectProduct.length===0?
    mobileData : mobileData.filter((orange)=>selectProduct.includes(orange.brand))

  return (
    <>
       <Navbar/>
     <div className="full-page">
     <div className="product-selected">
      <h2>Filters</h2>
     {[...new Set(mobileData.map((key) => key.brand))].map((brand) => {
  return (
    <div className="se">
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
                         <Link to={`/mobile/${item.id}`}>
                           <div className="div-image-product">
                                <img className='product-image'src={item.image} alt="" />
                           </div>
                         </Link>
                            
                           <div className="product-model">
                               <h3 className='image-name'> <i>Brand: </i>{item.brand} <br/><i>Name:</i>{item.name}</h3>
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

export default MobilePage