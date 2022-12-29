
import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../state/GameContext';
import MemoryGameTable from './MemoryGameTable';
import GameWonModal from './MemoryGame';
import { ROW_SIZE, CARD_COUNT } from '../state/Deck.js';


const MemoryGame = () => {

    const VIEWABLE_SECONDS = 2;
    const state = useContext(GameContext);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        (async function() {
        if (state.selected.length === 2) {
            checkForTwoMatched()
                .then(matchFound => {
                    if (!matchFound) {
                        setTimeout(() => {
                            state.selected.forEach(async c => await state.toggleSelected(c.id));
                        }, VIEWABLE_SECONDS * 1000);
                    }
                });
        }})();
    });

     /*
      * Todo when card selected:
      *     - check for 2 cards selected max
      *     - if 2 cards selected check for match
      *     - if match change state of cards to matched
      *     - check for all matches completed
      *     - check for win and need to show dialog
      */
    state.cardClickHandler = async (cardid) => {
        // first finish toggle of selected for this card id
        await state.toggleSelected(cardid);

        // else if only one selected return
        if (state.selected.length === 1) {
            return; 
        }
     
        
    }

    function checkForTwoMatched() {
        
        return new Promise(async (resolve) => {
       
            // need 2 selected to compare 
            if (state.selected.length !== 2) {
                resolve(false);
                return;
            }

            // check front values match for the selected
            var matched = (state.selected[0].front === state.selected[1].front);
            if (!matched) {
                resolve(false);
                return;
            }

            // use reducer to update state with match
            await state.addMatch(...state.selected);
            
            // all matched? then game won
            if (state.cards.every(c => c.isMatched)) {
                console.log('game is won!');
                setGameWon(true);
            }

            resolve(true);
        });
    }
//    })

    return (
        <div className="container">
            <MemoryGameTable cardCount={CARD_COUNT} rowSize={ROW_SIZE} isNewGame={state.isNewGame} />
            { gameWon && <GameWonModal /> }
        </div>
     );
}


export default MemoryGame;

