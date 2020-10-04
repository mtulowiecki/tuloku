import {
  SET_DIFFICULTY,
  SET_THEME,
  EXIT_GAME,
  SAVE_TIME_RECORD,
  DELETE_TIME_RECORD,
  TOGGLE_SETTING,
  RESTART,
} from 'actions/rootActions';

import Timer from 'easytimer.js';

const initialGameState = {
  isLoading: false,
  gameTimer: new Timer({ startValues: [0, 42, 35, 3, 0] }),
  difficulty: 'easy',
  board: [
    {
      index: 0,
      init: 0,
      user: 3,
      predictions: [],
      solved: 3,
    },
    {
      index: 1,
      init: 7,
      user: 0,
      predictions: [7],
      solved: 7,
    },
    {
      index: 2,
      init: 0,
      user: 4,
      predictions: [],
      solved: 4,
    },
    {
      index: 3,
      init: 0,
      user: 8,
      predictions: [],
      solved: 8,
    },
    {
      index: 4,
      init: 0,
      user: 6,
      predictions: [],
      solved: 6,
    },
    {
      index: 5,
      init: 1,
      user: 0,
      predictions: [],
      solved: 1,
    },
    {
      index: 6,
      init: 0,
      user: 5,
      predictions: [],
      solved: 5,
    },
    {
      index: 7,
      init: 0,
      user: 9,
      predictions: [],
      solved: 9,
    },
    {
      index: 8,
      init: 0,
      user: 2,
      predictions: [],
      solved: 2,
    },
    {
      index: 9,
      init: 0,
      user: 1,
      predictions: [],
      solved: 1,
    },
    {
      index: 10,
      init: 2,
      user: 0,
      predictions: [],
      solved: 2,
    },
    {
      index: 11,
      init: 5,
      user: 0,
      predictions: [1],
      solved: 5,
    },
    {
      index: 12,
      init: 0,
      user: 3,
      predictions: [],
      solved: 3,
    },
    {
      index: 13,
      init: 4,
      user: 0,
      predictions: [],
      solved: 4,
    },
    {
      index: 14,
      init: 0,
      user: 9,
      predictions: [],
      solved: 9,
    },
    {
      index: 15,
      init: 0,
      user: 6,
      predictions: [],
      solved: 6,
    },
    {
      index: 16,
      init: 0,
      user: 7,
      predictions: [],
      solved: 7,
    },
    {
      index: 17,
      init: 8,
      user: 0,
      predictions: [],
      solved: 8,
    },
    {
      index: 18,
      init: 0,
      user: 6,
      predictions: [],
      solved: 6,
    },
    {
      index: 19,
      init: 0,
      user: 8,
      predictions: [],
      solved: 8,
    },
    {
      index: 20,
      init: 0,
      user: 9,
      predictions: [],
      solved: 9,
    },
    {
      index: 21,
      init: 2,
      user: 0,
      predictions: [],
      solved: 2,
    },
    {
      index: 22,
      init: 5,
      user: 0,
      predictions: [],
      solved: 5,
    },
    {
      index: 23,
      init: 0,
      user: 7,
      predictions: [],
      solved: 7,
    },
    {
      index: 24,
      init: 0,
      user: 1,
      predictions: [],
      solved: 1,
    },
    {
      index: 25,
      init: 0,
      user: 3,
      predictions: [],
      solved: 3,
    },
    {
      index: 26,
      init: 4,
      user: 0,
      predictions: [],
      solved: 4,
    },
    {
      index: 27,
      init: 0,
      user: 2,
      predictions: [],
      solved: 2,
    },
    {
      index: 28,
      init: 0,
      user: 1,
      predictions: [],
      solved: 1,
    },
    {
      index: 29,
      init: 3,
      user: 0,
      predictions: [],
      solved: 3,
    },
    {
      index: 30,
      init: 0,
      user: 4,
      predictions: [],
      solved: 4,
    },
    {
      index: 31,
      init: 7,
      user: 0,
      predictions: [],
      solved: 7,
    },
    {
      index: 32,
      init: 0,
      user: 5,
      predictions: [],
      solved: 5,
    },
    {
      index: 33,
      init: 0,
      user: 8,
      predictions: [],
      solved: 8,
    },
    {
      index: 34,
      init: 6,
      user: 0,
      predictions: [],
      solved: 6,
    },
    {
      index: 35,
      init: 0,
      user: 9,
      predictions: [],
      solved: 9,
    },
    {
      index: 36,
      init: 4,
      user: 0,
      predictions: [],
      solved: 4,
    },
    {
      index: 37,
      init: 0,
      user: 5,
      predictions: [],
      solved: 5,
    },
    {
      index: 38,
      init: 0,
      user: 6,
      predictions: [],
      solved: 6,
    },
    {
      index: 39,
      init: 1,
      user: 0,
      predictions: [],
      solved: 1,
    },
    {
      index: 40,
      init: 0,
      user: 9,
      predictions: [],
      solved: 9,
    },
    {
      index: 41,
      init: 8,
      user: 0,
      predictions: [],
      solved: 8,
    },
    {
      index: 42,
      init: 3,
      user: 0,
      predictions: [],
      solved: 3,
    },
    {
      index: 43,
      init: 2,
      user: 0,
      predictions: [],
      solved: 2,
    },
    {
      index: 44,
      init: 0,
      user: 7,
      predictions: [],
      solved: 7,
    },
    {
      index: 45,
      init: 7,
      user: 0,
      predictions: [],
      solved: 7,
    },
    {
      index: 46,
      init: 9,
      user: 0,
      predictions: [7],
      solved: 9,
    },
    {
      index: 47,
      init: 8,
      user: 0,
      predictions: [8],
      solved: 8,
    },
    {
      index: 48,
      init: 6,
      user: 0,
      predictions: [],
      solved: 6,
    },
    {
      index: 49,
      init: 2,
      user: 0,
      predictions: [2],
      solved: 2,
    },
    {
      index: 50,
      init: 0,
      user: 3,
      predictions: [],
      solved: 3,
    },
    {
      index: 51,
      init: 4,
      user: 0,
      predictions: [],
      solved: 4,
    },
    {
      index: 52,
      init: 1,
      user: 0,
      predictions: [],
      solved: 1,
    },
    {
      index: 53,
      init: 5,
      user: 0,
      predictions: [],
      solved: 5,
    },
    {
      index: 54,
      init: 5,
      user: 0,
      predictions: [3],
      solved: 5,
    },
    {
      index: 55,
      init: 0,
      user: 3,
      predictions: [],
      solved: 3,
    },
    {
      index: 56,
      init: 1,
      user: 0,
      predictions: [],
      solved: 1,
    },
    {
      index: 57,
      init: 0,
      user: 7,
      predictions: [],
      solved: 7,
    },
    {
      index: 58,
      init: 0,
      user: 8,
      predictions: [],
      solved: 8,
    },
    {
      index: 59,
      init: 0,
      user: 2,
      predictions: [],
      solved: 2,
    },
    {
      index: 60,
      init: 9,
      user: 0,
      predictions: [],
      solved: 9,
    },
    {
      index: 61,
      init: 4,
      user: 0,
      predictions: [],
      solved: 4,
    },
    {
      index: 62,
      init: 0,
      user: 6,
      predictions: [],
      solved: 6,
    },
    {
      index: 63,
      init: 0,
      user: 8,
      predictions: [],
      solved: 8,
    },
    {
      index: 64,
      init: 0,
      user: 4,
      predictions: [],
      solved: 4,
    },
    {
      index: 65,
      init: 0,
      user: 2,
      predictions: [],
      solved: 2,
    },
    {
      index: 66,
      init: 0,
      user: 9,
      predictions: [],
      solved: 9,
    },
    {
      index: 67,
      init: 1,
      user: 0,
      predictions: [],
      solved: 1,
    },
    {
      index: 68,
      init: 0,
      user: 6,
      predictions: [],
      solved: 6,
    },
    {
      index: 69,
      init: 7,
      user: 0,
      predictions: [],
      solved: 7,
    },
    {
      index: 70,
      init: 0,
      user: 5,
      predictions: [],
      solved: 5,
    },
    {
      index: 71,
      init: 0,
      user: 3,
      predictions: [],
      solved: 3,
    },
    {
      index: 72,
      init: 0,
      user: 9,
      predictions: [],
      solved: 9,
    },
    {
      index: 73,
      init: 0,
      user: 6,
      predictions: [],
      solved: 6,
    },
    {
      index: 74,
      init: 0,
      user: 7,
      predictions: [],
      solved: 7,
    },
    {
      index: 75,
      init: 0,
      user: 5,
      predictions: [],
      solved: 5,
    },
    {
      index: 76,
      init: 3,
      user: 0,
      predictions: [],
      solved: 3,
    },
    {
      index: 77,
      init: 4,
      user: 0,
      predictions: [],
      solved: 4,
    },
    {
      index: 78,
      init: 2,
      user: 0,
      predictions: [],
      solved: 2,
    },
    {
      index: 79,
      init: 8,
      user: 0,
      predictions: [],
      solved: 8,
    },
    {
      index: 80,
      init: 0,
      user: 1,
      predictions: [],
      solved: 1,
    },
  ],
};

const initialRootState = {
  difficulty: 'easy',
  currentTheme: 'blackWhite',
  gameHistory: { easy: initialGameState },
  timeRecords: {
    easy: [
      {
        time: {
          secondTenths: 0,
          seconds: 32,
          minutes: 8,
          hours: 0,
          days: 0,
        },
        date: new Date(2007, 1, 30, 16, 38, 42, 46),
      },
      {
        time: {
          secondTenths: 0,
          seconds: 38,
          minutes: 28,
          hours: 3,
          days: 0,
        },
        date: new Date(2002, 3, 21, 12, 58, 32, 13),
      },
    ],
    medium: [
      {
        time: {
          secondTenths: 0,
          seconds: 38,
          minutes: 28,
          hours: 3,
          days: 0,
        },
        date: new Date(1993, 10, 24, 14, 22, 34, 53),
      },
    ],
    hard: [
      {
        time: {
          secondTenths: 0,
          seconds: 32,
          minutes: 8,
          hours: 0,
          days: 0,
        },
        date: new Date(1338, 1, 30, 14, 58, 32, 13),
      },
      {
        time: {
          secondTenths: 0,
          seconds: 38,
          minutes: 28,
          hours: 3,
          days: 0,
        },
        date: new Date(1958, 5, 21, 12, 58, 32, 13),
      },
    ],
  },
  settings: {
    remainingDigits: true,
    higlightCell: true,
  },
};

const rootReducer = (state = initialRootState, action) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload.difficulty,
      };

    case SET_THEME:
      return {
        ...state,
        currentTheme: action.payload.theme,
      };

    case EXIT_GAME:
      return {
        ...state,
        gameHistory: {
          ...state.gameHistory,
          [state.difficulty]: state.isFinished ? null : action.payload.game,
        },
        isFinished: false,
      };

    case SAVE_TIME_RECORD:
      return {
        ...state,
        gameHistory: {
          ...state.gameHistory,
          [state.difficulty]: null,
        },
        timeRecords: {
          ...state.timeRecords,
          [action.payload.difficulty]: [
            ...state.timeRecords[action.payload.difficulty],
            action.payload.timeRecord,
          ].sort((a, b) => {
            if (a.time.days > b.time.days) return 1;
            if (a.time.days === b.time.days) {
              if (a.time.hours > b.time.hours) return 1;
              if (a.time.hours === b.time.hours) {
                if (a.time.minutes > b.time.minutes) return 1;
                if (a.time.minutes === b.time.minutes) {
                  if (a.time.seconds > b.time.seconds) return 1;
                  return -1;
                }
                return -1;
              }
              return -1;
            }
            return -1;
          }),
        },
        isFinished: true,
      };

    case DELETE_TIME_RECORD:
      return {
        ...state,
        timeRecords: {
          ...state.timeRecords,
          [state.difficulty]: state.timeRecords[state.difficulty].filter(
            (timeRecord) => timeRecord.date !== action.payload.date
          ),
        },
      };

    case TOGGLE_SETTING:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.setting]: !state.settings[action.payload.setting],
        },
      };
    case RESTART:
      return initialRootState;
    default:
      return state;
  }
};

export default rootReducer;
