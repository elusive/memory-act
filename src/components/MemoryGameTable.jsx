
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../state/GameContext';
import MemoryCard from './MemoryCard'

MemoryGameTable.propTypes = {
    cardCount: PropTypes.number,
    rowSize: PropTypes.number
}

const MemoryGameTable = (props) => {
    const cardCount = props.cardCount;
    const rowSize = props.rowSize;
    const state = useContext(GameContext);

    const buildTableRows = () => {
        let cardNumber = 0;
        let maxCardNumber = Math.min(cardCount / 2);
        let rows = (cardCount / rowSize)
        let tableRows = [];
        for (let r = 0; r < rows; r++) {
            let tableCells = [];
            for (let c = 0; c < rowSize; c++) {
                // check if we need to reset card number or just increment
                cardNumber = (cardNumber < maxCardNumber) ? cardNumber + 1 : 1;

                tableCells.push(
                    <td className="memory-game-cell" key={'cell' + cardNumber}>
                        <MemoryCard
                            front={state.cards[cardNumber].value}
                            isMatched={state.cards[cardNumber].isMatched}
                            isPicked={state.cards[cardNumber].isPicked}
                            row={r} col={c} />
                    </td>
                );
            }

            tableRows.push(<tr key={'row' + cardNumber}>{tableCells}</tr>);
        }

        return tableRows;
    }

    return (
        <table className="memory-game-table">
            <tbody>
                {buildTableRows()}
            </tbody>
        </table>
      );
}


export default MemoryGameTable;
