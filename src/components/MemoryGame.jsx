
import React, { useContext } from 'react';
import { GameContext } from '../state/GameContext';
import MemoryGameTable from './MemoryGameTable';


const MemoryGame = () => {

    const VIEWABLE_SECONDS = 2;
    const ROW_SIZE = 4;
    const CARD_COUNT = 20;



    const state = useContext(GameContext);

    //    useEffect(() => {
        /*
          * Todo when card selected:
          *     - check for 2 cards selected max
          *     - if 2 cards selected check for match
          *     - if match change state of cards to matched
          *     - check for all matches completed
          *     - check for win and need to show dialog
          */

        state.cardClickHandler = (card) => {
            // if none selected yet toggle selected only
            if (this.state.selected.length === 1) {
                state.toggleSelected(card.id);
                return;
            }

            // else if already one selected check for match
            if (this.state.selected.length === 1) {
                state.toggleSelected(card.id);
            }
         
            var matchFound = checkForTwoMatched();
            if (!matchFound) {
                setTimeout(() => {
                    this.state.flippedCards.forEach((c) => c.setPicked(false));
                }, VIEWABLE_SECONDS * 1000);
            }
        }

        function checkForTwoMatched() {
            // need 2 selected to compare 
            if (state.selected.length !== 2) {
                return false;
            }

            // check front values match for the selected
            var matched = (state.selected[0].front === state.selected[1].front);
            if (!matched) {
                return false;
            }

            // use reducer to update state with match
            state.addMatch(...state.selected);
            
            // all matched? then game won
            if (state.cards.every(c => c.isMatched)) {
                console.log('game is won!');
                this.state.gameWonDelegate();
            }

            return true;
        }
//    })

    return (
        <div className="container">
            <MemoryGameTable cardCount={CARD_COUNT} rowSize={ROW_SIZE} isNewGame={state.isNewGame} />
        </div>
     );
}


export default MemoryGame;

