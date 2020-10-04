import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';

const BinButton = ({ onTap, className, tooltipText, tooltipShortcut }) => (
  <Button
    name="delete"
    viewBox="0 0 14 18"
    onTap={onTap}
    className={className}
    tooltipText={tooltipText}
    tooltipShortcut={tooltipShortcut}
    noBackground
    svg
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
    />
  </Button>
);

BinButton.propTypes = {
  onTap: PropTypes.func.isRequired,
  className: PropTypes.string,
  tooltipText: PropTypes.string,
  tooltipShortcut: PropTypes.string,
};

BinButton.defaultProps = {
  className: null,
  tooltipText: null,
  tooltipShortcut: null,
};

export default BinButton;
