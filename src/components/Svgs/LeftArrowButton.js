import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const LeftArrow = ({ name, className, onTap, mirrored }) => (
  <Button
    viewBox="0 0 16 14"
    name={name}
    className={className}
    onTap={onTap}
    noBackground
    svg
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.707 13.695a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L3.414 5.988H15a1 1 0 110 2H3.414l4.293 4.293a1 1 0 010 1.414z"
      transform={mirrored ? 'scale(-1, 1) translate(-16, 0)' : 'scale(1,1)'}
    />
  </Button>
);

LeftArrow.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onTap: PropTypes.func.isRequired,
  mirrored: PropTypes.bool,
};

LeftArrow.defaultProps = {
  className: '',
  mirrored: false,
};

export default LeftArrow;
