import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

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

const Cell = ({ init, user, predictions, custom, onTap, theme }) => {
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
    active: ({ isFocusedIndex }) =>
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
    validation: ({ isInvalid }) => ({
      x: isInvalid ? [null, -4, 4, -4, 4, 0] : null,
    }),
  };

  useEffect(() => {
    if (custom.isFocusedIndex || custom.isFocusedNumber)
      wrapperControls.start('active');
    else wrapperControls.start('normal');
    return () => wrapperControls.stop();
  }, [theme, custom.isFocusedIndex, custom.isFocusedNumber, wrapperControls]);

  return (
    <Wrapper onTap={onTap} animate={wrapperControls} variants={wrapperVariants}>
      <Circle custom={custom} variants={circleVariants} />
      <motion.div custom={custom} variants={contentVariants}>
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
  custom: PropTypes.shape({
    isFocusedIndex: PropTypes.bool.isRequired,
    isFocusedNumber: PropTypes.bool.isRequired,
    isInvalid: PropTypes.bool.isRequired,
  }).isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  onTap: PropTypes.func.isRequired,
};

Cell.defaultProps = {
  predictions: [],
};

export default withTheme(Cell);
