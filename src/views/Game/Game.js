import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { motion, useAnimation, useCycle } from 'framer-motion';
import { fetchGame as fetchGameAction } from 'actions/gameActions';

import FinishModal from 'components/FinishModal/FinishModal';
import Loader from 'components/Loader/Loader';
import Board from 'components/Board/Board';
import Digits from 'components/Digits/Digits';
import Toolbar from 'components/Toolbar/Toolbar';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  padding-top: 4rem;
  display: grid;
  grid-template-rows: 1fr auto auto;
  place-items: center;

  ${({ isBlured }) =>
    isBlured &&
    css`
      filter: blur(4px);
    `}
`;

const Game = ({ isLoading, gameTimer, errorMessage, fetchGame }) => {
  const [isBlured, setBlured] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [isPencil, togglePencil] = useCycle(false, true);

  const gameControls = useAnimation();

  useEffect(() => {
    const handleBlur = () => setBlured(!gameTimer.isRunning());
    const handleFinish = () => setFinished(true);

    if (gameTimer !== null) {
      gameTimer.start();
      gameTimer.addEventListener('started', handleBlur);
      gameTimer.addEventListener('paused', handleBlur);
      gameTimer.addEventListener('stopped', handleFinish);
    }

    return () => {
      if (gameTimer !== null) {
        gameTimer.pause();
        gameTimer.removeEventListener('started', handleBlur);
        gameTimer.removeEventListener('paused', handleBlur);
        gameTimer.removeEventListener('stoped', handleFinish);
      }
    };
  }, [gameTimer]);

  return isLoading ? (
    <Loader errorMessage={errorMessage} onRetry={fetchGame} />
  ) : (
    <>
      <FinishModal isVisible={isFinished} />
      <Wrapper animate={gameControls} isBlured={isBlured}>
        <Board />
        <Digits isPencil={isPencil} />
        <Toolbar
          isPencil={isPencil}
          togglePencil={togglePencil}
          gameControls={gameControls}
        />
      </Wrapper>
    </>
  );
};

Game.propTypes = {
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  gameTimer: PropTypes.shape({
    start: PropTypes.func,
    pause: PropTypes.func,
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    isRunning: PropTypes.func,
    getTimeValues: PropTypes.func,
  }),
  fetchGame: PropTypes.func.isRequired,
};

Game.defaultProps = {
  errorMessage: '',
  isLoading: true,
  gameTimer: null,
};

const mapStateToProps = ({
  game: {
    present: { errorMessage, isLoading, gameTimer },
  },
}) => ({
  errorMessage,
  isLoading,
  gameTimer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGame: () => dispatch(fetchGameAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
