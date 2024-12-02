import React from 'react';
import './ShopCard.css';

const ShopCard = ({ product }) => (
  <div className="shop-card">
    <img src={product.img} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <p>Color: {product.color}</p>
  </div>
);

export default ShopCard;