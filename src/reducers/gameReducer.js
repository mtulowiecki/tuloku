import Timer from 'easytimer.js';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LOAD_GAME,
  SET_CELL,
  SET_PREDICTION,
} from 'actions/gameActions';

const gameReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        isLoading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        gameTimer: new Timer(),
        difficulty: action.payload.difficulty,
        board: action.payload.board.reduce(
          (obj, init, index) => [
            ...obj,
            {
              index,
              init,
              user: 0,
              predictions: [],
              solved: action.payload.solvedBoard[index],
            },
          ],
          []
        ),
      };

    case FETCH_FAILURE:
      return {
        isLoading: true,
        errorMessage: action.payload.message,
      };

    case LOAD_GAME:
      return action.payload.game;

    case SET_CELL:
      return {
        ...state,
        board: state.board.map((cell) =>
          !cell.init && cell.index !== action.payload.index
            ? cell
            : {
                ...cell,
                user: !cell.init ? action.payload.number : 0,
                predictions: [],
              }
        ),
      };

    case SET_PREDICTION:
      return {
        ...state,
        board: state.board.map((cell) =>
          !cell.init && cell.index !== action.payload.index
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
      };

    default:
      return state;
  }
};

export default gameReducer;
