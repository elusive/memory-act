import React, { Component } from 'react';
import MemoryCard from './MemoryCard';

class MemoryGameTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardCount: this.props.cardCount,
            rowSize: this.props.rowSize,
            faceCount: this.props.cardCount / 2,
            flippedCount: 0
        };

        this.cardClickHandler = this.props.cardClick;
    }

    render() {
        let cardNumber = 0;
        let rows = this.state.cardCount / this.state.rowSize;
        let tableRows = [];
        for (let r = 0; r < rows; r++) {
            let rowCells = [];
            for (let c = 0; c < this.state.rowSize; c++) {
                cardNumber += 1;
                rowCells.push(
                    <td className="memory-game-cell" key={'cell' + cardNumber}>
                        <MemoryCard
                            cardClick={this.cardClickHandler}
                            front={
                                cardNumber > this.state.faceCount
                                    ? cardNumber - this.state.faceCount
                                    : cardNumber
                            }
                        />
                    </td>
                );
            }
            tableRows.push(<tr key={'row' + cardNumber}>{rowCells}</tr>);
        }

        return (
            <table className="memory-game-table">
                <tbody>{tableRows}</tbody>
            </table>
        );
    }
}

export default MemoryGameTable;
