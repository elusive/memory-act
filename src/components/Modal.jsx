import React, { Component } from 'react';


class Modal extends Component {

    render() {

        const onStartClick = (evt) => {
            alert(evt);
        }

        return(
        <div className="modalWrapper">
            <div className="modal">
                <div className="modal__header">
                    Hello Guest!
                </div>
                <div className="modal__body">
                    <p>Just tap on the card to reveal what's behind it.</p>
                    <p>Your aim is to find all the possible pair as soon as possible.</p>
                </div>
                <div className="modal__footer">
                    <button className="startGame" onClick={onStartClick}>Start</button>
                </div>
            </div>
        </div>);
    }
}

export default Modal;