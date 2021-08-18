"use strict";

import React, { useEffect } from 'react';
import MemoryGameTable from './MemoryGameTable';
import MemoryCard from './MemoryCard';
import { GameContext } from '../state/GameContext';


export default MemoryGame = (props) => {
    return (
        <div className="container">
            <MemoryGameTable cardCount="20" rowSize="4" />
        </div>
     );
}



function startGame() {
    this.gameTable.resetGameTable();
}

function cardClickHandler(evt, card) {
    if (this.state.flippedCards.length === 2) {
        return false;
    }

    if (!card.state.isMatched && !card.state.isPicked) {
        card.setPicked(true);
        this.state.flippedCards.push(card);
        this.checkForTwoFlipped();
    }
}

function checkForTwoFlipped() {
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

function checkForTwoMatched() {
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

function checkForAllMatched() {
    if (this.state.matchCount === MATCH_COUNT_GOAL) {
        // game is won
        console.log('game is won!');
        this.state.gameWonDelegate();
    }
}

function clearFlippedCards() {
    this.setState({ flippedCards: [] });
}
