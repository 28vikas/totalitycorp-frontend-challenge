import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, title, price, image,category,rating } = product;

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Rs. {price}</p>
      <p>Rating:{rating.rate}</p>
      <p>Category:{category}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;