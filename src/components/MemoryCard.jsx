
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../state/GameContext';

MemoryCard.propTypes = {
    front: PropTypes.number,
    isMatched: PropTypes.bool,
    isSelected: PropTypes.bool,
    row: PropTypes.number,
    col: PropTypes.number,
    cardClickHandler: PropTypes.function,
}

const MemoryCard = (props) => {
    const state = useContext(GameContext); 

    const DefaultStyle = ['inside'];
    const SelectedStyle = ['inside picked'];
    const MatchedStyle = ['inside matched'];

    const handleCardClick = (event) => {
        console.log('target info', event.currentTarget);
        console.log('event info', event);
        props.cardClickHandler(this);
    }

    const CARD_BACK = 'JG';
    const cardId = props.front;

    return (
        <div className="card" onClick={handleCardClick} data-row="0" data-col="1" data-id={cardId}>
            <div className={state.cards[cardId].isMatched ? MatchedStyle : state.cards[cardId].isSelected ? SelectedStyle : DefaultStyle}>

                <div className="front">
                    <div>{props.front}</div>
                </div>

                <div className="back">
                    <div>{CARD_BACK}</div>
                </div>
            </div>
        </div>);

}

export default MemoryCard;

