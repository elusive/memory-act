import React, { Component } from 'react';
import MemoryGameTable from './MemoryGameTable';
import PropTypes from 'prop-types';

const VIEWABLE_SECONDS = 1;
const GAME_CARD_COUNT = 24;
const GAME_COLUMNS = 4;
const MATCH_COUNT_GOAL = this.GAME_CARD_COUNT / 2;

class MemoryGame extends Component {
    static get propTypes() {
        return {
            gameWon: PropTypes.func,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            flippedCards: [],
            matchCount: 0,
            gameWonDelegate: this.props.gameWon,
        };
    }

    render() {
        return (
            <div className="container">
                <MemoryGameTable
                    ref={this.setGameTableRef}
                    cardCount={GAME_CARD_COUNT}
                    columns={GAME_COLUMNS}
                    cardClick={this.cardClickHandler.bind(this)}
                />
            </div>
        );
    }

    startGame() {
        this.gameTable.resetGameTable();
    }

    cardClickHandler(evt, card) {
        if (this.state.flippedCards.length === 2) {
            return false;
        }

        if (!card.state.isMatched && !card.state.isPicked) {
            card.setPicked(true);
            this.state.flippedCards.push(card);
            this.checkForTwoFlipped();
        }
    }

    checkForTwoFlipped() {
        if (this.state.flippedCards.length === 2) {
            var matchFound = this.checkForTwoMatched();
            if (!matchFound) {
                setTimeout(() => {
                    this.state.flippedCards.forEach((c) => c.setPicked(false));
                    this.clearFlippedCards();
                }, VIEWABLE_SECONDS * 1000);
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
        if (this.state.matchCount === MATCH_COUNT_GOAL) {
            // game is won
            console.log('game is won!');
            this.state.gameWonDelegate();
        }
    }

    clearFlippedCards() {
        this.setState({ flippedCards: [] });
    }

    setGameTableRef(element) {
        this.gameTable = element;
    }
}

export default MemoryGame;
