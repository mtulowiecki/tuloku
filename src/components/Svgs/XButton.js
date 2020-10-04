import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const X = ({ onTap, tooltipText, tooltipShortcut }) => (
  <Button
    name="restart"
    viewBox="0 0 13 12"
    onTap={onTap}
    tooltipText={tooltipText}
    tooltipShortcut={tooltipShortcut}
    svg
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293.305a1 1 0 011.414 0L6 4.598 10.293.305a1 1 0 111.414 1.414L7.414 6.012l4.293 4.293a1 1 0 01-1.414 1.414L6 7.426 1.707 11.72a1 1 0 01-1.414-1.414l4.293-4.293L.293 1.72a1 1 0 010-1.414z"
    />
  </Button>
);

X.propTypes = {
  onTap: PropTypes.func.isRequired,
  tooltipText: PropTypes.string,
  tooltipShortcut: PropTypes.string,
};

X.defaultProps = {
  tooltipText: '',
  tooltipShortcut: '',
};

export default X;
