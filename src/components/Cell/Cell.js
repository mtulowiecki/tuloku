import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
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

  ${({ isInit }) =>
    isInit &&
    css`
      background: radial-gradient(
        circle at center,
        ${({ theme }) => theme.secondary15} 0%,
        ${({ theme }) => theme.secondary15} 55%,
        transparent 56%
      );
      font-weight: 600;
    `};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      background: radial-gradient(
        circle at center,
        ${theme.secondary} 0%,
        ${theme.secondary} 55%,
        transparent 56%
      );
      color: ${theme.primary};
    `};
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
  number,
  predictions,
  isInit,
  isFocusedIndex,
  isFocusedNumber,
  onClick,
}) => (
  <Wrapper
    onClick={onClick}
    isInit={isInit}
    isFocused={isFocusedNumber || isFocusedIndex}
  >
    {number || (
      <Grid>
        {predictions.map((prediction) => (
          <Prediction key={prediction} area={prediction}>
            {prediction}
          </Prediction>
        ))}
      </Grid>
    )}
  </Wrapper>
);

Cell.propTypes = {
  number: PropTypes.number.isRequired,
  predictions: PropTypes.arrayOf(PropTypes.number),
  isInit: PropTypes.bool.isRequired,
  isFocusedIndex: PropTypes.bool.isRequired,
  isFocusedNumber: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Cell.defaultProps = {
  predictions: [],
};

export default Cell;
