import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
  margin: 0;
  flex-shrink: 0;
`;

const TimeRecord = ({ time }) => {
  const formatNumber = (number) => `0${number}`.slice(-2);
  return (
    <Span>
      {time.days ? `${formatNumber(time.days)}D ` : null}
      {time.hours ? `${formatNumber(time.hours)}H ` : null}
      {time.minutes ? `${formatNumber(time.minutes)}M ` : null}
      {formatNumber(time.seconds)}S
    </Span>
  );
};

TimeRecord.propTypes = {
  time: PropTypes.shape({
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    secondTenths: PropTypes.number,
    seconds: PropTypes.number,
  }).isRequired,
};

export default TimeRecord;
