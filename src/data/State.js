import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import update from 'react-addons-update';
import slug from 'slug';

const pathname = window.location.pathname;
const boardPathName = (pathname.startsWith("/") && pathname.length > 1 ? window.location.pathname : '/default');
const boardTitle = boardPathName.replace("/", "");
const boardKey = slug(boardTitle);
console.log("BOARD " + boardTitle + " (key=" + boardKey + ", pathname=" + boardPathName + ")");

let defaultState = {
  settings: {
    currentCardNumber:0
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
    expanded: true,
    columnIds: ['backlog/incoming', 'backlog/triage', 'backlog/accepted', 'backlog/rejected', 'backlog/out-of-scope'],
  },{
    id: 'test',
    title: "Test",
    type: 'test',
    expanded: false,
    columnIds: ['test/ready', 'test/testing', 'test/paused'],
  },{
    id: 'done',
    title: "Done",
    type: 'done',
    expanded: false,
    columnIds: ['done/ready', 'done/release1-0', 'done/release1-1', 'done/release2-0'],
  },{
    id: 'scratch',
    title: "Scratch",
    type: 'scratch',
    expanded: false,
    columnIds: ['scratch/requests', 'scratch/ideas', 'scratch/notes', 'scratch/trash'],
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
  },{
    id: 'test/ready',
    title: "Test Ready",
    cards:[]
  },{
    id: 'test/testing',
    title: "Testing",
    cards:[]
  },{
    id: 'test/paused',
    title: "Paused",
    cards:[]
  },{
    id: 'done/ready',
    title: "Release Ready",
    cards:[]
  },{
    id: 'done/release1-0',
    title: "Release 1.0",
    cards:[]
  },{
    id: 'done/release1-1',
    title: "Release 1.1",
    cards:[]
  },{
    id: 'done/release2-0',
    title: "Release 2.0",
    cards:[]
  },{
    id: 'scratch/requests',
    title: "Requests",
    cards:[]
  },{
    id: 'scratch/ideas',
    title: "Ideas",
    cards:[]
  },{
    id: 'scratch/notes',
    title: "Notes",
    cards:[]
  },{
    id: 'scratch/trash',
    title: "Trash",
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
        lines: { $splice: [[1,0, {
          id,
          title: action.title,
          type: 'component',
          expanded:true,
          columnIds: [`${id}/todo`, `${id}/doing`, `${id}/paused`, `${id}/blocked`, `${id}/review`],
        }]]}
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
    case 'SET_LINE_TITLE': {
      const lineIndex = findLineIndex(action.lineId);
      return update(state, {
        lines: {[lineIndex]: {
          title: {$set: action.title}
        }}
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
          currentCardNumber: {$set: state.settings.currentCardNumber+1}
        }
      });
      return update(newState, {
        columns: {[columnIndex]: {
          cards: { $push: [{
            id: newState.settings.currentCardNumber,
            title: 'Card '  + newState.settings.currentCardNumber,
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
    case 'TOGGLE_LINE_EXPANDED': {
      console.log("TOGGLE_LINE_EXPANDED", action);
      const lineIndex = findLineIndex(action.lineId);
      return update(state, {
        lines: {[lineIndex]: {
          expanded: {$set: !state.lines[lineIndex].expanded}
        }}
      });
    }
    case 'TOGGLE_LINE_MAXIMISED': {
      console.log("TOGGLE_LINE_MAXIMISED", action);
      const lineIndex = findLineIndex(action.lineId);
      return update(state, {
        lines: {[lineIndex]: {
          maximised: {$set: !state.lines[lineIndex].maximised}
        }}
      });
    }
    case 'DELETE_LINE': {
      console.log("DELETE_LINE", action);
      const lineIndex = findLineIndex(action.lineId);
      return update(state, {
        lines: { $splice: [[lineIndex, 1]]}
      });
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

export function findLineIndex(lineId) {
  const state = store.getState();
  return state.lines.findIndex( (line) => (line.id === lineId));
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
