import React from 'react';
import './OrderItem.css';
import { useDispatch } from 'react-redux';
import GameCover from '../gameCover/GameCover';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { deleteGameActions } from '../../redux/cart/redux';

export default function OrderItem({ game }) {
  const dispatch = useDispatch()
  const clickHandler = () => {
    console.log('CLICK')
    dispatch(deleteGameActions(game))
  }
  return (
    <div className='order-item'>
      <div className='order-item__cover'>
        <GameCover image={game.image}></GameCover>
      </div>
      <div className='order-item__title'>
        <span>{game.title}</span>
      </div>
      <div className='order-item__price'>
        <span>{game.price} руб</span>
        <AiOutlineCloseCircle className='cart-item__delete-icon' size={25} onClick={clickHandler}></AiOutlineCloseCircle>
      </div>
    </div>
  )
}
