
import React, { Component } from 'react';
import MemoryCard from './MemoryCard';


class MemoryGameTable extends Component {
    state = {
        cardCount: 20,
        rowSize: 4,
        cards: [],
     }
    render() {
        let cardNumber = 0;
        let rows = (this.state.cardCount / this.state.rowSize)
        let tableRows = [];
        for (let r = 0; r < rows; r++) {
            let tableCells = [];
            for (let c = 0; c < this.state.rowSize; c++) {
                cardNumber += 1;
                tableCells.push(<td className="memory-game-cell" key={'cell' + cardNumber}><MemoryCard front={cardNumber} /></td>);
            }
            tableRows.push(<tr key={'row' + cardNumber}>{tableCells}</tr>);
        }

        return (
            <table className="memory-game-table">
                <tbody>
                    {tableRows}
                </tbody>
            </table>
          );
    }
}

export default MemoryGameTable;