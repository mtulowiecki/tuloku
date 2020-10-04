import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';

import InfoModal from 'components/InfoModal/InfoModal';
import SudokuLogoButton from 'components/Svgs/SudokuLogoButton';
import Carousele from 'components/Carousele/Carousele';
import Button from 'components/Button/Button';
import Footer from 'components/Footer/Footer';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 4fr repeat(3, 2rem) 1fr auto;
  grid-gap: 1rem;
  place-items: center;

  ${({ isBlured }) =>
    isBlured &&
    css`
      filter: blur(4px);
    `}
`;

const Home = ({ gameHistory, difficulty }) => {
  const [infoModal, toggleInfoModal] = useCycle(false, true);
  return (
    <>
      <InfoModal isVisible={infoModal} onOutsideClick={toggleInfoModal} />
      <Wrapper isBlured={infoModal}>
        <SudokuLogoButton />
        <Carousele options={['easy', 'medium', 'hard', 'random']} />
        <Button name="new game" onTap={() => navigate('/game')}>
          new game
        </Button>
        <AnimatePresence>
          {gameHistory[difficulty] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                name="continue"
                onTap={() =>
                  navigate('/game', { state: { continuation: true } })
                }
              >
                continue
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer infoModal={infoModal} toggleInfoModal={toggleInfoModal} />
      </Wrapper>
    </>
  );
};

Home.propTypes = {
  gameHistory: PropTypes.objectOf(
    PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
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
  difficulty: PropTypes.string.isRequired,
};

Home.defaultProps = {
  gameHistory: {},
};

const mapStateToProps = ({ root: { difficulty, gameHistory } }) => ({
  difficulty,
  gameHistory,
});

export default connect(mapStateToProps)(Home);
