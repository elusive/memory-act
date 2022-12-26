import React, { createContext, useReducer } from 'react';

import reducer from './GameReducer.js';
import { buildDeck } from './Deck.js';


// initial game state
const ROW_SIZE = 4;
const CARD_COUNT = 20;

const initialState = {
    cards: buildDeck(CARD_COUNT, ROW_SIZE),
    selected: [],
    matched: [],
    rowSize: ROW_SIZE,
    isNewGame: false,
};


// create context instance for game
export const GameContext = createContext(initialState);


// create provider component
export const GameContextProvider = ( children ) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions
    function toggleSelected(cardId) {
        dispatch({
            type: 'TOGGLE_SELECTED',
            payload: cardId,
        });
    }

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


    return (
        < GameContextProvider.Provider value = {
            {
                cards: state.cards,
                matchCount: state.matchCount,
                selectCount: state.selectCount,
                rowSize: state.rowSize,
                toggleSelected,
                addMatch,
                cardClickHandler: {},
            }
        } >
        { children }
        </ GameContextProvider.Provider > );
}
