import PropTypes from 'prop-types';
import { useState } from 'react';
import { useGameStore } from '../modules/stores/useGameStore';

function GreetingModal() {
    const {isNewGame, resetGame} = useGameStore();
    const [isVisible, setIsVisible] = useState(!isNewGame);
    const startGameClickHandler = () => {
        setIsVisible(!isVisible);
        resetGame();        
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

GreetingModal.propTypes = {
    isVisible: PropTypes.bool,
};

export default GreetingModal;