import uuid from 'uuid';

let currentCardNumber = 0;

export const testState = {
  client: {
    currentUsername: 'pdrummond',
    page: {
      current:'board'
    },
  },
  settings: {
    currentCardNumber:300,
    showLineSummaryBadges:false
  },
  board: {
    id: 'board1',
    title: 'Load Test',
    members: []
  },
  "lines": [{
    "id": "Component-One",
    "title": "Component One",
    "type": "component",
    "expanded": true,
    "columnIds": [
      "Component-One/todo",
      "Component-One/doing"
    ]
  }],
  "columns": [{
    "id": "Component-One/todo",
    "title": "Todo",
    "lineId": "Component-One",
    "type": "todo",
    "cards": generateCards(20),
    "collapsed": false,
    "showNewCardInput": false
  }, {
    "id": "Component-One/doing",
    "title": "Doing",
    "lineId": "Component-One",
    "type": "doing",
    "cards": generateCards(10),
    "collapsed": false,
    "showNewCardInput": false
  }]
};

function generateCards(numCards) {
  let cards = [];
  for(let i=0; i<numCards; i++ ) {
    let cardNumber = currentCardNumber++;
    cards.push({
      "id": cardNumber,
      "title": "Card" + cardNumber,
      "type": "task",
      "editMode": false,
      "todos": [],
      "bugs": [],
      "comments": generateComments(200),
      "assignees": []
    });

  }
  return cards;
}

function generateComments(numComments) {
  let comments = [];
  for(let i=0; i<numComments; i++ ) {
    comments.push({
      "id": uuid.v1(),
      "username": "pdrummond",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non est magna. Praesent rhoncus vel lacus nec ultrices. Etiam eget nisi lacus. Vivamus et nunc nulla. Integer mollis ex vel mi mattis, vel sagittis urna pulvinar. Ut eget odio pharetra, imperdiet ex vitae, sagittis libero. Suspendisse imperdiet consequat hendrerit. Praesent nunc turpis, ornare non porta at, faucibus sed odio. Phasellus justo metus, malesuada quis consectetur in, accumsan eget urna. Sed id molestie mi. Mauris sed suscipit dui. Aliquam lobortis purus neque, lacinia sollicitudin purus cursus nec. Sed pulvinar, velit a viverra lobortis, sapien mi varius lectus, molestie facilisis dui odio eget diam",
      "createdAt": new Date()
    });
  }
  return comments;
}
