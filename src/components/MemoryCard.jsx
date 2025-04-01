import PropTypes from 'prop-types';
import { useGameStore } from '../modules/stores/useGameStore';

const CARD_BACK = 'JG';

const MemoryCard = (props) => {
    const cardid = props.cardId;

    const { cards, toggleSelected } = useGameStore();

    const DefaultStyle = ['inside'];
    const SelectedStyle = ['inside picked'];
    const MatchedStyle = ['inside matched'];

    const handleCardClick = async (event) => {
        console.log('event info', event);    
        const selected = cards.filter(c => c.isSelected && !c.isMatched);
        if (selected.length <= 1) {
            await toggleSelected(cardid);
        }
    }

    return (
        <div className="card" onClick={handleCardClick} data-row="0" data-col="1" data-id={props.cardId}>
            <div className={props.isMatched ? MatchedStyle : props.isSelected ? SelectedStyle : DefaultStyle}>

                <div className="front">
                    <div>{props.front}</div>
                </div>

                <div className="back">
                    <div>{CARD_BACK}</div>
                </div>
            </div>
        </div>); 

}

/*
 * Todo when card selected:
 *     - check for 2 cards selected max
 *     - if 2 cards selected check for match
 *     - if match change state of cards to matched
 *     - check for all matches completed
 *     - check for win and need to show dialog
*/


MemoryCard.propTypes = {
    front: PropTypes.number,
    isMatched: PropTypes.bool,
    isSelected: PropTypes.bool,
    row: PropTypes.number,
    col: PropTypes.number,
    cardId: PropTypes.string,
    cardClickHandler: PropTypes.func,
}

export default MemoryCard;