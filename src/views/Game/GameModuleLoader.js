import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import getGameModule from 'store/gameModule';
import {
  fetchGame as fetchGameAction,
  loadGame as loadGameAction,
} from 'actions/gameActions';
import Game from './Game';

const GameModuleLoader = ({ location, fetchGame, loadGame }) => {
  useEffect(() => {
    if (location.state)
      if (location.state.continuation) {
        loadGame();
        return;
      }
    fetchGame();
  });
  return (
    <DynamicModuleLoader modules={[getGameModule()]}>
      <Game />
    </DynamicModuleLoader>
  );
};

GameModuleLoader.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ continuation: PropTypes.bool }),
  }).isRequired,
  fetchGame: PropTypes.func.isRequired,
  loadGame: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loadGame: () => dispatch(loadGameAction()),
  fetchGame: () => dispatch(fetchGameAction()),
});

export default connect(null, mapDispatchToProps)(GameModuleLoader);
