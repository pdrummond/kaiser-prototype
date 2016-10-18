export const sampleState = {
  "client": {
    "currentUsername": "ksoze",
    "page": {
      "current": "board",
      "cardId": null,
      "columnId": "Component-Two/todo"
    }
  },
  "settings": {
    "currentCardNumber": 12,
    "showLineSummaryBadges": false
  },
  "board": {
    "id": "board1",
    "title": "test",
    "members": [
      {
        "username": "pdrummond",
        "imageUrl": "/images/pdrummond.png"
      },
      {
        "username": "ksoze",
        "imageUrl": "/images/ksoze.png"
      }
    ]
  },
  "lines": [
    {
      "id": "Component-One",
      "title": "Component One",
      "type": "component",
      "expanded": true,
      "columnIds": [
        "Component-One/todo",
        "Component-One/doing",
        "Component-One/paused",
        "Component-One/blocked",
        "Component-One/review",
        "Component-One/test-ready",
        "Component-One/testing",
        "Component-One/done"
      ]
    },
    {
      "id": "Component-Three",
      "title": "Component Two",
      "type": "component",
      "expanded": true,
      "columnIds": [
        "Component-Three/todo",
        "Component-Three/doing",
        "Component-Three/paused",
        "Component-Three/blocked",
        "Component-Three/review",
        "Component-Three/test-ready",
        "Component-Three/testing",
        "Component-Three/done"
      ]
    },
    {
      "id": "Component-Two",
      "title": "Component Three",
      "type": "component",
      "expanded": true,
      "columnIds": [
        "Component-Two/todo",
        "Component-Two/doing",
        "Component-Two/paused",
        "Component-Two/blocked",
        "Component-Two/review",
        "Component-Two/test-ready",
        "Component-Two/testing",
        "Component-Two/done"
      ],
      "maximised": false
    }
  ],
  "columns": [
    {
      "id": "Component-One/todo",
      "title": "Todo",
      "lineId": "Component-One",
      "type": "todo",
      "cards": [
        {
          "id": 1,
          "title": "There is a bug with the line not expanding correctly",
          "type": "bug",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        },
        {
          "id": 2,
          "title": "I can't figure out how to use this thing",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [
            {
              "id": "d76ed1b0-9582-11e6-9b39-5d22238cbaf9",
              "username": "annonymous",
              "text": "Is this just a more complicated version of Trello?",
              "createdAt": "2016-10-18T22:33:07.403Z"
            },
            {
              "id": "e797ef40-9582-11e6-9b39-5d22238cbaf9",
              "username": "ksoze",
              "text": "Why is my data only local? Is this just a demo or something?",
              "createdAt": "2016-10-18T22:33:34.516Z"
            },
            {
              "id": "e8f7f470-9582-11e6-9b39-5d22238cbaf9",
              "username": "ksoze",
              "text": "Who am I?",
              "createdAt": "2016-10-18T22:33:36.823Z"
            }
          ],
          "assignees": [
            {
              "username": "ksoze"
            }
          ]
        }
      ],
      "collapsed": false,
      "showNewCardInput": false
    },
    {
      "id": "Component-One/doing",
      "title": "Doing",
      "lineId": "Component-One",
      "type": "doing",
      "cards": [
        {
          "id": 3,
          "title": "Drag and drop not working",
          "type": "bug",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        }
      ],
      "collapsed": true,
      "showNewCardInput": false
    },
    {
      "id": "Component-One/paused",
      "title": "Paused",
      "lineId": "Component-One",
      "type": "paused",
      "collapsed": true,
      "cards": []
    },
    {
      "id": "Component-One/blocked",
      "title": "Blocked",
      "type": "blocked",
      "collapsed": true,
      "lineId": "Component-One",
      "cards": []
    },
    {
      "id": "Component-One/review",
      "title": "Review",
      "type": "review",
      "collapsed": true,
      "lineId": "Component-One",
      "cards": []
    },
    {
      "id": "Component-One/test-ready",
      "title": "Test Ready",
      "type": "test-ready",
      "lineId": "Component-One",
      "cards": [],
      "collapsed": true
    },
    {
      "id": "Component-One/testing",
      "title": "Testing",
      "type": "testing",
      "lineId": "Component-One",
      "cards": [],
      "collapsed": true
    },
    {
      "id": "Component-One/done",
      "title": "Done",
      "type": "done",
      "lineId": "Component-One",
      "cards": [
        {
          "id": 9,
          "title": "Board Page",
          "type": "enhancement",
          "editMode": false,
          "todos": [
            {
              "id": "0ffb9860-9583-11e6-9b39-5d22238cbaf9",
              "title": "Board Layout UI",
              "done": true
            },
            {
              "id": "11642910-9583-11e6-9b39-5d22238cbaf9",
              "title": "Board endpoints",
              "done": true
            },
            {
              "id": "12dbfc00-9583-11e6-9b39-5d22238cbaf9",
              "title": "Board lines",
              "done": true
            }
          ],
          "bugs": [
            {
              "id": "1d386b70-9583-11e6-9b39-5d22238cbaf9",
              "title": "New board not working correctly.",
              "done": true
            }
          ],
          "comments": [],
          "assignees": []
        }
      ],
      "collapsed": false
    },
    {
      "id": "Component-Two/todo",
      "title": "Todo",
      "lineId": "Component-Two",
      "type": "todo",
      "cards": [],
      "showNewCardInput": false,
      "collapsed": true
    },
    {
      "id": "Component-Two/doing",
      "title": "Doing",
      "lineId": "Component-Two",
      "type": "doing",
      "cards": [],
      "collapsed": true
    },
    {
      "id": "Component-Two/paused",
      "title": "Paused",
      "lineId": "Component-Two",
      "type": "paused",
      "collapsed": true,
      "cards": []
    },
    {
      "id": "Component-Two/blocked",
      "title": "Blocked",
      "type": "blocked",
      "collapsed": true,
      "lineId": "Component-Two",
      "cards": []
    },
    {
      "id": "Component-Two/review",
      "title": "Review",
      "type": "review",
      "collapsed": true,
      "lineId": "Component-Two",
      "cards": []
    },
    {
      "id": "Component-Two/test-ready",
      "title": "Test Ready",
      "type": "test-ready",
      "lineId": "Component-Two",
      "cards": [
        {
          "id": 11,
          "title": "Implement Search",
          "type": "enhancement",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        }
      ],
      "collapsed": false
    },
    {
      "id": "Component-Two/testing",
      "title": "Testing",
      "type": "testing",
      "lineId": "Component-Two",
      "cards": [],
      "collapsed": false
    },
    {
      "id": "Component-Two/done",
      "title": "Done",
      "type": "done",
      "lineId": "Component-Two",
      "cards": [
        {
          "id": 12,
          "title": "Set-up deployment to Heroku",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        }
      ],
      "collapsed": false
    },
    {
      "id": "Component-Three/todo",
      "title": "Todo",
      "lineId": "Component-Three",
      "type": "todo",
      "cards": [
        {
          "id": 4,
          "title": "Implement filter sidebar",
          "type": "enhancement",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        },
        {
          "id": 5,
          "title": "Implement activity sidebar",
          "type": "enhancement",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        }
      ],
      "showNewCardInput": false
    },
    {
      "id": "Component-Three/doing",
      "title": "Doing",
      "lineId": "Component-Three",
      "type": "doing",
      "cards": [
        {
          "id": 6,
          "title": "Implement comments",
          "type": "enhancement",
          "editMode": false,
          "todos": [
            {
              "id": "a9625620-9582-11e6-9b39-5d22238cbaf9",
              "title": "Ability to add comments to a card",
              "done": true
            },
            {
              "id": "ac7b7d00-9582-11e6-9b39-5d22238cbaf9",
              "title": "Comments should show username and user image",
              "done": true
            },
            {
              "id": "b09b1760-9582-11e6-9b39-5d22238cbaf9",
              "title": "Add message box for adding comments",
              "done": true
            }
          ],
          "bugs": [
            {
              "id": "b871ed60-9582-11e6-9b39-5d22238cbaf9",
              "title": "Message box should be textarea - it looks wrong as input",
              "done": true
            },
            {
              "id": "bd2f9c80-9582-11e6-9b39-5d22238cbaf9",
              "title": "Comment list should scroll down when a new comment is added"
            }
          ],
          "comments": [],
          "assignees": [
            {
              "username": "pdrummond"
            }
          ]
        }
      ],
      "showNewCardInput": false
    },
    {
      "id": "Component-Three/paused",
      "title": "Paused",
      "lineId": "Component-Three",
      "type": "paused",
      "collapsed": true,
      "cards": []
    },
    {
      "id": "Component-Three/blocked",
      "title": "Blocked",
      "type": "blocked",
      "collapsed": false,
      "lineId": "Component-Three",
      "cards": [
        {
          "id": 7,
          "title": "Sync state to server so board can be shared with other users",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        }
      ],
      "showNewCardInput": false
    },
    {
      "id": "Component-Three/review",
      "title": "Review",
      "type": "review",
      "collapsed": true,
      "lineId": "Component-Three",
      "cards": []
    },
    {
      "id": "Component-Three/test-ready",
      "title": "Test Ready",
      "type": "test-ready",
      "lineId": "Component-Three",
      "cards": [
        {
          "id": 8,
          "title": "Ability to add comments",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        }
      ],
      "showNewCardInput": false
    },
    {
      "id": "Component-Three/testing",
      "title": "Testing",
      "type": "testing",
      "lineId": "Component-Three",
      "cards": [],
      "collapsed": true
    },
    {
      "id": "Component-Three/done",
      "title": "Done",
      "type": "done",
      "lineId": "Component-Three",
      "cards": [
        {
          "id": 10,
          "title": "Card Page",
          "type": "enhancement",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        }
      ],
      "showNewCardInput": false
    }
  ]
}
