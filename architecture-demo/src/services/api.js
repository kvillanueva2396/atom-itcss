import cards from './cards.json';

export const api = {
  getCards() {
    return new Promise((resolve) => {
      resolve(cards);
    });
  },
};
