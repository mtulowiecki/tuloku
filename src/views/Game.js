import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Loader from 'components/Loader/Loader';
import Board from 'components/Board/Board';
import Numbers from 'components/Numbers/Numbers';
import Toolbar from 'components/Toolbar/Toolbar';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 4rem;
  display: grid;
  grid-template-rows: 1fr auto auto;
  place-items: center;
`;

const Game = ({ isLoading, board }) => {
  const [isPencil, setPencil] = useState(false);
  const [focusedIndex, setIndex] = useState(null);
  const [focusedNumber, setNumber] = useState(null);

  return isLoading ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <Wrapper>
      <Board
        board={board}
        focusedIndex={focusedIndex}
        focusedNumber={focusedNumber}
        setIndex={setIndex}
        setNumber={setNumber}
      />

      <Numbers
        focusedIndex={focusedIndex}
        focusedNumber={focusedNumber}
        isPencil={isPencil}
        setNumber={setNumber}
      />
      <Toolbar
        focusedIndex={focusedIndex}
        isPencil={isPencil}
        togglePencil={() => setPencil(!isPencil)}
      />
    </Wrapper>
  );
};

Game.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      init: PropTypes.number.isRequired,
      predictions: PropTypes.arrayOf(PropTypes.number),
      user: PropTypes.number,
      solved: PropTypes.number,
    })
  ).isRequired,
};

const mapStateToProps = ({ isLoading, game, difficulty }) => ({
  isLoading,
  board: game[difficulty].board,
});

export default connect(mapStateToProps)(Game);
