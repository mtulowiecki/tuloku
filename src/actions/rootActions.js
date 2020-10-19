export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_THEME = 'SET_THEME';
export const EXIT_GAME = 'EXIT_GAME';
export const SAVE_TIME_RECORD = 'SAVE_TIME_RECORD';
export const DELETE_TIME_RECORD = 'DELETE_TIME_RECORD';
export const TOGGLE_SETTING = 'TOGGLE_SETTING';
export const RESTART = 'RESTART';

export const setDifficulty = (difficulty) => ({
  type: SET_DIFFICULTY,
  payload: { difficulty },
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: { theme },
});

export const exitGame = () => (dispatch, getState) => {
  if (!getState().game.present.isLoading) {
    getState().game.present.gameTimer.pause();
    dispatch({
      type: EXIT_GAME,
      payload: {
        game: getState().game.present,
      },
    });
  }
};

export const saveTimeRecord = () => (dispatch, getState) => {
  dispatch({
    type: SAVE_TIME_RECORD,
    payload: {
      difficulty: getState().game.present.difficulty,
      timeRecord: {
        time: { ...getState().game.present.gameTimer.getTimeValues() },
        date: new Date(),
      },
    },
  });
  getState().game.present.gameTimer.stop();
};

export const deleteTimeRecord = (date) => ({
  type: DELETE_TIME_RECORD,
  payload: { date },
});

export const toggleSetting = (setting) => ({
  type: TOGGLE_SETTING,
  payload: { setting },
});

export const restart = () => ({
  type: RESTART,
});
