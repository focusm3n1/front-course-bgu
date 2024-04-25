import React from 'react';
import Button from '../button/Button';
import './GameBuy.css';

import { useDispatch, useSelector } from 'react-redux';
import { addGameActions } from '../../redux/cart/redux';
import { deleteGameActions } from '../../redux/cart/redux';

export default function GameBuy({ game,addClassHandler }) {
  const dispatch = useDispatch()
  const gameInCart = useSelector(state => state)
  const isGameInCart = gameInCart.addCart.some(item => item.id === game.id)
  const clickHandler = (e) => {
    e.stopPropagation();
    if (isGameInCart) {
      dispatch(deleteGameActions(game))
    } else {
      dispatch(addGameActions(game))
    }
    addClassHandler(isGameInCart)
  }
  return (
    <div className='game-buy'>
      <span className='game-buy__price'>{game.price} руб.</span>
      <Button onClick={clickHandler}
        type={isGameInCart ? "secondary" : 'primary'}
      >
        В корзину
      </Button>
    </div>
  )
}
