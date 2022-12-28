import React, { useContext, useState } from 'react';
import { GameContext } from '../state/GameContext';


function GreetingModal() {

    const [isVisible, setIsVisible] = useState(true);
    const state = useContext(GameContext);


    const startGameClickHandler = () => {
        setIsVisible(!isVisible);
        ;        
    }


    const displayStyle = {
        display: isVisible ? 'flex' : 'none',
    };


    return (
        <div className="modalWrapper" style={displayStyle}>
            <div className="modal">
                <div className="modal__header">Hello Guest!</div>
                <div className="modal__body">
                    <p>
                        Just tap on the card to reveal what&apos;s behind
                        it.
                    </p>
                    <p>
                        Your aim is to find all the possible pair as soon as
                        possible.
                    </p>
                </div>
                <div className="modal__footer">
                    <button
                        className="startGame"
                        onClick={startGameClickHandler}>
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
    
}

export default GreetingModal;
