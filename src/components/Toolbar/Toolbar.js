import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import {
  setNumbers as setNumbersAction,
  setCell as setCellAction,
} from 'actions/gameActions';
import { saveTimeRecord as saveTimeRecordAction } from 'actions/rootActions';

import RestartButton from 'components/Svgs/RestartButton';
import CheckButton from 'components/Svgs/CheckButton';
import PencilButton from 'components/Svgs/PencilButton';
import UndoButton from 'components/Svgs/UndoButton';
import XButton from 'components/Svgs/XButton';

const Wrapper = styled.div`
  margin: 1.5rem 0;
  padding: 0.35rem 0.5rem;
  width: 90%;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.secondary15};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Toolbar = ({
  isPencil,
  togglePencil,
  gameControls,
  board,
  canUndo,
  canRedo,
  focusedIndex,
  focusedNumber,
  clearBoard,
  saveTimeRecord,
  undo,
  redo,
  setCell,
  setNumbers,
}) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const handleUndo = canUndo ? undo : null;
  const handleRedo = canRedo ? redo : null;
  const clearCell = () => setCell(focusedIndex, 0);

  const handleCheckClick = () => {
    if (board.every((cell) => cell.init || cell.user === cell.solved)) {
      saveTimeRecord();
    } else {
      gameControls.start('validation');
    }
  };

  useEffect(() => {
    const handleKeyUp = (e) => {
      const setFocusedIndex = (index) => setCell(index, focusedNumber);

      switch (e.key.toUpperCase()) {
        case 'R':
          clearBoard();
          break;
        case 'C':
          handleCheckClick();
          break;
        case 'Z':
          handleUndo();
          break;
        case 'A':
          handleRedo();
          break;
        case 'P':
          togglePencil();
          break;
        case 'X':
          clearCell();
          break;
        case 'ARROWUP':
          if (focusedIndex > 8) setFocusedIndex(focusedIndex - 9);
          break;
        case 'ARROWDOWN':
          if (focusedIndex < 72) setFocusedIndex(focusedIndex + 9);
          break;
        case 'ARROWLEFT':
          if (![0, 9, 18, 27, 36, 45, 54, 63, 72].includes(focusedIndex))
            setFocusedIndex(focusedIndex - 1);
          break;
        case 'ARROWRIGHT':
          if (![8, 17, 26, 35, 44, 53, 62, 71, 80].includes(focusedIndex))
            setFocusedIndex(focusedIndex + 1);
          break;
        case 'ESCAPE':
          setNumbers(null, null);
          break;
        default:
          break;
      }
    };
    if (!isMobile) {
      document.addEventListener('keyup', handleKeyUp);
    }
    return () => document.removeEventListener('keyup', handleKeyUp);
  });

  return (
    <Wrapper>
      <RestartButton
        onTap={clearBoard}
        tooltipText="Restart"
        tooltipShortcut="R"
      />
      <motion.div
        variants={{
          validation: {
            x: [null, -4, 4, -4, 4, 0],
          },
        }}
      >
        <CheckButton
          onTap={handleCheckClick}
          tooltipText="Check"
          tooltipShortcut="C"
        />
      </motion.div>
      <UndoButton onTap={handleUndo} tooltipText="Undo" tooltipShortcut="Z" />
      <UndoButton
        mirrored
        onTap={handleRedo}
        tooltipText="Redo"
        tooltipShortcut="A"
      />
      <PencilButton
        onTap={togglePencil}
        isActive={isPencil}
        tooltipText="Pencil"
        tooltipShortcut="P"
      />
      <XButton onTap={clearCell} tooltipText="Erase" tooltipShortcut="X" />
    </Wrapper>
  );
};

Toolbar.propTypes = {
  isPencil: PropTypes.bool.isRequired,
  togglePencil: PropTypes.func.isRequired,
  gameControls: PropTypes.shape({
    start: PropTypes.func.isRequired,
  }).isRequired,
  board: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      init: PropTypes.number.isRequired,
      user: PropTypes.number,
      predictions: PropTypes.arrayOf(PropTypes.number),
      solved: PropTypes.number,
    })
  ).isRequired,
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  focusedIndex: PropTypes.number,
  focusedNumber: PropTypes.number,
  clearBoard: PropTypes.func.isRequired,
  saveTimeRecord: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
  setCell: PropTypes.func.isRequired,
  setNumbers: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  focusedIndex: null,
  focusedNumber: null,
};

const mapStateToProps = ({ game }) => ({
  board: game.present.board,
  canUndo: game.past.length > 1,
  canRedo: game.future.length > 0,
  focusedIndex: game.present.numbers.focusedIndex,
  focusedNumber: game.present.numbers.focusedNumber,
});

const mapDispatchToProps = (dispatch) => ({
  clearBoard: () => dispatch(UndoActionCreators.jumpToPast(1)),
  saveTimeRecord: () => dispatch(saveTimeRecordAction()),
  undo: () => dispatch(UndoActionCreators.undo()),
  redo: () => dispatch(UndoActionCreators.redo()),
  setCell: (index, number) => dispatch(setCellAction(index, number)),
  setNumbers: (index, number) => dispatch(setNumbersAction(index, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
