import React from 'react'
import { useCart } from '../stores/context/CartContext'


const Cart = () => {
    const {cartItems} = useCart()
    let total = 0
  return (
    <>
    {cartItems.map((item)=>{
        total += item.price;
    })}
      <div className="hover-cart-list">
        <ul>
            
            <li></li>
          
        </ul>
    </div>
    </>
  )
}

export default Cart