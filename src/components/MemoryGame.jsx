import React, { Component } from 'react';
import MemoryGameTable from './MemoryGameTable';

class MemoryGame extends Component {

    PICK_LIMIT = 2;
    VIEWABLE_SECONDS = 1;
    GAME_CARD_COUNT = 24;
    GAME_ROW_SIZE = 4;
    MATCH_COUNT_GOAL = this.GAME_CARD_COUNT / 2;

    constructor(props) {
        super(props);

        this.state = {
            flippedCards: [],
            matchCount: 0
        };
    }

    cardClickHandler = (evt, card, cardUuid) => {
        if (card.state.isPicked) {
            this.state.flippedCards.push(card);
        }

        console.log("flippedCards count: " + this.state.flippedCards.length);

        this.checkForTwoFlipped();
    };

    checkForTwoFlipped() {
        if (this.state.flippedCards.filter(c => c.state.isPicked).length === 2) {
            var matchFound = this.checkForTwoMatched();
            if (!matchFound) {
                setTimeout(() => {
                    this.state.flippedCards.forEach(c => c.togglePicked());
                    this.clearFlippedCards();
                }, this.VIEWABLE_SECONDS * 1000);
            }
        }
    }

    checkForTwoMatched() {
        let flipped1 = this.state.flippedCards[0];
        let flipped2 = this.state.flippedCards[1];

        var matched = flipped1.props.front === flipped2.props.front && flipped1.state.uuid !== flipped2.state.uuid;

        if (!matched) {
            return false;
        }

        flipped1.setMatched();
        flipped2.setMatched();
        this.clearFlippedCards();
        this.setState(
            { matchCount: this.state.matchCount + 1 },
            this.checkForAllMatched);

        return true;
    }

    clearFlippedCards() {
        this.setState({ flippedCards : [] });
    }

    checkForAllMatched() {
        if (this.state.matchCount === this.MATCH_COUNT_GOAL) {
            // game is won
            console.log("game is won!");
        }
    }

    render() {
        return (
            <div className="container">
                <MemoryGameTable
                    cardCount={this.GAME_CARD_COUNT}
                    rowSize={this.GAME_ROW_SIZE}
                    cardClick={this.cardClickHandler} />
            </div>
        );
    }
}

export default MemoryGame;
