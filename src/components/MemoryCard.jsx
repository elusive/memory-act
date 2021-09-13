
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../state/GameContext';

const MemoryCard = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isMatched, setIsMatched] = useState(false);
    const {toggleSelected} = useContext(GameContext);

    const DefaultStyle = ['inside'];
    const SelectedStyle = ['inside picked'];
    const MatchedStyle = ['inside matched'];

    const handleCardClick = (event) => {
        console.log('target info', event.currentTarget);
        console.log('event info', event);
  	    var id = this.refs.tester.getAttribute("data-id");

        console.log('id: ', id);
        let card = event.target;
        console.log(`id from dataset: ${card.dataset.id}`);

        toggleSelected(id);
    }

    const toggle = () => {
        setIsSelected(!isSelected);
    }

    const match = () => {
        setIsMatched(true);
    }

    const CARD_BACK = 'JG';

    return (
        <div className="card" onClick={handleCardClick} data-row="0" data-col="1" data-id="{card.id}">
            <div className="{isMatched ? MatchedStyle : isSelected ? SelectedStyle : DefaultStyle}">

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
    card: PropTypes.object,
}

export default MemoryCard;

/*
        this.setState({
            isPicked: isPicked,
            classList: isPicked ? 'inside picked' : 'inside',
        });
    }

    }
*/
