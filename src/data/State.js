import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import update from 'react-addons-update';

let defaultState = {
  settings: {
    nextCardNumber:0
  },
  boards: [{
    id: 'board1',
    title: "Board 1",
    lineIds: ['backlog'],
  }],
  lines: [{
    id: 'backlog',
    title: "Backlog",
    type: 'backlog',
    columnIds: ['backlog/incoming', 'backlog/triage', 'backlog/accepted', 'backlog/rejected', 'backlog/out-of-scope'],
  }],
  columns: [{
    id: 'backlog/incoming',
    title: "Incoming",
    cards:[]
  },{
    id: 'backlog/triage',
    title: "Triage",
    cards:[]
  },{
    id: 'backlog/accepted',
    title: "Accepted",
    cards:[]
  },{
    id: 'backlog/rejected',
    title: "Rejected",
    cards:[]
  },{
    id: 'backlog/out-of-scope',
    title: "Out of Scope",
    cards:[]
  }]
};


function reducer(state = defaultState, action) {
  //console.log(">> reducer for " + action.type);
  //console.log("-- reducer state", state);
  //console.log("-- reducer action", action);
  //console.log("<< reducer for " + action.type);
  switch(action.type) {
    case 'SET_STATE': {
      return action.state;
    }
    case 'NEW_BOARD': {
      return defaultState;
    }
    case 'SET_CARD_TITLE': {
      const columnIndex = findColumnIndex(action.columnId);
      const cardIndex = findCardIndex(state.columns[columnIndex], action.cardId);
      return update(state, {
        columns: {[columnIndex]: {
          cards: {[cardIndex]: {
            title: {$set: action.title},
            editMode: {$set: action.editMode}
          }}
        }}
      });
    }
    case 'SET_CARD_EDIT_MODE': {
      const columnIndex = findColumnIndex(action.columnId);
      const cardIndex = findCardIndex(state.columns[columnIndex], action.cardId);
      return update(state, {
        columns: {[columnIndex]: {
          cards: {[cardIndex]: {
            editMode: {$set: action.editMode}
          }}
        }}
      });
    }
    case 'NEW_CARD': {
      const columnIndex = findColumnIndex('backlog/incoming');
      let newState = update(state, {
        settings: {
          nextCardNumber: {$set: state.settings.nextCardNumber+1}
        }
      });
      return update(newState, {
        columns: {[columnIndex]: {
          cards: { $push: [{
            id: newState.settings.nextCardNumber,
            title: '',
            editMode: true
          }]}
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
      console.log("MOVE CARD REMOVE:", newState.columns[fromColumnIndex].cards);
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

const enhancer = compose(
  persistState(null, {
    key: 'kaiser' + (window.location.pathname.startsWith("/") ? window.location.pathname : 'default')
  })
);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
);

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

export function findCardIndex(column, cardId) {
  return column.cards.findIndex( (card) => (card.id === cardId));
}
