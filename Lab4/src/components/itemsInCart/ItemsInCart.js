import React from 'react';
import './ItemsInCart.css';

export default function ItemsInCart({ quantity = 0 }) {
  return (
    <div className='items-in-cart'>{quantity}</div>
  )
}
