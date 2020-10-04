import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const InfoButon = ({ onTap, tooltipText }) => (
  <Button
    name="check"
    viewBox="0 0 16 16"
    onTap={onTap}
    tooltipText={tooltipText}
    svg
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16ZM8.93 6.588L6.64 6.875L6.558 7.255L7.008 7.338C7.302 7.408 7.36 7.514 7.296 7.807L6.558 11.275C6.364 12.172 6.663 12.594 7.366 12.594C7.911 12.594 8.544 12.342 8.831 11.996L8.919 11.58C8.719 11.756 8.427 11.826 8.233 11.826C7.958 11.826 7.858 11.633 7.929 11.293L8.93 6.588V6.588ZM8 5.5C8.26522 5.5 8.51957 5.39464 8.70711 5.20711C8.89464 5.01957 9 4.76522 9 4.5C9 4.23478 8.89464 3.98043 8.70711 3.79289C8.51957 3.60536 8.26522 3.5 8 3.5C7.73478 3.5 7.48043 3.60536 7.29289 3.79289C7.10536 3.98043 7 4.23478 7 4.5C7 4.76522 7.10536 5.01957 7.29289 5.20711C7.48043 5.39464 7.73478 5.5 8 5.5Z"
    />
  </Button>
);

InfoButon.propTypes = {
  onTap: PropTypes.func.isRequired,
  tooltipText: PropTypes.string,
};

InfoButon.defaultProps = {
  tooltipText: '',
};
export default InfoButon;
