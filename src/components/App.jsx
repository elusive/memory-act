import { React } from 'react';
import Header from './Header';
import GreetingModal from './GreetingModal';
import MemoryGame from './MemoryGame';

import { GameContextProvider } from '../state/GameContext';

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
