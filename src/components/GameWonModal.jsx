import { useState } from 'react';
import { useGameStore } from '../modules/stores/useGameStore';
import PropTypes from 'prop-types';

const GameWonModal = (props) => {
    const {resetGame} = useGameStore();
    const [isVisible, setIsVisible] = useState(!props.isVisible);
    const newGameClickHandler = () => {
        setIsVisible(!isVisible);
        resetGame();        
    }
    const displayStyle = {
        display: isVisible ? 'flex' : 'none',
    };

    return (
        <div className="modalWrapper" style={displayStyle}>
            <div className="modal">
                <div className="modal__header">Congratulations</div>
                <div className="modal__body">
                    <p>
                        You have completed in {props.minutes} minutes and {props.seconds} seconds.
                    </p>
                    <p>
                        Your aim is to find all the possible pair as soon as
                        possible.
                    </p>
                </div>
                <div className="modal__footer">
                    <button
                        className="newGame"
                        onClick={newGameClickHandler}
                    >
                        Play Again
                    </button>
                </div>
            </div>
        </div>
    );
}

GameWonModal.propTypes = {
    isVisible: PropTypes.bool,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
};

export default GameWonModal;
