import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const PencilButton = ({ isActive, onTap, tooltipText, tooltipShortcut }) => (
  <Button
    name="pencil"
    viewBox="0 0 15 15"
    onTap={onTap}
    isActive={isActive}
    tooltipText={tooltipText}
    tooltipShortcut={tooltipShortcut}
    svg
  >
    <path d="M10.586.61a2 2 0 112.828 2.829l-.793.793-2.828-2.828.793-.793zM8.379 2.819L0 11.197v2.828h2.828l8.38-8.38-2.83-2.827h.001z" />
  </Button>
);

PencilButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onTap: PropTypes.func.isRequired,
  tooltipText: PropTypes.string,
  tooltipShortcut: PropTypes.string,
};

PencilButton.defaultProps = {
  tooltipText: '',
  tooltipShortcut: '',
};

export default PencilButton;
