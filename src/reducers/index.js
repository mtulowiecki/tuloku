import {
  SET_DIFFICULTY,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  SET_CELL,
  SET_PREDICTION,
  SOLVE_REQUEST,
  SOLVE_SUCCESS,
  VALIDATE_BOARD,
  CHANGE_THEME,
} from 'actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload.difficulty,
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        game: {
          ...state.game,
          [state.difficulty]: {
            board: [],
          },
        },
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        game: {
          ...state.game,
          [state.difficulty]: {
            board: action.payload.board.reduce(
              (obj, init, index) => [
                ...obj,
                { index, init, predictions: [], user: 0 },
              ],
              []
            ),
          },
        },
      };
    case SET_CELL:
      return {
        ...state,
        game: {
          ...state.game,
          [state.difficulty]: {
            ...state.game[state.difficulty],
            board: [
              ...state.game[state.difficulty].board.map((cell) =>
                cell.index !== action.payload.index
                  ? cell
                  : {
                      ...cell,
                      user: !cell.init ? action.payload.number : 0,
                      predictions: [],
                    }
              ),
            ],
          },
        },
      };

    case SET_PREDICTION:
      return {
        ...state,
        game: {
          ...state.game,
          [state.difficulty]: {
            ...state.game[state.difficulty],
            board: state.game[state.difficulty].board.map((cell) =>
              cell.index !== action.payload.index
                ? cell
                : {
                    ...cell,
                    user: 0,
                    predictions:
                      !cell.predictions.includes(action.payload.number) &&
                      cell.predictions.length < 8
                        ? [...cell.predictions, action.payload.number].sort()
                        : cell.predictions.filter(
                            (prediction) => prediction !== action.payload.number
                          ),
                  }
            ),
          },
        },
      };
    case SOLVE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SOLVE_SUCCESS:
      return {
        ...state,
        game: {
          ...state.game,
          [state.difficulty]: {
            isSolved: true,
            board: state.game[state.difficulty].board.map((cell, index) => ({
              ...cell,
              solved: action.payload.solvedBoard[index],
              isValid:
                !!cell.init || cell.user === action.payload.solvedBoard[index],
            })),
          },
        },
        isLoading: false,
      };
    case VALIDATE_BOARD:
      return {
        ...state,
        game: {
          ...state.game,
          [state.difficulty]: {
            ...state.game[state.difficulty],
            board: state.game[state.difficulty].board.map((cell) => ({
              ...cell,
              isValid: !!cell.init || cell.user === cell.solved,
            })),
          },
        },
      };

    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.payload.theme,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
