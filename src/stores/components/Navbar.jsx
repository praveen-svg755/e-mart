









import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import HoverCart from '../../Hover/HoverCart';
import { useState } from 'react';
import Cart from '../../Hover/Cart';

const Navbar = () => {

  const [showList, setShowList] = useState(false);
  const [showCart , setShowCart] = useState(false);

  function handleMouseOver() {
    setShowList(true);
  }
  function handleMouseOut() {
    setShowList(false);
  }
  function handleMouseOverShowCart() {
    setShowCart(true);
  }
  function handleMouseOutShowCart() {
    setShowCart(false);
  }

  const {cartItems} = useCart()
  return (
    <>

      <div className="nav-section">
           <div className="title">
               <h2>Infinity Buy</h2>
           </div>
           <div className="search">
               <input type="text" placeholder='Search for Products and Brands and More' />
           </div>
           <div 
        className="hover-container" 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
      >
        {showList && <HoverCart />}
        <div className="user">
          
          <Link to='/login'><div className="user-details">Login</div></Link>
        </div>
      </div>
           <Link to='/cart'>
           <div className="nav-cart"
             onMouseOver={handleMouseOverShowCart} 
             onMouseOut={handleMouseOutShowCart}
           >
            {showCart && <Cart/>}
              cart
              <span>
                {cartItems.length}
              </span>
            </div>
            </Link>
            <div className="seller">
               20 Min Delivery
            </div>
      </div>
      <nav className="sub-menu">
      <ul>
        <li><NavLink to="/ac" activeClassName="active">AC</NavLink></li>
        <li><NavLink to="/books" activeClassName="active">BOOKS</NavLink></li>
        <li><NavLink to="/computer" activeClassName="active">COMPUTERS</NavLink></li>
        <li><NavLink to="/fridge" activeClassName="active">FRIDGE</NavLink></li>
        <li><NavLink to="/furniture" activeClassName="active">FURNITURE</NavLink></li>
        <li><NavLink to="/kitchen" activeClassName="active">KITCHEN</NavLink></li>
        <li><NavLink to="/men" activeClassName="active">MEN</NavLink></li>
        <li><NavLink to="/mobile" activeClassName="active">MOBILE</NavLink></li>
        <li><NavLink to="/speaker" activeClassName="active">SPEAKER</NavLink></li>
        <li><NavLink to="/tv" activeClassName="active">TV</NavLink></li>
        <li><NavLink to="/watch" activeClassName="active">WATCHES</NavLink></li>
        <li><NavLink to="/women" activeClassName="active">WOMEN</NavLink></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar