import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const Undo = ({ onTap, tooltipText, tooltipShortcut, mirrored }) => (
  <Button
    name="undo"
    viewBox="0 0 21 9"
    onTap={onTap}
    tooltipText={tooltipText}
    tooltipShortcut={tooltipShortcut}
    svg
  >
    <path
      d="M10.5 0C7.85 0 5.45 0.99 3.6 2.6L1.71 0.71C1.08 0.08 0 0.52 0 1.41V7C0 7.55 0.45 8 1 8H6.59C7.48 8 7.93 6.92 7.3 6.29L5.39 4.38C6.78 3.22 8.55 2.5 10.51 2.5C13.67 2.5 16.4 4.34 17.7 7C17.97 7.56 18.61 7.84 19.2 7.64C19.91 7.41 20.27 6.6 19.95 5.92C18.23 2.42 14.65 0 10.5 0Z"
      transform={mirrored ? 'scale(-1, 1) translate(-21, 0)' : 'scale(1,1)'}
    />
  </Button>
);

Undo.propTypes = {
  onTap: PropTypes.func,
  tooltipText: PropTypes.string,
  tooltipShortcut: PropTypes.string,
  mirrored: PropTypes.bool,
};

Undo.defaultProps = {
  onTap: null,
  tooltipText: '',
  tooltipShortcut: '',
  mirrored: false,
};

export default Undo;
