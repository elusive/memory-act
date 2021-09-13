
import React, { useContext } from 'react';
import { GameContext } from '../state/GameContext';
import MemoryCard from './MemoryCard'

const MemoryGameTable = (props) => {
    const cardCount = props.cardCount;
    const rowSize = props.rowSize;
    const cards = useContext(GameContext);

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
                            front={cards[cardNumber].value}
                            isMatched={cards[cardNumber].isMatched}
                            isPicked={cards[cardNumber].isPicked}
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
