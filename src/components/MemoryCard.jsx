
import React, { Component, useState } from 'react';

import { GameContext } from '../state/GameContext';


export default MemoryCard = (card) => {
    const [classList, setClassList] = useState('inside')
    const {toggleSelected} = useContext(GameContext);
    const handleCardClick = (event) => {
        console.log('target info', event.currentTarget);
        console.log('event info', event);
  	    var id = this.refs.tester.getAttribute("data-id");

        console.log('id: ', id);
        let card = event.target;
        console.log(`id from dataset: ${card.dataset.id}`);

        toggleSelected(id);
  //      setClassList(card.isPicked ? ['inside picked'] : )
    }

    const CARD_BACK = 'JG';

    return (
        <div className="card" onClick={this.handleCardClick} data-row="0" data-col="1" data-id="{card.id}">
            <div className={this.state.classList}>

                <div className="front">
                    <div>{this.props.front}</div>
                </div>

                <div className="back">
                    <div>{CARD_BACK}</div>
                </div>
            </div>
        </div>);

}


/*
        this.setState({
            classList: (this.state.isPicked) ? 'inside picked' : 'inside'
        });
    }

    setMatched() {
        this.setState({
            isMatched: true,
            classList: 'inside matched'
        });
    }
*/
