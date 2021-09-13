
import React, { useContext, useEffect } from 'react';
import { GameContext } from '../state/GameContext';
import MemoryGameTable from './MemoryGameTable';


const MemoryGame = (props) => {

    const VIEWABLE_SECONDS = 2;

    const state = useContext(GameContext);

    useEffect(() => {
        /*
          * Todo when card selected:
          *     - check for 2 cards selected max
          *     - if 2 cards selected check for match
          *     - if match change state of cards to matched
          *     - check for all matches completed
          *     - check for win and need to show dialog
          */

        
        var matchFound = this.checkForTwoMatched();
        if (!matchFound) {
            setTimeout(() => {
                this.state.flippedCards.forEach((c) => c.setPicked(false));
            }, VIEWABLE_SECONDS * 1000);
        }
    
        function startGame() {
            this.gameTable.resetGameTable();
        }


        function checkForTwoMatched() {
            let flipped = state.cards.filter(c => c.isPicked);
            if (flipped.length !== 2) {
                return false;
            }

            var matched = (flipped[0].front === flipped[1].front);
            if (!matched) {
                return false;
            }

            state.addMatch(...flipped);
            
            // all matched?
            if (state.cards.every(c => c.isMatched)) {
                console.log('game is won!');
                this.state.gameWonDelegate();
            }

            return true;
        }
    })

    return (
        <div className="container">
            <MemoryGameTable cardCount="20" rowSize="4" />
        </div>
     );
}


export default MemoryGame;

