import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class MemoryCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uuid: uuidv4(),
            isPicked: false,
            isMatched: false,
            classList: 'inside'
        };

        // bind event handlers to the class instead of the element
        this.togglePicked = this.togglePicked.bind(this);
        this.setMatched = this.setMatched.bind(this);

        // event handler from parent state manager/game class
        this.cardClickedHandler = this.props.cardClick;
    }

    togglePicked(evt) {
        this.setState(prevState => ({
            isPicked: !prevState.isPicked
        }));
        this.setState(
            prev => ({
                classList: prev.isPicked ? 'inside picked' : 'inside'
            }),
            () => {
                // call parent handler
                this.cardClickedHandler(evt, this, this.state.isPicked);
            }
        );
    }

    setMatched() {
        this.setState({
            isMatched: true,
            classList: 'inside matched'
        });
    }

    render() {
        const CARD_BACK = 'M';

        return (
            <div
                className="card"
                onClick={this.togglePicked}
                data-row="0"
                data-col="1"
                data-id="11"
            >
                <div className={this.state.classList}>
                    <div className="front">
                        <div>{this.props.front}</div>
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
