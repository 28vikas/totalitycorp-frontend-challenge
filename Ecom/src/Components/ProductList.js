import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');

  const filteredProducts = products.filter((product) => {
    const categoryFilter = selectedCategory === 'All' || product.category === selectedCategory;
    const priceFilter =
      selectedPriceRange === 'All' ||
      (product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max);
    const ratingFilter =
      selectedRating === 'All' || product.rating.rate >= parseInt(selectedRating);

    return categoryFilter && priceFilter && ratingFilter;
  });

  //categories and price ranges
  const categories = ['All', "men's clothing","jewelery","electronics","women's clothing"];
  const priceRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Rs.0 - Rs.1000', min: 0, max: 1000 },
    { label: 'Rs.1000 - Rs.3000', min: 1000, max: 3000 },
  ];
  
  const ratings = ['All', '1', '2', '3', '4', '5'];

  return (
    <div className='flex'>
      <div className="filters">
        <h2>Filters</h2>
        <div className='filter-flex'>
        <label>Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label>Price Range:</label>
        <select
          value={selectedPriceRange}
          onChange={(e) => {
            const selectedRange = priceRanges.find(range => range.label === e.target.value);
            setSelectedPriceRange(selectedRange);
          }}
        >
          {priceRanges.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>
        <label>Rating:</label>
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
        </div>
      </div>
      
    <div className="product-list">
    
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;