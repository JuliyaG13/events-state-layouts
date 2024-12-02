import React from 'react';
import ShopItem from '../ShopItem/ShopItem';
import './ListView.css';

const ListView = ({ items }) => (
  <ul className="list-view">
    {items.map((item, index) => (
      <ShopItem key={index} product={item} />
    ))}
  </ul>
);

export default ListView;