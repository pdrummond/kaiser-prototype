export const sampleState = {
  "client": {
    "currentUsername": "pdrummond",
    "page": {
      "current": "board",
      "cardId": null,
      "columnId": "test/testing"
    }
  },
  "settings": {
    "currentCardNumber": 21,
    "showLineSummaryBadges": false
  },
  "board": {
    "id": "board1",
    "title": "default",
    "members": [
      {
        "username": "pdrummond",
        "imageUrl": "/images/pdrummond.png"
      },
      {
        "username": "jswan",
        "imageUrl": "/images/john_swan.png"
      }
    ]
  },
  "lines": [
    {
      "id": "backlog",
      "title": "Backlog",
      "type": "backlog",
      "expanded": true,
      "columnIds": [
        "backlog/incoming",
        "backlog/triage",
        "backlog/accepted",
        "backlog/rejected",
        "backlog/out-of-scope"
      ]
    },
    {
      "id": "dev",
      "title": "Development",
      "type": "component",
      "expanded": true,
      "columnIds": [
        "dev/todo",
        "dev/doing",
        "dev/paused",
        "dev/blocked",
        "dev/review"
      ]
    },
    {
      "id": "test",
      "title": "Test",
      "type": "test",
      "expanded": true,
      "columnIds": [
        "test/ready",
        "test/testing",
        "test/paused"
      ]
    },
    {
      "id": "done",
      "title": "Done",
      "type": "done",
      "expanded": true,
      "columnIds": [
        "done/ready",
        "done/release1-0",
        "done/release1-1",
        "done/release2-0"
      ]
    },
    {
      "id": "scratch",
      "title": "Scratch",
      "type": "scratch",
      "expanded": false,
      "columnIds": [
        "scratch/requests",
        "scratch/ideas",
        "scratch/notes",
        "scratch/trash"
      ]
    }
  ],
  "columns": [
    {
      "id": "backlog/incoming",
      "lineId": "backlog",
      "title": "Incoming",
      "backgroundColor": "#F98295",
      "cards": [
        {
          "id": 17,
          "title": "There is a bug with the line not expanding correctly.",
          "type": "bug",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        },
        {
          "id": 18,
          "title": "I can't figure out how to use this thing.",
          "type": "bug",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [
            {
              "id": "76c28d40-9305-11e6-87af-c9d5c1334660",
              "username": "jswan",
              "text": "Is this just a more complicated version of Trello?",
              "createdAt": "2016-10-15T18:30:35.796Z"
            },
            {
              "id": "81e7a3e0-9305-11e6-87af-c9d5c1334660",
              "username": "jswan",
              "text": "Why is my data only local?  Is this just a demo or something?",
              "createdAt": "2016-10-15T18:30:54.494Z"
            }
          ],
          "assignees": []
        }
      ],
      "showNewCardInput": false
    },
    {
      "id": "backlog/triage",
      "lineId": "backlog",
      "title": "Triage",
      "backgroundColor": "#F76F84",
      "cards": [
        {
          "id": 15,
          "title": "Drag and drop not working",
          "type": "bug",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [
            {
              "id": "2c4e3020-9305-11e6-87af-c9d5c1334660",
              "username": "pdrummond",
              "text": "Going to need a bit more information please.  Leaving in TRIAGE for now, will reject this if no response within a few days.",
              "createdAt": "2016-10-15T18:28:30.882Z"
            }
          ],
          "assignees": []
        }
      ]
    },
    {
      "id": "backlog/accepted",
      "title": "Accepted",
      "lineId": "backlog",
      "backgroundColor": "#F36077",
      "cards": [
        {
          "id": 4,
          "title": "Ability to Maximise all columns",
          "type": "task",
          "todos": [],
          "bugs": [],
          "comments": [
            {
              "id": "ef01b3f0-9303-11e6-87af-c9d5c1334660",
              "username": "",
              "text": "Not sure about this.  Do you know what's involved @jswan?",
              "createdAt": "2016-10-15T18:19:38.543Z"
            }
          ],
          "assignees": []
        }
      ]
    },
    {
      "id": "backlog/rejected",
      "title": "Rejected",
      "lineId": "backlog",
      "backgroundColor": "#E65068",
      "cards": [
        {
          "id": 10,
          "title": "Support for powerups",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        },
        {
          "id": 16,
          "title": "There is a bug",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [
            {
              "id": "3a3f3800-9305-11e6-87af-c9d5c1334660",
              "username": "jswan",
              "text": "Nothing works",
              "createdAt": "2016-10-15T18:28:54.272Z"
            },
            {
              "id": "44362ee0-9305-11e6-87af-c9d5c1334660",
              "username": "pdrummond",
              "text": "Not enough info, sorry ;-)",
              "createdAt": "2016-10-15T18:29:10.990Z"
            },
            {
              "id": "47975b40-9305-11e6-87af-c9d5c1334660",
              "username": "pdrummond",
              "text": "Rejecting.",
              "createdAt": "2016-10-15T18:29:16.660Z"
            }
          ],
          "assignees": []
        }
      ]
    },
    {
      "id": "backlog/out-of-scope",
      "lineId": "backlog",
      "title": "Out of Scope",
      "backgroundColor": "#CB3F55",
      "cards": [
        {
          "id": 9,
          "title": "Support for changing background colours",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        }
      ]
    },
    {
      "id": "dev/todo",
      "title": "Todo",
      "lineId": "dev",
      "backgroundColor": "#CB3F55",
      "cards": [
        {
          "id": 7,
          "title": "Implement Filter Sidebar",
          "type": "enhancement",
          "editMode": false,
          "todos": [
            {
              "id": "45fb2ce0-9304-11e6-87af-c9d5c1334660",
              "title": "Sidebar UI"
            },
            {
              "id": "525dcc90-9304-11e6-87af-c9d5c1334660",
              "title": "Ability to filter based on card type"
            },
            {
              "id": "56a86e90-9304-11e6-87af-c9d5c1334660",
              "title": "Ability to filter based on assignee"
            }
          ],
          "bugs": [],
          "comments": [],
          "assignees": []
        },
        {
          "id": 8,
          "title": "Implement Activity Sidebar",
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
      "id": "dev/doing",
      "title": "Doing",
      "lineId": "dev",
      "backgroundColor": "#CB3F55",
      "cards": [
        {
          "id": 11,
          "title": "Implement Comments",
          "type": "task",
          "editMode": false,
          "todos": [
            {
              "id": "ad325cd0-9304-11e6-87af-c9d5c1334660",
              "title": "Ability to add comments to card",
              "done": true
            },
            {
              "id": "b1fdc790-9304-11e6-87af-c9d5c1334660",
              "title": "Comment should show username and user image",
              "done": true
            },
            {
              "id": "b4fd24e0-9304-11e6-87af-c9d5c1334660",
              "title": "Add message box for adding comments",
              "done": true
            }
          ],
          "bugs": [
            {
              "id": "bb7925d0-9304-11e6-87af-c9d5c1334660",
              "title": "Message box should be textarea - it looks wrong as an input"
            },
            {
              "id": "c847f4d0-9304-11e6-87af-c9d5c1334660",
              "title": "Comment list should scroll down when a new comment is added."
            }
          ],
          "comments": [],
          "assignees": [
            {
              "username": "pdrummond"
            }
          ]
        }
      ]
    },
    {
      "id": "dev/paused",
      "title": "Paused",
      "lineId": "dev",
      "backgroundColor": "#CB3F55",
      "cards": [
        {
          "id": 6,
          "title": "Turn prototype into real app",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": [
            {
              "username": "jswan"
            }
          ]
        }
      ]
    },
    {
      "id": "dev/blocked",
      "title": "Blocked",
      "lineId": "dev",
      "backgroundColor": "#CB3F55",
      "cards": [
        {
          "id": 5,
          "title": "Sync state to server so board can be shared with other users",
          "type": "enhancement",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [
            {
              "id": "7823e770-9304-11e6-87af-c9d5c1334660",
              "username": "pdrummond",
              "text": "This is blocked because it's just too darn difficult",
              "createdAt": "2016-10-15T18:23:28.615Z"
            }
          ],
          "assignees": [
            {
              "username": "pdrummond"
            },
            {
              "username": "jswan"
            }
          ]
        }
      ],
      "showNewCardInput": false
    },
    {
      "id": "dev/review",
      "title": "Review",
      "lineId": "dev",
      "backgroundColor": "#CB3F55",
      "cards": [
        {
          "id": 12,
          "title": "Better sample data",
          "type": "task",
          "editMode": false,
          "todos": [
            {
              "id": "ea633020-9304-11e6-87af-c9d5c1334660",
              "title": "Come up with a much better scenario",
              "done": true
            },
            {
              "id": "ed03f2b0-9304-11e6-87af-c9d5c1334660",
              "title": "Show more features of the app",
              "done": true
            }
          ],
          "bugs": [
            {
              "id": "f529d310-9304-11e6-87af-c9d5c1334660",
              "title": "sample data has the wrong starting card number",
              "done": true
            }
          ],
          "comments": [],
          "assignees": []
        }
      ]
    },
    {
      "id": "test/ready",
      "title": "Test Ready",
      "lineId": "test",
      "backgroundColor": "#86E7A0",
      "cards": [
        {
          "id": 19,
          "title": "Ability to mark todos as done",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        },
        {
          "id": 20,
          "title": "Ability to mark bugs as done",
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
      "id": "test/testing",
      "title": "Testing",
      "lineId": "test",
      "backgroundColor": "#64D281",
      "cards": [
        {
          "id": 21,
          "title": "Ability to add comments",
          "type": "task",
          "editMode": false,
          "todos": [
            {
              "id": "19abb8b0-9306-11e6-bd86-c195c84b6c4e",
              "title": "Add message box to card page",
              "done": true
            },
            {
              "id": "24123a40-9306-11e6-bd86-c195c84b6c4e",
              "title": "Show comment list on card page",
              "done": true
            },
            {
              "id": "2a0bebd0-9306-11e6-bd86-c195c84b6c4e",
              "title": "Add comment to list when user presses ENTER in the message box",
              "done": true
            }
          ],
          "bugs": [
            {
              "id": "0c2dbdf0-9306-11e6-bd86-c195c84b6c4e",
              "title": "Comment not created on ENTER"
            }
          ],
          "comments": [
            {
              "id": "069454d0-9306-11e6-bd86-c195c84b6c4e",
              "username": "jswan",
              "text": "Okay, I can see the comment box in the card page, but when I press ENTER it doesn't add a comment.  Adding a bug for this.",
              "createdAt": "2016-10-15T18:34:37.085Z"
            },
            {
              "id": "13a62040-9306-11e6-bd86-c195c84b6c4e",
              "username": "jswan",
              "text": "Going to test this a bit more then I'll pass it back to you @pdrummond to fix the bugs.",
              "createdAt": "2016-10-15T18:34:59.012Z"
            }
          ],
          "assignees": [
            {
              "username": "jswan"
            }
          ]
        }
      ]
    },
    {
      "id": "test/paused",
      "title": "Paused",
      "lineId": "test",
      "backgroundColor": "#48BA66",
      "cards": []
    },
    {
      "id": "done/ready",
      "title": "Release Ready",
      "lineId": "done",
      "backgroundColor": "#E485D2",
      "cards": [
        {
          "id": 13,
          "title": "Ability to collapse all lines",
          "type": "task",
          "editMode": false,
          "todos": [],
          "bugs": [],
          "comments": [],
          "assignees": []
        },
        {
          "id": 14,
          "title": "Ability to Expand all lines",
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
      "id": "done/release1-0",
      "title": "Release 1.0",
      "lineId": "done",
      "backgroundColor": "#CD61B8",
      "cards": [
        {
          "id": 3,
          "title": "Implement Board/Lines",
          "type": "enhancement",
          "editMode": false,
          "todos": [
            {
              "id": "90bab940-9303-11e6-87af-c9d5c1334660",
              "title": "Board UI",
              "done": true
            },
            {
              "id": "92459f00-9303-11e6-87af-c9d5c1334660",
              "title": "Line UI",
              "done": true
            },
            {
              "id": "95fc8c80-9303-11e6-87af-c9d5c1334660",
              "title": "Ability to expand/collapse lines",
              "done": true
            },
            {
              "id": "994af430-9303-11e6-87af-c9d5c1334660",
              "title": "Ability to create components",
              "done": true
            }
          ],
          "bugs": [
            {
              "id": "a67d6700-9303-11e6-87af-c9d5c1334660",
              "title": "Line is not expanding properly",
              "done": true
            }
          ],
          "comments": [
            {
              "id": "ac941670-9303-11e6-87af-c9d5c1334660",
              "username": "",
              "text": "This is in progress",
              "createdAt": "2016-10-15T18:17:47.095Z"
            }
          ],
          "assignees": []
        },
        {
          "id": 2,
          "title": "Implement Columns",
          "type": "enhancement",
          "todos": [
            {
              "id": "bd432ce0-9303-11e6-87af-c9d5c1334660",
              "title": "Column UI",
              "done": true
            },
            {
              "id": "c0d7ec60-9303-11e6-87af-c9d5c1334660",
              "title": "Backlog columns",
              "done": true
            }
          ],
          "bugs": [],
          "comments": [],
          "assignees": []
        },
        {
          "id": 1,
          "title": "Implement Card Items",
          "type": "enhancement",
          "todos": [
            {
              "id": "c964a4e0-9303-11e6-87af-c9d5c1334660",
              "title": "Card UI",
              "done": true
            },
            {
              "id": "cdeb8c90-9303-11e6-87af-c9d5c1334660",
              "title": "Ability to MOVE CARDS to new columns",
              "done": true
            },
            {
              "id": "d51be960-9303-11e6-87af-c9d5c1334660",
              "title": "Ability to REORDER cards within the same column",
              "done": true
            }
          ],
          "bugs": [
            {
              "id": "e19852a0-9303-11e6-87af-c9d5c1334660",
              "title": "Move card fails and causes corrupt state",
              "done": true
            }
          ],
          "comments": [],
          "assignees": []
        }
      ]
    },
    {
      "id": "done/release1-1",
      "title": "Release 1.1",
      "lineId": "done",
      "backgroundColor": "#B3459E",
      "cards": []
    },
    {
      "id": "done/release2-0",
      "title": "Release 2.0",
      "lineId": "done",
      "backgroundColor": "#9c3689",
      "cards": []
    },
    {
      "id": "scratch/requests",
      "title": "Feature Requests",
      "lineId": "scratch",
      "backgroundColor": "#FFC7AA",
      "cards": []
    },
    {
      "id": "scratch/ideas",
      "title": "Ideas",
      "lineId": "scratch",
      "backgroundColor": "#D48E6A",
      "cards": []
    },
    {
      "id": "scratch/notes",
      "title": "Notes",
      "lineId": "scratch",
      "backgroundColor": "#AA5F39",
      "cards": []
    },
    {
      "id": "scratch/trash",
      "title": "Trash",
      "backgroundColor": "#803915",
      "cards": []
    }
  ]
}
