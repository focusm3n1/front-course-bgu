import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GameBuy from '../gameBuy/GameBuy';
import GameCover from '../gameCover/GameCover';
import GenreGame from '../genreGame/GenreGame';
import './GameItem.css';
import { setCurrentGame } from '../../redux/cart/redux';

export default function GameItem({ game }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleClass, setToggleClass] = useState(false)
  const addClassHandler = (isGameInCart) => {
    setToggleClass(!isGameInCart)
  }
  const handleClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/app/${game.title}`, { replace: true })
  }
  return (
    <div className={`game-item ${toggleClass ? "active" : null}`} onClick={handleClick}>
      <GameCover image={game.image}></GameCover>
      <div className='game-item__details'>
        <span className='game-item__tite'>{game.title}</span>
        <div className='game-item__genre'>
          {game.genres.map(genre => <GenreGame key={genre} genre={genre}></GenreGame>)}
        </div>
        <div className='game-item__buy'>
          <GameBuy game={game} addClassHandler={addClassHandler}></GameBuy>
        </div>
      </div>
    </div>
  )
}
