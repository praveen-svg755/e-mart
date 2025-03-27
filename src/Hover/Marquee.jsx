import React from "react"
import './Marquee.css'
const Marquee = () => {
  return (
    <div className="bg-black text-gray-400 py-3 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        🎉 Limited Time Offer: 50% OFF on All Products! | 🚀 Free Shipping on Orders Above $99! | 🔥 New Arrivals: Check Out Our Latest Collection! | 🎁 Buy 1 Get 1 Free on Selected Items! | 💳 Easy EMI Options Available! | 🛒 Grab Your Favorite Deals Before They Expire! | ⭐ 24/7 Customer Support for Your Queries!
      </div>
    </div>
  );
};

export default Marquee; 
