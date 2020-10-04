import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import styled from 'styled-components';

import Modal from 'components/Modal/Modal';
import TimeRecord from 'components/TimeRecord/TimeRecord';
import Button from 'components/Button/Button';

const Header = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0 0.25rem;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const List = styled.ul`
  width: 100%;
  padding: 0;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 0.35rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.secondary15};
  font-weight: 300;
`;

const FinishModal = ({ isVisible, difficulty, timeRecords }) => {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const handleGameFinish = () => {
    navigate('/');
  };
  return (
    <Modal isVisible={isVisible} onOutsideClick={handleGameFinish}>
      <Header>Congratulations! </Header>
      <Paragraph>difficulty: {difficulty}</Paragraph>
      <List>
        {timeRecords[difficulty].map(({ date, time }, index) => (
          <ListItem key={date.toISOString()}>
            <span>
              {index + 1}. {`0${date.getDate()}`.slice(-2)}{' '}
              {months[date.getMonth()]} {date.getFullYear()}
            </span>
            <TimeRecord time={time} />
          </ListItem>
        ))}
      </List>
      <Button name="got it" onTap={handleGameFinish}>
        Got it!
      </Button>
    </Modal>
  );
};

FinishModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  difficulty: PropTypes.string.isRequired,
  timeRecords: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.objectOf(PropTypes.number),
        date: PropTypes.instanceOf(Date),
      })
    )
  ).isRequired,
};

const mapStateToProps = ({
  root: { timeRecords },
  game: {
    present: { difficulty },
  },
}) => ({ difficulty, timeRecords });

export default connect(mapStateToProps)(FinishModal);
