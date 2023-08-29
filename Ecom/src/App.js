import React, { useState } from 'react';
import Checkout from './Components/CheckOut';
import products from './data/products';
import './App.css';
import ProductList from './Components/ProductList';
import ShoppingCart from "./Components/ShoppingCart"
import Header from './Components/Header';

const App = () => {
  const [cart, setCart] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [itemCount, setItemCount]  = useState(0)

  // const addToCart = (productId) => {
  //   const productToAdd = products.find((product) => product.id === productId);
  //   setCart([...cart, productToAdd]);
  // };
  const addToCart = (productId) => {
    const existingCartItem = cart.find((item) => item.id === productId);
  
    if (existingCartItem) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setItemCount(itemCount+1)
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it as a new item
      const productToAdd = products.find((product) => product.id === productId);
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
      setItemCount(itemCount+1)
    }
  };

  const plusAddCart = (productId) => {
    addToCart(productId)
  }

  const minusAddCart = (productId) => {
    const existingCartItem = cart.find((item) => item.id === productId);
  
    if (existingCartItem) {
      // If the product is already in the cart, update its quantity
       
      const updatedCart = cart.map((item) =>

    
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        
      
      );
      console.log("...", updatedCart)
      setCart(updatedCart);
      setItemCount(itemCount-1)
    } 
  }


  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    const updatedQuantity = cart.filter((item) => item.id === productId);
    console.log("...", updatedQuantity, itemCount)

    
    setItemCount(itemCount-updatedQuantity[0].quantity)

  };

  const cartTotal = cart.reduce((total, item) => total + (item.price*item.quantity), 0);

  return (
    <div className='main-conatiner'>
      <Header setCheckoutStep = {setCheckoutStep} checkoutStep = {checkoutStep}  itemCount = {itemCount} />
    <div className="app">
      {checkoutStep === 1 ? (
        <ProductList products={products} addToCart={addToCart}/>
      ) : checkoutStep === 2 ? (
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} minusAddCart = {minusAddCart} plusAddCart={plusAddCart}/>
      ) : (
        <Checkout cart={cart} total={cartTotal} />
      )}
      <div className="checkout-navigation">
        {checkoutStep > 1 && <button onClick={() => setCheckoutStep(checkoutStep - 1)}>Back</button>}
        {checkoutStep === 2 && <button onClick={() => setCheckoutStep(checkoutStep + 1)}>Checkout</button>}
      </div>
    </div>
    </div>
  );
};

export default App;