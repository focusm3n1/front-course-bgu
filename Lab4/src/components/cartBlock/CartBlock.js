import React, { useState } from 'react';
import './CartBlock.css';
import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import CartMenu from '../cartMenu/CartMenu';
import ItemsInCart from '../itemsInCart/ItemsInCart';
import { useNavigate } from 'react-router-dom';
import {calcTotalPrice} from '../../utils/utils';
//корзина
export default function CartBlock() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  //забираем массив из store
  const gamesInStore = useSelector(state => state)
  const totalPrice = calcTotalPrice(gamesInStore.addCart)
  const navigate = useNavigate()
  const handleClick = () => {
    setIsCartMenuVisible(false)
    navigate('/order', { replace: true })

  }
  return (
    <div className='cart-block'>
      <ItemsInCart quantity={gamesInStore.addCart.length}></ItemsInCart>
      <BiCartAlt className='cart-icon' size={25} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}></BiCartAlt>
      <span className='total-price'>{totalPrice} руб</span>
      {isCartMenuVisible && <CartMenu totalPrice={totalPrice} items={gamesInStore.addCart} onClick={handleClick}></CartMenu>}
    </div>
  )
}
