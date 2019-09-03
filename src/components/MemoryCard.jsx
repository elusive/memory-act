
import React, { Component } from 'react';

class MemoryCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPicked : false,
            isMatched : false,
            classList : 'inside'
        };

        // bind event handlers to the class instead of the element
        this.togglePicked = this.togglePicked.bind(this);
        this.setMatched = this.setMatched.bind(this);
    }

    togglePicked() {
        this.setState({
            isPicked: !this.state.isPicked,
        });
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

    render() {

        const CARD_BACK = 'M';

        return (
            <div className="card" onClick={this.togglePicked} data-row="0" data-col="1" data-id="11">
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
}

export default MemoryCard;