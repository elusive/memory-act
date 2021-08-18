export default (state, action) => {
    switch (action.type) {
        case 'TOGGLE_SELECTED':
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card.id === action.payload.id) { card.isSelected = !card.isSelected };
                }),
            };

        case 'ADD_MATCH':
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (action.paylod.map(c => c.id).includes(card.id)) {
                        card.isMatched = true;
                    }
                }),
            };

        case 'ADD_CARD':
            return {
                ...state,
                cards: [...cards, action.payload],
            };

        default:
            return state;
    }
}