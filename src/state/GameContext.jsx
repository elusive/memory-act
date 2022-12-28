import React, { createContext, useReducer } from 'react';

import reducer from './GameReducer.js';


// initial game state
const initialState = {
    cards: [],
    selected: [],
    matched: [],
    rowSize: 4,  // default value??
    isNewGame: false,
};


// create context instance for game
export const GameContext = createContext(initialState);


// create provider component
export const GameContextProvider = function(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    /*
        Actions are wrappers for uses of dispatch().
        Then these are added to state for use elsewhere
        instead of passing dispatch() method alone.
    */


    // toggle selected on a card instance
    function toggleSelected(cardId) {
        dispatch({
            type: 'TOGGLE_SELECTED',
            payload: cardId,
        });
    }

    // add a match between two card instances
    function addMatch(cardA, cardB) {
        dispatch({
            type: 'ADD_MATCH',
            payload: [cardA, cardB],
        });
        dispatch({
            type: 'TOGGLE_SELECTED',
            payload: cardA.id, 
        });
        dispatch({
            type: 'TOGGLE_SELECTED',
            payload: cardB.id,
        });
    }

    // set new game flag
    function setIsNewGame(isNew) {
        dispatch({
            type: 'SET_IS_NEW_GAME',
            payload: isNew
        });
    }


    return (
        <GameContext.Provider value={{
                cards: state.cards,
                matchCount: state.matchCount,
                selectCount: state.selectCount,
                rowSize: state.rowSize,
                toggleSelected,
                addMatch,
                setIsNewGame,
                cardClickHandler: {},
            }}>
            { props.children}
        </ GameContext.Provider>
    );
}
