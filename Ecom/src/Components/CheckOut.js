 import React from 'react';

const Checkout = ({ cart, total }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <ul>
          {cart.map((item) => (
            
            <div key={item.id}>
              <div>
              <span className = "shoping-img"><img  src ={item.image}/></span>
              </div>
              {item.title}: Rs.{item.price} x {item.quantity}<hr/>
            </div>
            
          ))}
        </ul>
        <p>Total: Rs.{total}</p>
      </div>
      <div className="shipping-form">
        {/* Shipping information form */}
      </div>
      <div className="payment-form">
        {/* Payment information form */}
      </div>
      <button>Place Order</button>
    </div>
  );
};

export default Checkout;