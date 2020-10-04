import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { setDifficulty as setDifficultyAction } from 'actions/rootActions';

import LeftArrowButton from 'components/Svgs/LeftArrowButton';

const Wrapper = styled.div`
  position: relative;
  width: 15rem;
  height: 2rem;
`;

const StyledButton = styled(motion.button)`
  position: absolute;
  top: 0;
  left: calc(50% - 5rem);
  padding: 0.5rem;
  width: 10rem;
  border: 0;
  border-radius: 1.25rem;
  text-transform: capitalize;
  font-size: 1rem;
  line-height: 100%;
  font-weight: 500;
  background-color: ${({ theme }) => theme.secondary15};
  color: ${({ theme }) => theme.secondary};
  cursor: move;

  ${({ noBackground }) =>
    noBackground &&
    css`
      background-color: transparent;
    `}
`;

const ArrowButton = styled(LeftArrowButton)`
  position: absolute;
  padding: 0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  top: calc(50% - 0.625rem);
  z-index: 2;
  ${({ mirrored }) =>
    mirrored &&
    css`
      right: 0;
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
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Carousele = ({ options, difficulty, setDifficulty, noBackground }) => {
  const initialIndex =
    options.indexOf(difficulty) !== -1 ? options.indexOf(difficulty) : 0;

  const [[option, direction], setOption] = useState([initialIndex, 0]);

  const paginate = (newDirection) => {
    setDifficulty(options[wrap(0, options.length, option + newDirection)]);
    setOption([option + newDirection, newDirection]);
  };

  useEffect(() => {
    setDifficulty(options[initialIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <Wrapper>
      <ArrowButton key="previous" name="previous" onTap={() => paginate(-1)} />
      <AnimatePresence initial={false} custom={direction}>
        <StyledButton
          key={option}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          noBackground={noBackground}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {difficulty}
        </StyledButton>
      </AnimatePresence>
      <ArrowButton mirrored key="next" name="next" onTap={() => paginate(1)} />
    </Wrapper>
  );
};

Carousele.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  noBackground: PropTypes.bool,
};

Carousele.defaultProps = {
  noBackground: false,
};

const mapStateToProps = ({ root: { difficulty } }) => ({ difficulty });

const mapDispatchToProps = (dispatch) => ({
  setDifficulty: (difficulty) => dispatch(setDifficultyAction(difficulty)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousele);
