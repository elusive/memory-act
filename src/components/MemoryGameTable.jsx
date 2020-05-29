import React from 'react';
import MemoryCard from './MemoryCard';
import PropTypes from 'prop-types';

class MemoryGameTable extends React.Component {
    static get propTypes() {
        return {
            cardCount: PropTypes.number,
            columns: PropTypes.number,
            cardClick: PropTypes.func,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            cardCount: this.props.cardCount,
            columns: this.props.columns,
            rows: this.props.cardCount / this.props.columns,
            faceCount: this.props.cardCount / 2,
            flippedCount: 0,
        };

        this.cardClickHandler = this.props.cardClick;
        this.resetGameTable = this.resetGameTable.bind(this);

        this.CARDS = this.buildShuffledDeck();
    }

    render() {
        let cardNumber = 0;
        let tableRows = [];
        for (let r = 0; r < this.state.rows; r++) {
            let rowCells = [];
            for (let c = 0; c < this.state.columns; c++) {
                cardNumber += 1;
                rowCells.push(
                    <td className="memory-game-cell" key={'cell' + cardNumber}>
                        <MemoryCard
                            cardClick={this.cardClickHandler}
                            front={this.CARDS[cardNumber - 1]}
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

    resetGameTable() {
        this.CARDS = this.buildShuffledDeck();
        //this.render();
    }

    buildShuffledDeck() {
        // build cards array (2 sets of same)
        let cards = [...Array(this.state.faceCount).keys()];
        cards = cards.concat(cards);

        /*
         * SHUFFLE cards array by looping through
         * the array and for each card, swapping
         * it with another randomly selected card
         * from elsewhere in the array.
         */
        let len = cards.length;
        while (len > 0) {
            let index = Math.floor(Math.random() * len);
            len--;
            let temp = cards[len];
            cards[len] = cards[index];
            cards[index] = temp;
        }

        return cards;
    }
}

export default MemoryGameTable;
