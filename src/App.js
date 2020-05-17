import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import GreetingModal from './components/GreetingModal';
import MemoryGame from './components/MemoryGame';
import GameWonModal from './components/GameWonModal';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        winMinutes: 0,
        winSeconds: 0
      }
    }

  startGame() {
    this.refs.gameReference.startGame();
  }

  render() {
    return (
      <div className="App">
        <Header ref="headerReference" />
        <MemoryGame ref="gameReference" 
            gameWon={this.gameIsWon.bind(this)} />
        <GreetingModal start={this.startGame.bind(this)} />
        <GameWonModal ref="wonReference"
            newGame={this.startGame.bind(this)}
            minutes={this.state.winMinutes}
            seconds={this.state.winSeconds} />
      </div>
    );
  }

  gameIsWon() {
      let minutes = this.refs.headerReference.minutes;
      let seconds = this.refs.headerReference.seconds;
      this.setState({
        winMinutes: minutes,
        winSeconds: seconds
      });
      this.refs.wonReference.show();
  }
}

export default App;
