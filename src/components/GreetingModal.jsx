import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GreetingModal extends Component {
    static get propTypes() {
        return {
            start: PropTypes.func,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            startDelegate: this.props.start,
        };

        this.startGameClickHandler = this.startGameClickHandler.bind(this);
    }

    startGameClickHandler() {
        this.setState({ isVisible: !this.state.isVisible });
        this.state.startDelegate();
    }

    render() {
        const displayStyle = {
            display: this.state.isVisible ? 'flex' : 'none',
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
                            onClick={this.startGameClickHandler}
                        >
                            Start
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GreetingModal;
