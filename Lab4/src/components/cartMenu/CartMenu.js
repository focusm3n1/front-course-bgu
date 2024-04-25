import React from 'react';
import Button from '../button/Button';
import './CartMenu.css';
import CartItem from '../cartItem/CartItem';

export default function CartMenu({ items, onClick, totalPrice }) {
  return (
    <div className='cart-menu'>
      <div className='cart-menu__games-list'>
        {items.length > 0 ? items.map(game => <CartItem key={game.title} price={game.price} title={game.title} id={game.id}></CartItem>) : 'Корзина пуста'}
      </div>
      {items.length > 0 ?
        <div className='cart-menu__arrange'>
          <div className='cart-menu__total-price'>
            <span>Итого:</span>
            <span>{totalPrice} руб</span>
          </div>
          <Button type='primary' size='m' onClick={onClick}>
            Оформить заказ
          </Button>
        </div> : null
      }
    </div>
  )
}
