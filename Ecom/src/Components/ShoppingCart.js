import React from 'react';

const ShoppingCart = ({ cart, removeFromCart,plusAddCart, minusAddCart  }) => {
  console.log(cart, cart.quantity)
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className ="shoping-cart-box">
          <span className = "shoping-img"><img  src ={item.image}/></span>
         
          <h2>{item.title}</h2>
          <span>Rs.{item.price}</span>
          <div>
            <button onClick={() => minusAddCart(item.id)} disabled={item.quantity > 1?false:true}>-</button>
            <input value={item.quantity}/>
            <button onClick={() => plusAddCart(item.id)}>+</button>
          </div>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;