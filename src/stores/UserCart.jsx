

import { useCart } from './context/CartContext'
import React from 'react'






const UserCart = () => {
    const {cartItems , addToCart, removeFromCart} = useCart()
    let total = 0
   
  return (
  <>
   {cartItems.map((item)=>{
      total += item.price;
          return(
           <>
            
            <div className='cart-Section'>
                 <div className="cart-image">
                    <img src={item.image} alt="" />
                 </div>
                 <div className="cart-datails">
                    <h3>product: {item.product} </h3>
                    <h2>Price: {item.price}</h2>
                    <h1>Model: {item.model}</h1>
                 </div>
                 <div className="remove">
                 <button onClick={() => removeFromCart(item.image)}>Remove</button>
                 </div>
            </div>
           
           </>
          )
   })}
   {total === 0 ? <h2>Cart is empty</h2> : <h2>Total: {total}</h2>}

           
  </>
    
  )
}

export default UserCart