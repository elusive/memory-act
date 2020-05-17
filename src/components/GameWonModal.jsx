import React, { Component } from 'react';

class GreetingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            startDelegate: this.props.newGame,
        };

        this.newGameClickHandler = this.newGameClickHandler.bind(this);
    }

    newGameClickHandler() {
        this.setState({ isVisible: !this.state.isVisible });
        this.state.startDelegate();
    }

    show() {
        this.setState({ isVisible: true });
    }

    render() {
        const displayStyle = {
            display: this.state.isVisible ? 'flex' : 'none',
        };

        return (
            <div className="modalWrapper" style={displayStyle}>
                <div className="modal">
                    <div className="modal__header">Congratulations</div>
                    <div className="modal__body">
                        <p>
                            You have completed in {this.state.minutes}:
                            {this.state.seconds}
                        </p>
                        <p>
                            Your aim is to find all the possible pair as soon as
                            possible.
                        </p>
                    </div>
                    <div className="modal__footer">
                        <button
                            className="newGame"
                            onClick={this.newGameClickHandler}
                        >
                            Play Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GreetingModal;
