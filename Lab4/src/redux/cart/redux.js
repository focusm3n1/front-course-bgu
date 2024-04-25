
import { combineReducers, createStore } from 'redux';
// import { GAMES } from '../../pages/homePage/HomePage';

const initialState = [];

const toggleGameReducer = (state = initialState, action) => {
  if (action.type === "ADD_GAME") {
    //проверка на уже добавленную игру
    if (!state.includes(action.game)) {
      return [...state, action.game]
    }
  }
  if (action.type === "DELETE_GAME") {
    return state.filter(item => item !== action.game)
  }
  return state
}

const reducerGames = (state = initialState, action) => {
  if (action.type === 'SET_CURRENT_GAME') {
    //возвращаем игру по которой кликнули, без старого значения state
    return [action.game]
  }
  return state;
}
const rootReducer = combineReducers({
  addCart: toggleGameReducer,
  detailPage: reducerGames
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const addGameActions = (game) => ({
  type: 'ADD_GAME',
  game
})
export const deleteGameActions = (game) => ({
  type: 'DELETE_GAME',
  game
})
export const setCurrentGame = (game) => ({
  type: 'SET_CURRENT_GAME',
  game
})
