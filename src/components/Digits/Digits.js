import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  setNumbers as setNumbersAction,
  setCell as setCellAction,
  setPrediction as setPredictionAction,
} from 'actions/gameActions';

import Button from 'components/Button/Button';

const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(9, 1fr);
  justify-items: center;
`;
const Square = styled.div`
  position: relative;
  width: 100%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
const StyledButton = styled(Button)`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Digit = styled.span`
  font-weight: 700;
`;

const Remaining = styled.span`
  fon-weight: 300;
  font-size: 0.75rem;
`;

const Digits = ({
  isPencil,
  focusedIndex,
  remainingDigits,
  board,
  setNumbers,
  setCell,
  setPrediction,
}) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const [digits, setDigits] = useState(
    new Array(9).fill().map((_, index) => ({ digit: index + 1, remaining: 0 }))
  );

  const handleClick = (input) => {
    setNumbers(focusedIndex, input);
    if (!isPencil) {
      setCell(focusedIndex, input);
    } else {
      setPrediction(focusedIndex, input);
    }
  };

  useEffect(() => {
    if (!remainingDigits) return;
    const countRemainingDigits = (digit) =>
      9 - board.filter(({ init, user }) => digit === (init || user)).length;

    setDigits(
      new Array(9).fill(0).map((_, index) => ({
        digit: index + 1,
        remaining: countRemainingDigits(index + 1),
      }))
    );
  }, [board, remainingDigits]);

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (!Number.isNaN(parseInt(e.key, 10))) handleClick(parseInt(e.key, 10));
    };
    if (!isMobile) {
      document.addEventListener('keyup', handleKeyUp);
    }
    return () => document.removeEventListener('keyup', handleKeyUp);
  });

  return (
    <Wrapper>
      {digits.map(({ digit, remaining }) => (
        <React.Fragment key={digit}>
          <Square>
            <StyledButton
              name="digit"
              onTap={() => handleClick(digit)}
              secondary
            >
              <Digit>{digit}</Digit>
              {remainingDigits && <Remaining>{remaining}</Remaining>}
            </StyledButton>
          </Square>
          <span />
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

Digits.propTypes = {
  isPencil: PropTypes.bool.isRequired,
  focusedIndex: PropTypes.number,
  remainingDigits: PropTypes.bool.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      init: PropTypes.number.isRequired,
      user: PropTypes.number,
      predictions: PropTypes.arrayOf(PropTypes.number),
      solved: PropTypes.number,
    })
  ).isRequired,
  setNumbers: PropTypes.func.isRequired,
  setCell: PropTypes.func.isRequired,
  setPrediction: PropTypes.func.isRequired,
};

Digits.defaultProps = {
  focusedIndex: null,
};

const mapStateToProps = ({
  root: {
    settings: { remainingDigits },
  },
  game: {
    present: {
      numbers: { focusedIndex },
      board,
    },
  },
}) => ({
  focusedIndex,
  remainingDigits,
  board: remainingDigits ? board : [],
});

const mapDispatchToProps = (dispatch) => ({
  setNumbers: (index, number) => dispatch(setNumbersAction(index, number)),
  setCell: (index, number) => dispatch(setCellAction(index, number)),
  setPrediction: (index, number) =>
    dispatch(setPredictionAction(index, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Digits);
