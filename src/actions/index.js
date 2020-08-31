import axios from 'axios';

export const SET_DIFFICULTY = 'SET_DIFFICULTY';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const SET_CELL = 'SET_CELL';

export const SET_PREDICTION = 'SET_PREDICTION';

export const ERASE_CELL = 'ERASE_CELL';

export const SOLVE_REQUEST = 'SOLVE_REQUEST';
export const SOLVE_SUCCESS = 'SOLVE_SUCCESS';
export const SOLVE_FAILURE = 'SOLVE_FAILURE';

export const VALIDATE_BOARD = 'VALIDATE_BOARD';

export const CHANGE_THEME = 'CHANGE_THEME';

export const setDifficulty = (difficulty) => ({
  type: SET_DIFFICULTY,
  payload: {
    difficulty,
  },
});

export const fetchBoard = () => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get('https://sugoku.herokuapp.com/board', {
      params: {
        difficulty: getState().difficulty,
      },
    })
    .then(({ data: { board } }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          board: [].concat(...board),
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const setCell = (index, number) => ({
  type: SET_CELL,
  payload: {
    index,
    number,
  },
});

export const setPrediction = (index, number) => ({
  type: SET_PREDICTION,
  payload: {
    index,
    number,
  },
});

export const solveBoard = () => (dispatch, getState) => {
  dispatch({ type: SOLVE_REQUEST });
  const { game, difficulty } = getState();
  const boardArray = game[difficulty].board.reduce(
    (obj, { init, user }) => [...obj, init || user],
    []
  );
  const data = {
    board: new Array(9).fill().map(() => boardArray.splice(0, 9)),
  };

  const encodeBoard = (board) =>
    board.reduce(
      (result, row, i) =>
        `${result}%5B${encodeURIComponent(row)}%5D${
          i === board.length - 1 ? '' : '%2C'
        }`,
      ''
    );
  const encodeParams = (params) =>
    Object.keys(params)
      .map((key) => `${key}=%5B${encodeBoard(params[key])}%5D`)
      .join('&');

  return axios
    .post('https://sugoku.herokuapp.com/solve', encodeParams(data))
    .then(({ data: { solution } }) => {
      dispatch({
        type: SOLVE_SUCCESS,
        payload: {
          solvedBoard: [].concat(...solution),
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SOLVE_FAILURE });
    });
};

export const validateBoard = () => ({
  type: VALIDATE_BOARD,
  payload: {},
});

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: { theme },
});
