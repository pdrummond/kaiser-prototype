import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import update from 'react-addons-update';
import slug from 'slug';

const boardPathName = (window.location.pathname.startsWith("/") ? window.location.pathname : '/default');
const boardTitle = boardPathName.replace("/", "");
const boardKey = slug(boardTitle);
console.log("BOARD " + boardTitle + " (key=" + boardKey + ", pathname=" + boardPathName + ")");

let defaultState = {
  settings: {
    nextCardNumber:3
  },
  boards: [{
    id: 'board1',
    title: boardTitle,
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
    cards:[{
      id: 3,
      title: 'Card Three'
    }]
  },{
    id: 'backlog/triage',
    title: "Triage",
    cards:[{
      id: 1,
      title: 'Card One'
    },{
      id: 2,
      title: 'Card Two'
    }]
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
    case 'NEW_COMPONENT': {
      const id = slug(action.title);
      let newState = update(state, {

      });
      newState = update(newState, {
        lines: { $push: [{
          id,
          title: action.title,
          type: 'component',
          columnIds: [`${id}/todo`, `${id}/doing`, `${id}/paused`, `${id}/blocked`, `${id}/review`],
        }]}
      });
      return update(newState, {
        columns: { $push: [{
          id: `${id}/todo`,
          title: "Todo",
          cards:[]
        },{
          id: `${id}/doing`,
          title: "Doing",
          cards:[]
        },{
          id: `${id}/paused`,
          title: "Paused",
          cards:[]
        },{
          id: `${id}/blocked`,
          title: "Blocked",
          cards:[]
        },{
          id: `${id}/review`,
          title: "Review",
          cards:[]
        }]}
      });
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
      console.log("REORDER_CARD");
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
      if(findColumn(action.fromColumnId))
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
    key: 'kaiser' + boardPathName
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
