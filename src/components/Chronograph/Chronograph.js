import React, { useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import PlayPauseButton from 'components/Svgs/PlayPauseButton';
import TimeRecord from 'components/TimeRecord/TimeRecord';

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const StyledPlayPauseButton = styled(PlayPauseButton)`
  margin-left: 0.25rem;
  padding: 0.35rem;
  height: 1.35rem;
  width: 1.35rem;
  flex-shrink: 0;
`;

const Chronograph = ({ gameTimer }) => {
  const [time, setTime] = useReducer((_, updatedTime) => ({ ...updatedTime }), {
    days: null,
    hours: null,
    minutes: null,
    secondTenths: null,
    seconds: 0,
  });
  const [isRunning, setRunning] = useState(true);
  const [hasStopped, setStopped] = useState(false);

  useEffect(() => {
    const updateTimer = () => setTime(gameTimer.getTimeValues());
    const toggleRunning = () => setRunning(gameTimer.isRunning());
    const handleStop = () => {
      setStopped(true);
      setRunning(false);
    };

    gameTimer.addEventListener('secondsUpdated', updateTimer);
    gameTimer.addEventListener('started', toggleRunning);
    gameTimer.addEventListener('paused', toggleRunning);
    gameTimer.addEventListener('stopped', handleStop);
    return () => {
      gameTimer.removeEventListener('secondsUpdated', updateTimer);
      gameTimer.removeEventListener('started', toggleRunning);
      gameTimer.removeEventListener('paused', toggleRunning);
      gameTimer.removeEventListener('stoped', handleStop);
    };
  }, [gameTimer]);

  return (
    <Wrapper
      onTap={isRunning ? gameTimer.pause : !hasStopped && gameTimer.start}
      animate={isRunning ? 'pause' : 'play'}
    >
      <TimeRecord time={time} />
      <StyledPlayPauseButton />
    </Wrapper>
  );
};

Chronograph.propTypes = {
  gameTimer: PropTypes.shape({
    start: PropTypes.func,
    pause: PropTypes.func,
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    isRunning: PropTypes.func,
    getTimeValues: PropTypes.func,
  }),
};

Chronograph.defaultProps = {
  gameTimer: null,
};

const mapStateToProps = ({
  game: {
    present: { gameTimer },
  },
}) => ({ gameTimer });

export default connect(mapStateToProps)(Chronograph);
