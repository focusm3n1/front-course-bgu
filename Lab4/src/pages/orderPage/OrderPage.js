import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/orderItem/OrderItem';
import './OrderPage.css';
import { calcTotalPrice } from '../../utils/utils';

export default function OrderPage() {
  const items = useSelector(state => state)
  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>
  }
  return (
    <div className='order-page'>
      <div className='order-page__left'>
        {items.addCart.map(game => <OrderItem key={game.title} game={game}></OrderItem>)}
      </div>
      <div className='order-page__right'>
        <div className='order-page__total-price'>
          <span style={{ display: 'block' }}>
            Колличество в корзине: {items.addCart.length}
          </span>
          <span>
            Общая цена: {calcTotalPrice(items.addCart)}
          </span>
        </div>
      </div>
    </div>
  )
}
