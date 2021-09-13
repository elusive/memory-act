import PropTypes from 'prop-types';
import MemoryCard from '../components/MemoryCard';

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_SELECTED':
            return {
                ...state,
                cards: state.cards.map((card) => {
                    if (card.id === action.payload.id) {
                        card.toggle();
                    }
                    return card;
                }),
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
            };

        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, action.payload],
            };

        default:
            return state;
    }
};

reducer.propTypes = {
    state: PropTypes.shape({
        cards: PropTypes.arrayOf(MemoryCard),
        selectCount: PropTypes.number,
        matchCount: PropTypes.number,
        rowSize: PropTypes.number,
    }),
};

export default reducer;
