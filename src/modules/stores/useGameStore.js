import { create } from 'zustand';
import { NewDeck } from '../model.mjs';

export const useGameStore = create((set) => ({
    cards: NewDeck(),
    matched: [],
    rowSize: 4,
    isGameWon: false,
    isNewGame: true,
    toggleSelected: (id) => set(state => ({
        cards: state.cards.map(c => {
            if (c.id && c.id === id) {
                c.isSelected = !c.isSelected;
            }
            return c;
        }),
        selected: state.cards.filter(d => d.isSelected),
    })),
    addMatch: (...newlyMatched) => set(state => ({
        cards: state.cards.map((card) => {
            if (newlyMatched.map((c) => c.id).includes(card.id)) {
                card.isMatched = true;
            }
            return card;
        }),
        matched: state.cards.filter(c => c.isMatched),
    })),
    setIsGameWon: (isGameWon) => set({ isGameWon }),
    setIsNewGame: (isNewGame) => set({ isNewGame }),
    setCards: (cards) => set({ cards }),
    setRowSize: (rowSize) => set({ rowSize }),
    resetGame: () => set({
        cards: [],
        selected: [],
        matched: [],
        rowSize: 4,
        isGameWon: false,
        isNewGame: true,
    }),
    isGreetingVisible: true,
}));