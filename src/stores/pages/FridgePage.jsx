





import {fridgeData} from '../data/fridge'
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const FridgePage = () => {

 const [selectProduct , setSelectProduct] = useState([])
    const companyHandler=(mango)=>{
         if(selectProduct.includes(mango)){
          setSelectProduct(selectProduct.filter(item=> item !== mango))
         }else{
          setSelectProduct([...selectProduct,mango])
         }
    }
    const filterProduct = selectProduct.length===0?
    fridgeData : fridgeData.filter((orange)=>selectProduct.includes(orange.brand))

  return (
   
    <>
    <Navbar/>
 <div className="full-page">
     <div className="product-selected">
     {[...new Set(fridgeData.map((key) => key.brand))].map((brand) => {
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
                         <Link to={`/fridge/${item.id}`}>
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

export default FridgePage