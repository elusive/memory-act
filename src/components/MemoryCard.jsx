import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MemoryCard = (props) => {

    const DefaultStyle = ['inside'];
    const SelectedStyle = ['inside picked'];
    const MatchedStyle = ['inside matched'];

    const handleCardClick = (event) => {
        console.log('target info', event.currentTarget);
        console.log('event info', event);
        props.cardClickHandler(props.cardId);
    }

    const CARD_BACK = 'JG';

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

MemoryCard.propTypes = {
    front: PropTypes.number,
    isMatched: PropTypes.bool,
    isSelected: PropTypes.bool,
    row: PropTypes.number,
    col: PropTypes.number,
    cardClickHandler: PropTypes.func,
}

export default MemoryCard;
