import React from 'react';
//import { render } from 'react-dom';
/* import icon images */
import './App.css';
import Header from './components/Header';
import GreetingModal from './components/GreetingModal';
import MemoryGame from './components/MemoryGame';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <MemoryGame />
	  <GreetingModal />

      <Modal />
    </div>
  );
}

export default App;
