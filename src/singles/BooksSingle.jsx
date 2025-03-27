import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { booksData } from '../stores/data/books'
import Navbar from '../stores/components/Navbar'
import FormSubmit from '../FormSubmit/FormSubmit'
import { useCart } from '../stores/context/CartContext'





const BooksSingle = () => {
     const {id} = useParams()


     const {addToCart , CartItems} = useCart()
     const [showForm , setShowForm] = useState(false)
    
        const product = booksData.find((item)=>item.id === Number(id))
        if (!product) {
            return <h2>Product not found</h2>;
        }
        console.log("Product Image Path:", product.image);
        
  return (
    <>  
       <Navbar/>
         <div className="index-page">
           <div className="index-image">
               <img src={product.image} className='product-image' alt="" />

            </div>
            <div className="index-image-matter">
                <h4>Title: {product.title}</h4>
                <h4>Author: {product.author}</h4>
                <h3>Price: {product.price}</h3>
                <p>Details: {product.description}</p>
                <div className="cart">
                <button className='cart-btn' onClick={()=>addToCart(product)}>Add to Cart</button>
                <button className='buy-btn' onClick={()=>setShowForm(true)}>Buy Now</button>
                </div>
            </div>
            
        </div>
        <div className="show-Form">
                {showForm && <FormSubmit productData={product}/>}
            </div>
    </>
  )
}

export default BooksSingle