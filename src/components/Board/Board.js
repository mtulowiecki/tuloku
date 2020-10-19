import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import Cell from 'components/Cell/Cell';

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Content = styled(motion.div)`
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

const Board = ({ board }) => {
  return (
    <Wrapper>
      <Content>
        {board.map(({ index, init, user, predictions, solved }) => (
          <Cell
            key={index}
            index={index}
            init={init}
            user={user}
            predictions={predictions}
            solved={solved}
          />
        ))}
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
      user: PropTypes.number,
      predictions: PropTypes.arrayOf(PropTypes.number),
      solved: PropTypes.number,
    })
  ).isRequired,
};

const mapStateToProps = ({
  game: {
    present: { board },
  },
}) => ({
  board,
});

export default connect(mapStateToProps)(Board);
