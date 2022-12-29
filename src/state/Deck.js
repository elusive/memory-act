
import {v4 as uuidv4} from 'uuid';

export const ROW_SIZE = 4;
export const CARD_COUNT = 20;

export const NewDeck =  (rowSize, cardCount) => buildDeck(rowSize, cardCount);

const buildDeck = (rowSize, total) => {
    let cardNumber = 0;
    let maxCardNumber = Math.floor(total / 2);
    let rows = Math.floor(total / rowSize);
    let cards = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < rowSize; c++) {
            // check if we need to reset card number or just increment
            cardNumber = (cardNumber < maxCardNumber) ? cardNumber + 1 : 1;
            cards.push({
                id: uuidv4(),
                isMatched : !1,
                isPicked : !1,
                row : r,
                col : c,
                front : cardNumber
            });
        }
    }

    return cards;
}

export const shuffleDeck = (cardsArray) => {
    for (var e = cardsArray.length; e > 0; ) {
        var i = Math.floor(Math.random() * e);
        e--;
        var r = cardsArray[e];
        cardsArray[e] = cardsArray[i];
        cardsArray[i] = r;
    }

    return cardsArray;
}

