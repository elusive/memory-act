import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import GreetingModal from './GreetingModal';
import MemoryGame from './MemoryGame';
import GameWonModal from './GameWonModal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winMinutes: 0,
            winSeconds: 0,
        };
    }

    startGame() {
        this.game.startGame();
    }

    render() {
        return (
            <div className="App">
                <Header ref={this.setHeaderRef} />
                <MemoryGame
                    ref={this.setGameRef}
                    gameWon={this.gameIsWon.bind(this)}
                />
                <GreetingModal start={this.startGame.bind(this)} />
                <GameWonModal
                    ref={this.setWonDialogRef}
                    newGame={this.startGame.bind(this)}
                    minutes={this.state.winMinutes}
                    seconds={this.state.winSeconds}
                />
            </div>
        );
    }

    gameIsWon() {
        let minutes = this.header.minutes;
        let seconds = this.header.seconds;
        this.setState({
            winMinutes: minutes,
            winSeconds: seconds,
        });
        this.wonDialog.show();
    }

    setHeaderRef(element) {
        this.header = element;
    }

    setGameRef(element) {
        this.game = element;
    }

    setWonDialogRef(element) {
        this.wonDialog = element;
    }
}

export default App;
