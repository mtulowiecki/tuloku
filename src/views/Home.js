import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { fetchBoard as fetchBoardAction } from 'actions';

import SudokuLogo from 'components/Svgs/SudokuLogo';
import Carousele from 'components/Carousele/Carousele';
import Button from 'components/Button/Button';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 4fr repeat(3, 2rem) 1fr;
  grid-gap: 0.5rem;
  place-items: center;
`;

const Home = ({ difficulty, game, fetchBoard }) => {
  const handleNewGame = () => {
    fetchBoard();
    navigate('/game');
  };
  const handleContinueGame = () => {
    navigate('/game');
  };
  return (
    <Wrapper>
      <SudokuLogo />
      <Carousele />
      <Button onClick={handleNewGame}>NEW GAME</Button>
      <AnimatePresence>
        {game[difficulty] && (
          <Button
            onClick={handleContinueGame}
            initial={false}
            exit={{ opacity: 0 }}
          >
            CONTINUE
          </Button>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

Home.propTypes = {
  difficulty: PropTypes.string,
  game: PropTypes.objectOf(
    PropTypes.shape({
      isSolved: PropTypes.bool,
      board: PropTypes.arrayOf(
        PropTypes.shape({
          index: PropTypes.number,
          init: PropTypes.number,
          predictions: PropTypes.arrayOf(PropTypes.number),
          user: PropTypes.number,
        })
      ),
    })
  ),
  fetchBoard: PropTypes.func.isRequired,
};

Home.defaultProps = {
  difficulty: '',
  game: {},
};

const mapStateToProps = ({ difficulty, game }) => ({ difficulty, game });

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: () => dispatch(fetchBoardAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
