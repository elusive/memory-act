import { useEffect } from 'react';
import { useGameStore } from '../modules/stores/useGameStore';
import MemoryGameTable from './MemoryGameTable';
import GameWonModal from './MemoryGame';
import * as model from '../modules/model.mjs'; 

export default function MemoryGame() {
    const{ 
        isGameWon, 
        setIsGameWon, 
        isNewGame,
        cards, 
        addMatch,
        toggleSelected 
     } = useGameStore();

    useEffect(() => {
        (async function() {
            const selected = cards.filter(c => c.isSelected && !c.isMatched);
            if (selected.length % 2 === 0) {
                checkForTwoMatched()
                    .then(matchFound => {
                        if (!matchFound) {
                            setTimeout(() => {
                                selected.forEach(async c => await toggleSelected(c.id));
                            }, model.VIEWABLE_SECONDS * 1000);
                        }
                    });
            }
        })();
    });

     

    function checkForTwoMatched() {
        
        return new Promise((resolve) => {
            // get the selected cards
            const selected = cards.filter(c => c.isSelected && !c.isMatched);

            // need 2 selected to compare 
            if (selected.length !== 2) {
                resolve(false);
                return;
            }

            // check front values match for the selected
            var matched = (selected[0].front === selected[1].front);
            if (!matched) {
                resolve(false);
                return;
            }

            // update state with match
            addMatch(...selected);
                
            // all matched? then game won
            if (cards.every(c => c.isMatched)) {
                console.log('game is won!');
                setTimeout(() => {
                    setIsGameWon(true); // show the game won modal
                }, 2000);
            }     

            resolve(true);
        });
    }
//    })

    return (
        <div className="container">
            <MemoryGameTable 
                cardCount={model.CARD_COUNT} 
                rowSize={model.ROW_SIZE} 
                isNewGame={isNewGame} />
            { isGameWon && <GameWonModal /> }
        </div>
     );
}

