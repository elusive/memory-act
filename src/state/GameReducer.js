import PropTypes from 'prop-types';
import MemoryCard from '../components/MemoryCard';

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_SELECTED':
            return {
                ...state,
                cards: state.cards.map(c => {
                    if (c.id && c.id === action.payload) {
                        c.isSelected = !c.isSelected;
                    }
                    return c;
                }),
                selected: state.cards.filter(d => d.isSelected),
            };

        case 'ADD_MATCH':
            return {
                ...state,
                cards: state.cards.map((card) => {
                    if (action.paylod.map((c) => c.id).includes(card.id)) {
                        card.match();
                    }
                    return card;
                }),
                matched: state.cards.filter(c => c.isMatched),
            };

        case 'SET_IS_NEW_GAME':
            return {
                ...state,
                isNewGame: action.payload
            };

        //        case 'ADD_CARD':
//            return {
//                ...state,
//                cards: [...state.cards, action.payload],
//            };

        default:
            return state;
    }
};

reducer.propTypes = {
    state: PropTypes.shape({
        cards: PropTypes.arrayOf(MemoryCard),
        selected: [],
        matched: [],
        rowSize: PropTypes.number,
        isNewGame: PropTypes.boolean,
    }),
};

export default reducer;
