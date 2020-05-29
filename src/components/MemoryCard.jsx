import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

class MemoryCard extends Component {
    static get propTypes() {
        return {
            front: PropTypes.string,
            cardClick: PropTypes.func,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            uuid: uuidv4(),
            isPicked: false,
            isMatched: false,
            classList: 'inside',
            front: this.props.front,
        };

        // bind event handlers to the class instead of the element
        this.setPicked = this.setPicked.bind(this);
        this.setMatched = this.setMatched.bind(this);
        this.clicked = this.clicked.bind(this);

        // event handler from parent state manager/game class
        this.cardClickedHandler = this.props.cardClick;
    }

    clicked(evt) {
        this.cardClickedHandler(evt, this);
    }

    setPicked(isPicked) {
        this.setState({
            isPicked: isPicked,
            classList: isPicked ? 'inside picked' : 'inside',
        });
    }

    setMatched() {
        this.setState({
            isMatched: true,
            classList: 'inside matched',
        });
    }

    render() {
        const CARD_BACK = 'M';

        return (
            <div
                className="card"
                onClick={this.clicked}
                data-row="0"
                data-col="1"
                data-id="11"
            >
                <div className={this.state.classList}>
                    <div className="front">
                        <div>{this.state.front}</div>
                    </div>

                    <div className="back">
                        <div>{CARD_BACK}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;
