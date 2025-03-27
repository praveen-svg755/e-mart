import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HoverCart = () => {
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault(); // Prevent default link behavior
    navigate(path, { replace: true }); // Navigate & remove history
  };

  return (
    <div className="hover-login-list">
      <ul>
        <li><Link to="/profile" onClick={(e) => handleClick(e, "/profile")}>My Profile</Link></li>
        <li><Link to="/orders" onClick={(e) => handleClick(e, "/orders")}>Orders</Link></li>
        <li><Link to="/rewards" onClick={(e) => handleClick(e, "/rewards")}>Rewards</Link></li>
        <li><Link to="/giftcard" onClick={(e) => handleClick(e, "/giftcard")}>Gift Cards</Link></li>
        <li><Link to="/wishlist" onClick={(e) => handleClick(e, "/wishlist")}>Wishlist</Link></li>
      </ul>
    </div>
  );
};

export default HoverCart;
