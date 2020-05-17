import React, { Component } from 'react';
import MemoryGameTable from './MemoryGameTable';

class MemoryGame extends Component {

    VIEWABLE_SECONDS = 1;
    GAME_CARD_COUNT = 24;
    GAME_COLUMS = 4;
    MATCH_COUNT_GOAL = this.GAME_CARD_COUNT / 2;

    constructor(props) {
        super(props);

        this.state = {
            flippedCards: [],
            matchCount: 0,
            gameWonDelegate: this.props.gameWon
        };
    }

    render() {
        return (
            <div className="container">
                <MemoryGameTable
                    ref="gameTable"
                    cardCount={this.GAME_CARD_COUNT}
                    columns={this.GAME_COLUMS}
                    cardClick={this.cardClickHandler.bind(this)} />
            </div>
        );
    }

    startGame = () => {
        this.refs.gameTable.resetGameTable();
    }

    cardClickHandler = (evt, card) => {
        if (this.state.flippedCards.length === 2) {
            return false;
        }

        if (!card.state.isMatched && !card.state.isPicked) {
            card.setPicked(true);
            this.state.flippedCards.push(card);
            this.checkForTwoFlipped();
        }        
    };

    checkForTwoFlipped() {
        if (this.state.flippedCards.length === 2) {
            var matchFound = this.checkForTwoMatched();
            if (!matchFound) {
                setTimeout(() => {
                    this.state.flippedCards.forEach(c => c.setPicked(false));
                    this.clearFlippedCards();
                }, this.VIEWABLE_SECONDS * 1000);
            }
        }
    }

    checkForTwoMatched() {
        let flipped1 = this.state.flippedCards[0];
        let flipped2 = this.state.flippedCards[1];

        var matched = flipped1.state.front === flipped2.state.front;

        if (!matched) {
            return false;
        }

        flipped1.setMatched();
        flipped2.setMatched();
        this.clearFlippedCards();
        this.setState(
            { matchCount: this.state.matchCount + 1 },
            this.checkForAllMatched
        );

        return true;
    }

    checkForAllMatched() {
        if (this.state.matchCount === this.MATCH_COUNT_GOAL) {
            // game is won
            console.log("game is won!");
            this.state.gameWonDelegate();
        }
    }

    clearFlippedCards() {
        this.setState({ flippedCards : [] });
    }
}

export default MemoryGame;
