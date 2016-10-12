import { createStore } from 'redux';
import update from 'react-addons-update';

let defaultState = {
  boards: [{
    id: 'board1',
    title: "Board 1",
    lineIds: ['line1', 'line2'],
  }],
  lines: [{
    id: 'line1',
    title: "Backlog",
    type: 'backlog',
    columnIds: ['column1', 'column2', 'column3'],
  },{
    id: 'line2',
    title: "Component one",
    type: 'backlog',
    columnIds: ['column4'],
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
  },{
    id: 'column3',
    title: "Accepted",
    cards:[]
  },{
    id: 'column4',
    title: "Todo",
    cards:[{
      id: 'card6',
      title: "Card Six"
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
    case 'MOVE_CARD': {
      console.log("MOVE_CARD action:", action);
      const fromColumnIndex = findColumnIndex(action.fromColumnId);
      let dragCard = findCard(state.columns[fromColumnIndex], action.cardId);
      let newState = update(state, {
        columns: {[fromColumnIndex]: {
          cards: { $splice: [[action.cardIndex, 1]]}
        }}
      });
      const toColumnIndex = findColumnIndex(action.toColumnId);
      newState = update(newState, {
        columns: {[toColumnIndex]: {
          cards: { $push: [dragCard]}
        }}
      });
      //state.columns[action.columnIndex]
      console.log("newState:", newState);
      return newState;
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

export function findColumnIndex(columnId) {
  const state = store.getState();
  return state.columns.findIndex( (column) => (column.id === columnId));
}

export function findCard(column, cardId) {
  return column.cards.find( (card) => (card.id === cardId));
}
