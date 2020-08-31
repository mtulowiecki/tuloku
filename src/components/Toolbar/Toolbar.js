import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  setCell as setCellAction,
  solveBoard as solveBoardAction,
  validateBoard as validateBoardAction,
} from 'actions';

import Restart from 'components/Svgs/Restart';
import Check from 'components/Svgs/Check';
import Pencil from 'components/Svgs/Pencil';
import Undo from 'components/Svgs/Undo';
import X from 'components/Svgs/X';

const Wrapper = styled.div`
  margin: 1.5rem 0;
  padding: 0.25rem 0.5rem;
  width: 85%;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.secondary15};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Toolbar = ({
  focusedIndex,
  isPencil,
  togglePencil,
  setCell,
  isSolved,
  solveBoard,
  validateBoard,
}) => (
  <Wrapper>
    <Restart />
    <Check onClick={isSolved ? validateBoard : solveBoard} />
    <Undo />
    <Pencil onClick={togglePencil} isActive={isPencil} />
    <X onClick={() => setCell(focusedIndex, 0)} />
  </Wrapper>
);

Toolbar.propTypes = {
  focusedIndex: PropTypes.number,
  isPencil: PropTypes.bool.isRequired,
  togglePencil: PropTypes.func.isRequired,
  setCell: PropTypes.func.isRequired,
  isSolved: PropTypes.bool,
  solveBoard: PropTypes.func.isRequired,
  validateBoard: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  focusedIndex: null,
  isSolved: false,
};

const mapStateToProps = ({ game, difficulty }) => ({
  isSolved: game[difficulty].isSolved,
});

const mapDispatchToProps = (dispatch) => ({
  setCell: (index, number) => dispatch(setCellAction(index, number)),
  solveBoard: () => dispatch(solveBoardAction()),
  validateBoard: () => dispatch(validateBoardAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
