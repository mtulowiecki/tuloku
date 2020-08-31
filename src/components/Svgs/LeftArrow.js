import React from 'react';
import PropTypes from 'prop-types';
import SvgButton from 'containers/SvgButton';

const LeftArrow = ({ name, className, onClick }) => (
  <SvgButton
    viewBox="0 0 16 14"
    name={name}
    className={className}
    onClick={onClick}
  >
    {(theme) => (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.707 13.695a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L3.414 5.988H15a1 1 0 110 2H3.414l4.293 4.293a1 1 0 010 1.414z"
        fill={theme.secondary}
      />
    )}
  </SvgButton>
);

LeftArrow.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

LeftArrow.defaultProps = {
  className: '',
};

export default LeftArrow;
