


import {menData} from '../data/men'
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const MenPage = () => {


    const [selectProduct , setSelectProduct] = useState([])
      const companyHandler=(mango)=>{
           if(selectProduct.includes(mango)){
            setSelectProduct(selectProduct.filter(item=> item !== mango))
           }else{
            setSelectProduct([...selectProduct,mango])
           }
      }
      const filterProduct = selectProduct.length===0?
      menData : menData.filter((orange)=>selectProduct.includes(orange.type))
  return (
    
    <>
    <Navbar/>
   <div className="full-page">

        <div className="product-selected">
         {[...new Set(menData.map((key) => key.type))].map((type) => {
      return (
        <div className="selected-product-input" key={type}>
          <label>
            <input
              type="checkbox"
              checked={selectProduct.includes(type)}
              onChange={() => companyHandler(type)}
            />
            {type}
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
                         <Link to={`/men/${item.id}`}>
                           <div className="div-image-product">
                                <img className='product-image'src={item.image} alt="" />
                           </div>
                         </Link>
                               <div className="product-model">
                                   <h3 className='image-name'> <i>Name: </i>{item.name} <br/><i>material: </i>{item.material}</h3>
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

export default MenPage