import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { setDifficulty as setDifficultyAction } from 'actions';

import Button from 'components/Button/Button';
import LeftArrow from 'components/Svgs/LeftArrow';

const Wrapper = styled.div`
  position: relative;
  width: 15rem;
  height: 2rem;
  overflow: hidden;
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: calc(50% - 5rem);
  cursor: move;
`;

const ArrowButton = styled(LeftArrow)`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: calc(50% - 0.75rem);
  z-index: 2;
  ${({ right }) =>
    right &&
    css`
      right: 0;
      transform: scaleX(-1);
    `};
`;

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Carousele = ({ setDifficulty }) => {
  const options = ['easy', 'medium', 'hard', 'random'];
  const [[option, direction], setOption] = useState([0, 0]);
  const optionIndex = wrap(0, options.length, option);

  const paginate = (newDirection) => {
    setOption([option + newDirection, newDirection]);
  };

  useEffect(() => {
    setDifficulty(options[optionIndex]);
  }, [setDifficulty, options, optionIndex]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <Wrapper>
      <ArrowButton
        key="previous"
        name="previous"
        onClick={() => paginate(-1)}
      />
      <AnimatePresence initial={false} custom={direction}>
        <StyledButton
          key={option}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {options[optionIndex]}
        </StyledButton>
      </AnimatePresence>
      <ArrowButton right key="next" name="next" onClick={() => paginate(1)} />
    </Wrapper>
  );
};

Carousele.propTypes = {
  setDifficulty: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setDifficulty: (difficulty) => dispatch(setDifficultyAction(difficulty)),
});

export default connect(null, mapDispatchToProps)(Carousele);
