import { createStore } from 'redux';
import update from 'react-addons-update';

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
    columnIds: ['column1', 'column2'],
  }],
  columns: [{
    id: 'column1',
    title: "Incoming",
    cards:[{
      id: 'card1',
      title: "Card One"
    },{
      id: 'card2',
      title: "Card Two"
    }]
  },{
    id: 'column2',
    title: "Triage",
    cards:[{
      id: 'card3',
      title: "Card Three"
    },{
      id: 'card4',
      title: "Card Four"
    },{
      id: 'card5',
      title: "Card Five"
    }]
  }]
};


function reducer(state = defaultState, action) {
  //console.log(">> reducer for " + action.type);
  //console.log("-- reducer state", state);
  //console.log("-- reducer action", action);
  //console.log("<< reducer for " + action.type);
  switch(action.type) {
    //This is just a test for the 'boom' button - will be removed soon!
    case 'SET_CARD_TITLE': {
      return update(state, {
        columns: {0: {
          cards: {0: {
            title: {$set: "Boom"}
          }}
        }}
      });
    }
    case 'REORDER_CARD': {
      const dragCard = state.columns[action.columnIndex].cards[action.dragIndex];
      return update(state, {
        columns: {[action.columnIndex]: {
        cards: { $splice: [
            [action.dragIndex, 1],
            [action.hoverIndex, 0, dragCard]
          ]}
        }}
      });
    }
    default: {
      return state;
    }
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
