
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import GamePage from './pages/gamePage/GamePage';
import Header from './components/header/Header';
import OrderPage from './pages/orderPage/OrderPage';


function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/app/:title' element={<GamePage></GamePage>}></Route>
        <Route path='/order' element={<OrderPage></OrderPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
