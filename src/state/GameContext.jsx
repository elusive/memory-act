import { createContext, useReducer } from 'react';

import reducer from './GameReducer.js';
import MemoryCard from '../components/MemoryCard';


// initial game state
const ROW_SIZE = 4;
const CARD_COUNT = 20;

const initialState = {
    cards: buildDeck(CARD_COUNT, ROW_SIZE),
    selectCount: 0,
    matchCount: 0,
    rowSize: ROW_SIZE,
};


// create context instance for game
export const GameContext = createContext(initialState);


// create provider component
export const GameContextProvider = ({ children }) => {
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
                addCard
            }
        } >
        { children }
        </ GameContextProvider.Provider > );
}

const buildDeck = (total, rowSize) => {
    let cardNumber = 0;
    let maxCardNumber = Math.min(total / 2);
    let rows = (total / rowSize);
    let cards = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < rowSize; c++) {
            // check if we need to reset card number or just increment
            cardNumber = (cardNumber < maxCardNumber) ? cardNumber + 1 : 1;
            cards.push(MemoryCard({
                isMatched : !1,
                isPicked : !1,
                row : r,
                col : c,
                front : cardNumber
            }));
        }
    }

    return cards;
}

const shuffleDeck = (cardsArray) => {
    for (var e = cardsArray.length; e > 0; ) {
        var i = Math.floor(Math.random() * e);
        e--;
        var r = cardsArray[e];
        cardsArray[e] = cardsArray[i];
        cardsArray[i] = r;
    }

    return cardsArray;
}
