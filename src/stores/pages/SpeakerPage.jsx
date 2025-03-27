import React from 'react'
import Navbar from '../components/Navbar'
import {speakerData} from '../data/speaker'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const SpeakerPage = () => {

  const [selectProduct , setSelectProduct] = useState([])
      const companyHandler=(mango)=>{
           if(selectProduct.includes(mango)){
            setSelectProduct(selectProduct.filter(item=> item !== mango))
           }else{
            setSelectProduct([...selectProduct,mango])
           }
      }
      const filterProduct = selectProduct.length===0?
      speakerData : speakerData.filter((orange)=>selectProduct.includes(orange.brand))
  return (
    <>
    <Navbar />
  
    <div className="full-page">
      <div className="product-selected">
        {[...new Set(speakerData.map((key) => key.brand))].map((brand) => {
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
        {filterProduct.map((item) => {
          return (
            <div className="page-image" key={item.id}>
              <Link to={`/speaker/${item.id}`}>
                <div className="div-image-product">
                  <img className="product-image" src={item.image} alt={item.name} />
                </div>
              </Link>
              <div className="product-model">
                <h3 className="image-name">
                  <i>Brand: </i>{item.brand} <br />
                  <i>Name:</i> {item.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </>
  
  )
}

export default SpeakerPage