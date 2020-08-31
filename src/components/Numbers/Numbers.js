import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  setCell as setCellAction,
  setPrediction as setPredictionAction,
} from 'actions';

const Wrapper = styled.div`
  width: 100%;
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
const Button = styled.button`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  font-size: 1rem;
  font-weight: 700;
  border: solid ${({ theme }) => theme.secondary15} 2px;
  border-radius: 50%;
`;

const Numbers = ({
  isPencil,
  focusedIndex,
  focusedNumber,
  setNumber,
  setCell,
  setPrediction,
}) => {
  const handleNumberClick = (number) => {
    setNumber(number);
    if (!isPencil) {
      setCell(focusedIndex, number);
    } else {
      setPrediction(focusedIndex, number);
    }
  };

  return (
    <Wrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
        <>
          <Square>
            <Button
              key={number}
              isFocusedNumber={number === focusedNumber}
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </Button>
          </Square>
          <span />
        </>
      ))}
    </Wrapper>
  );
};

Numbers.propTypes = {
  isPencil: PropTypes.bool.isRequired,
  focusedIndex: PropTypes.number,
  focusedNumber: PropTypes.number,
  setNumber: PropTypes.func.isRequired,
  setCell: PropTypes.func.isRequired,
  setPrediction: PropTypes.func.isRequired,
};

Numbers.defaultProps = {
  focusedIndex: null,
  focusedNumber: null,
};

const mapDispatchToProps = (dispatch) => ({
  setCell: (index, number) => dispatch(setCellAction(index, number)),
  setPrediction: (index, number) =>
    dispatch(setPredictionAction(index, number)),
});

export default connect(null, mapDispatchToProps)(Numbers);
