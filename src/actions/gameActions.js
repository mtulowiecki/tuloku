import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const LOAD_GAME = 'LOAD_GAME';
export const SET_CELL = 'SET_CELL';
export const SET_PREDICTION = 'SET_PREDICTION';

export const fetchGame = () => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });

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
    .get('https://sugoku.herokuapp.com/board', {
      params: {
        difficulty: getState().root.difficulty,
      },
    })
    .then(({ data }) => {
      return axios
        .post('https://sugoku.herokuapp.com/solve', encodeParams(data))
        .then(({ data: { difficulty, solution } }) => {
          dispatch({
            type: FETCH_SUCCESS,
            payload: {
              board: [].concat(...data.board),
              solvedBoard: [].concat(...solution),
              difficulty,
            },
          });
        });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: FETCH_FAILURE,
        payload: {
          message: error.message || 'Something went wrong.',
        },
      });
    });
};

export const loadGame = () => (dispatch, getState) => {
  dispatch({
    type: LOAD_GAME,
    payload: {
      game: getState().root.gameHistory[getState().root.difficulty],
    },
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
