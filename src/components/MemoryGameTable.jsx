import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../state/GameContext';
import MemoryCard from './MemoryCard'


const MemoryGameTable = (props) => {
    
    const cardCount = props.cardCount;
    const rowSize = props.rowSize;
    const state = useContext(GameContext);
    const [isVisible, setIsVisible] = useState(props.isNewGame);
    const displayStyle = {
        display: isVisible ? 'flex' : 'none',
    };
    
    const buildTableRows = () => {
        let cardNumber = 0;
        let maxCardNumber = Math.min(cardCount / 2);
        let rows = (cardCount / rowSize)
        let tableRows = [];
        for (let r = 0; r < rows; r++) {
            let tableCells = [];
            for (let c = 0; c < rowSize; c++) {
                let card = state.cards.find(card => card.row == r && card.col == c); 
                tableCells.push(
                    <td className="memory-game-cell" key={card.id}>
                        <MemoryCard
                            cardId={card.id}
                            front={card.front}
                            isMatched={card.isMatched}
                            isSelected={card.isSelected}
                            cardClickHandler={state.cardClickHandler}
                            row={card.row} col={card.col} />
                    </td>
                );
            }

            tableRows.push(<tr key={'row' + r}>{tableCells}</tr>);
        }

        return tableRows;
    }


    return (state.isNewGame &&
        <table className="memory-game-table" >
            <tbody>
                {buildTableRows()}
            </tbody>
        </table>
      );
}

MemoryGameTable.propTypes = {
    cardCount: PropTypes.number,
    rowSize: PropTypes.number
}

export default MemoryGameTable;
