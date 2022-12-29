import React, { createContext, useReducer } from 'react';
import { ROW_SIZE, CARD_COUNT, NewDeck} from './Deck';
import reducer from './GameReducer';



// initial game state
const initialState = {
    cards: NewDeck(ROW_SIZE, CARD_COUNT),
    selected: [],
    matched: [], rowSize: 4,  // default value??
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
        return new Promise((resolve, reject) => {
            try {
                dispatch({
                    type: 'TOGGLE_SELECTED',
                    payload: cardId,
                });
                resolve();
            } catch(err) {
                reject(err);
            }
        });
    }

    // add a match between two card instances
    function addMatch(cardA, cardB) {
        return new Promise((resolve, reject) => {
            try {
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
                resolve();
            } catch (err) {
                reject(err);
            }
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
                matched: state.matched,
                selected: state.selected,
                rowSize: state.rowSize,
                isNewGame: state.isNewGame,
                toggleSelected,
                addMatch,
                setIsNewGame,
                gameWonHandler: {},
                cardClickHandler: {},
            }}>
            { props.children}
        </ GameContext.Provider>
    );
}
