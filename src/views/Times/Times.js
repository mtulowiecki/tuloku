import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { deleteTimeRecord as deleteTimeRecordAction } from 'actions/rootActions';

import Carousele from 'components/Carousele/Carousele';
import TimeRecord from 'components/TimeRecord/TimeRecord';
import BinButton from 'components/Svgs/BinButton';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  padding-top: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1rem;
`;

const List = styled(motion.ul)`
  font-size: 1rem;
  width: 100%;
  padding: 0;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 0.35rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
`;

const StyledBinButton = styled(BinButton)`
  padding: 0.25rem;
  margin-left: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
`;

const Times = ({ timeRecords, difficulty, deleteTimeRecord }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return (
    <Wrapper>
      <Header>Times</Header>
      <Carousele options={['easy', 'medium', 'hard']} noBackground />
      <AnimatePresence exitBeforeEnter>
        {timeRecords[difficulty] && (
          <List
            key={difficulty}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {timeRecords[difficulty].map(({ date, time }, index) => (
              <ListItem key={date.getTime()}>
                <span>
                  {index + 1}. {`0${date.getDate()}`.slice(-2)}{' '}
                  {months[date.getMonth()]} {date.getFullYear()}
                </span>
                <span>
                  <TimeRecord time={time} />
                  <StyledBinButton onTap={() => deleteTimeRecord(date)} />
                </span>
              </ListItem>
            ))}
          </List>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

Times.propTypes = {
  timeRecords: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.instanceOf(Date),
        time: PropTypes.objectOf(PropTypes.number),
      })
    )
  ).isRequired,
  difficulty: PropTypes.string.isRequired,
  deleteTimeRecord: PropTypes.func.isRequired,
};

const mapStateToProps = ({ root: { difficulty, timeRecords } }) => ({
  difficulty,
  timeRecords,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTimeRecord: (date) => dispatch(deleteTimeRecordAction(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Times);
