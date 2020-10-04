import undoable, { includeAction } from 'redux-undo';
import gameReducer from 'reducers/gameReducer';
import { exitGame } from 'actions/rootActions';
import {
  FETCH_SUCCESS,
  LOAD_GAME,
  SET_CELL,
  SET_PREDICTION,
} from 'actions/gameActions';

function getGameModule() {
  return {
    id: `game-module`,
    reducerMap: {
      game: undoable(gameReducer, {
        filter: includeAction([
          FETCH_SUCCESS,
          LOAD_GAME,
          SET_CELL,
          SET_PREDICTION,
        ]),
      }),
    },
    finalActions: [exitGame()],
  };
}

export default getGameModule;
