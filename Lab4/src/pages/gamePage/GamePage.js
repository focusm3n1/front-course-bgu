import React from 'react';
import './GapePage.css';
import { useSelector } from 'react-redux';
import GenreGame from '../../components/genreGame/GenreGame';
import GameCover from '../../components/gameCover/GameCover';
import GameBuy from '../../components/gameBuy/GameBuy';


export default function GamePage() {
  const game = useSelector(state => state)
  // if (game) return null
  return (
    <div className='game-page'>
      <h1 className='game-page__title'>{game.detailPage[0].title}</h1>
      <div className='game-page__content'>
        <div className='game-page__left'>
          <iframe
          width="90%"
          height="400px"
          src={game.detailPage[0].video}
          title="Youtube video player"
          ></iframe>
        </div>
        <div className='game-page__right'>
          <GameCover image={game.detailPage[0].image}></GameCover>
          <p>{game.detailPage[0].description}</p>
          <p className='secondary-text'>Популярные метки этого продукта:</p>
          {game.detailPage[0].genres.map((genre)=><GenreGame genre={genre} key={genre}></GenreGame>)}
          <div className='game-page__buy-game'>
            <GameBuy game={game.detailPage[0]}></GameBuy>
          </div>
        </div>
      </div>
    </div>
  )
}
