import Header from './components/Header';
import MemoryGame from './components/MemoryGame';
import GreetingModal from './components/GreetingModal';
import GameWonModal from './components/GameWonModal';
import './App.css';

export default function App() {
    return (
      <>
        <div className="App">
          <Header />
          <MemoryGame />
          <GreetingModal />
          <GameWonModal />
        </div>
      </>
      );
}