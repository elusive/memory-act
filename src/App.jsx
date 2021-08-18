import React from 'react';
import Header from './components/Header';
import GreetingModal from './components/GreetingModal';
import MemoryGame from './components/MemoryGame';

import { GameContextProvider } from './state/GameContext';

import './App.css';


function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <Header />
        <MemoryGame />
      <GreetingModal />
      </div>
    </GameContextProvider>
  );
}

export default App;
