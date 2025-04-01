import PropTypes from 'prop-types';
import MemoryCard from './MemoryCard'
import { useGameStore } from '../modules/stores/useGameStore';


const MemoryGameTable = (props) => {
    const { cards, isNewGame } = useGameStore();    
    const cardCount = props.cardCount;
    const rowSize = props.rowSize;
    
    const buildTableRows = () => {
        let rows = (cardCount / rowSize)
        let tableRows = [];
        
        for (let r = 0; r < rows; r++) {
            let tableCells = [];
            for (let c = 0; c < rowSize; c++) {
                let card = cards.find(card => card.row == r && card.col == c); 
                tableCells.push(
                    <td className="memory-game-cell" key={card.id}>
                        <MemoryCard
                            cardId={card.id}
                            front={card.front}
                            isMatched={card.isMatched}
                            isSelected={card.isSelected}
                            row={card.row} col={card.col} />
                    </td>
                );
            }

            tableRows.push(<tr key={'row' + r}>{tableCells}</tr>);
        }

        return tableRows;
    }

    return (isNewGame &&
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