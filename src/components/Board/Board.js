import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Cell from 'components/Cell/Cell';

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(3, 1fr) 2px repeat(3, 1fr) 2px repeat(3, 1fr);

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    bottom: 0;
    left: -1px;
    right: 0;
    border: solid ${({ theme }) => theme.primary} 1px;
  }
`;

const Line = styled.hr`
  width: 100%;
  height: 0;
  border: solid ${({ theme }) => theme.secondary} 1px;
  margin: 0;
  grid-column: 1/-1;
  grid-row: ${({ row }) => row};
`;

const Board = ({ board, focusedIndex, focusedNumber, setIndex, setNumber }) => {
  return (
    <Wrapper>
      <Content>
        {board.map(({ index, init, predictions, user, solved }) => {
          const number = init || user;
          return (
            <Cell
              key={index}
              number={number}
              predictions={predictions}
              isInit={!!init}
              isFocusedIndex={focusedIndex === index}
              isFocusedNumber={focusedNumber !== 0 && focusedNumber === number}
              isWrong={solved === number}
              onClick={() => {
                setIndex(index);
                if (number) {
                  setNumber(number);
                }
              }}
            />
          );
        })}
        <Line row={4} />
        <Line row={8} />
      </Content>
    </Wrapper>
  );
};

Board.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      init: PropTypes.number.isRequired,
      predictions: PropTypes.arrayOf(PropTypes.number),
      user: PropTypes.number,
      solved: PropTypes.number,
    })
  ).isRequired,
  focusedIndex: PropTypes.number,
  setIndex: PropTypes.func.isRequired,
  focusedNumber: PropTypes.number,
  setNumber: PropTypes.func.isRequired,
};

Board.defaultProps = {
  focusedIndex: null,
  focusedNumber: null,
};

export default Board;
