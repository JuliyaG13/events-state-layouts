import React from 'react';
import ShopCard from '../ShopCard/ShopCard';
import './CardsView.css';

const CardsView = ({ cards }) => (
  <div className="cards-view">
    {cards.map((card, index) => (
      <ShopCard key={index} product={card} />
    ))}
  </div>
);

export default CardsView;