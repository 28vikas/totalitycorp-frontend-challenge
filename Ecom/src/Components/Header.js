import React from "react";

const Header = ({setCheckoutStep, checkoutStep, itemCount}) => {
  console.log(itemCount)
  return (
    <div className="header">
        <div>
        <h1> E-commerce Website</h1>

        </div>
        
        <div>
            <p onClick={() => setCheckoutStep(checkoutStep + 1)}>{itemCount>0 && `${itemCount} Items` }<i  className="fa-solid fa-cart-shopping"></i></p>
        </div>
    </div>
  );
};

export default Header;
