import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { setNumbers as setNumbersAction } from 'actions/gameActions';

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  &:nth-child(9n + 3),
  &:nth-child(9n + 6) {
    border-right: solid ${({ theme }) => theme.secondary} 1px;
  }

  &:nth-child(9n + 4),
  &:nth-child(9n + 7) {
    border-left: solid ${({ theme }) => theme.secondary} 1px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.secondary15};
    z-index: -1;
  }

  &::before {
    top: 20%;
    bottom: 20%;
    left: -1px;
    right: 100%;
  }

  &::after {
    left: 20%;
    right: 20%;
    top: -1px;
    bottom: 100%;
  }
`;

const Circle = styled(motion.div)`
  position: absolute;
  height: 80%;
  width: 80%;
  border-radius: 50%;
  z-index: -1;
`;

const Grid = styled.div`
  height: 80%;
  width: 80%;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  place-items: center;
`;

const Prediction = styled.div`
  margin: 0;
  font-size: 45%;

  &:first-child,
  &:nth-child(7) {
    grid-column: 2;
  }
  &:nth-child(3) {
    grid-column: 1;
  }
`;

const Cell = ({
  init,
  user,
  predictions,
  isFocusedIndex,
  isFocusedNumber,
  isInvalid,
  setNumbers,
  clearNumbers,
  theme,
}) => {
  const handleCellClick = isFocusedIndex ? clearNumbers : setNumbers;

  const wrapperControls = useAnimation();

  const wrapperVariants = {
    active: {
      color: theme.primary,
    },
    normal: init
      ? {
          color: theme.secondary,
          fontWeight: 600,
        }
      : {
          color: theme.secondary,
        },
  };

  const circleVariants = {
    active: () =>
      isFocusedIndex
        ? {
            backgroundColor: theme.secondary,
            scale: 1,
          }
        : {
            backgroundColor: theme.secondary60,
            scale: 1,
          },
    normal: init
      ? {
          backgroundColor: theme.secondary15,
          scale: 1,
        }
      : {
          scale: 0,
        },
  };

  const contentVariants = {
    validation: () => ({
      x: isInvalid ? [null, -4, 4, -4, 4, 0] : null,
    }),
  };

  const wrapperTransition = {
    duration: 0.25,
    ease: 'linear',
  };

  const circleTransition = {
    duration: 0.25,
    ease: 'linear',
  };

  useEffect(() => {
    if (isFocusedIndex || isFocusedNumber) wrapperControls.start('active');
    else wrapperControls.start('normal');

    return () => wrapperControls.stop();
  }, [theme, isFocusedIndex, isFocusedNumber, wrapperControls]);

  return (
    <Wrapper
      onClick={handleCellClick}
      animate={wrapperControls}
      variants={wrapperVariants}
      transition={wrapperTransition}
    >
      <Circle variants={circleVariants} transition={circleTransition} />
      <motion.div variants={contentVariants}>
        {init || user || (
          <Grid>
            {predictions.map((prediction) => (
              <Prediction key={prediction}>{prediction}</Prediction>
            ))}
          </Grid>
        )}
      </motion.div>
    </Wrapper>
  );
};

Cell.propTypes = {
  init: PropTypes.number.isRequired,
  user: PropTypes.number.isRequired,
  predictions: PropTypes.arrayOf(PropTypes.number),
  isFocusedIndex: PropTypes.bool.isRequired,
  isFocusedNumber: PropTypes.bool.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  setNumbers: PropTypes.func.isRequired,
  clearNumbers: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
};

Cell.defaultProps = {
  predictions: [],
};

const mapStateToProps = (
  {
    root: {
      settings: { highlightCell },
    },
    game: {
      present: {
        numbers: { focusedIndex, focusedNumber },
      },
    },
  },
  { index, init, user, solved }
) => {
  const isFocusedIndex = index === focusedIndex;
  const isFocusedNumber = highlightCell && focusedNumber === (init || user);
  const isInvalid = !init && user !== solved;
  return {
    isFocusedIndex,
    isFocusedNumber,
    isInvalid,
  };
};

const mapDispatchToProps = (dispatch, { index, init, user }) => ({
  setNumbers: () => dispatch(setNumbersAction(index, init || user)),
  clearNumbers: () => dispatch(setNumbersAction(null, null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Cell));
