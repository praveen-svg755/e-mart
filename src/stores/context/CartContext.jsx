
import { createContext, useContext, useState } from "react"




const CartContext  = createContext()

 export const CartProvider = ({children})=>{
    const [ cartItems , setCartItems] = useState([])
    
    const addToCart=(item)=>{
          setCartItems([...cartItems,item])
    }

    const removeFromCart = (image) => {
        setCartItems(cartItems.filter((item) => item.image !== image));
    };
    
    
   return (
    <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
   )
}

export const useCart =()=>{
    return useContext(CartContext)
}