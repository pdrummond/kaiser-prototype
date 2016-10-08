import { createStore } from 'redux';
import reactUpdate from 'react-addons-update';

let defaultState = {
  boards: [{
    id: 'board1',
    title: "Board 1",
    lineIds: ['line1'],
  }],
  lines: [{
    id: 'line1',
    title: "Backlog",
    type: 'backlog',
    columnIds: ['column1'],
  }],
  columns: [{
    id: 'column1',
    title: "Incoming",
    cardIds:['card1', 'card2']
  }],
  cards: [
    {
      id: 'card1',
      title: "Card One"
    },
    {
      id: 'card2',
      title: "Card Two"
    }]
};

function reducer(state = defaultState, action) {
  console.log(">> reducer for " + action.type);
  console.log("-- reducer state", state);
  console.log("-- reducer action", action);
  console.log("<< reducer for " + action.type);
  switch(action.type) {
    case 'SET_CARD_TITLE':
      return reactUpdate(state, {
        cards: {
          0: {
            title: {$set: "Boom"}
          }
        }
      });
    default:
      console.error("No reducer for " + action.type);
      return state;
  }

}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export function getReduxStore() {
  return store;
}

export function findLine(lineId) {
  const state = store.getState();
  return state.lines.find( (line) => (line.id === lineId));
}

export function findColumn(columnId) {
  const state = store.getState();
  return state.columns.find( (column) => (column.id === columnId));
}

export function findCard(cardId) {
  const state = store.getState();
  return state.cards.find( (card) => (card.id === cardId));
}
