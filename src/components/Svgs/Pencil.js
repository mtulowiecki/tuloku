import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import SvgButton from 'containers/SvgButton';

const StyledSvgButton = styled(SvgButton)`
  padding: 0.25rem 0.75rem;
  height: 1.75rem;
  width: 2.75rem;
  border-radius: 0.875rem;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      background-color: ${theme.secondary};
    `}
`;

const Pencil = ({ isActive, onClick }) => (
  <StyledSvgButton
    name="pencil"
    viewBox="0 0 15 15"
    isActive={isActive}
    onClick={onClick}
  >
    {(theme) => (
      <path
        d="M10.586.61a2 2 0 112.828 2.829l-.793.793-2.828-2.828.793-.793zM8.379 2.819L0 11.197v2.828h2.828l8.38-8.38-2.83-2.827h.001z"
        fill={isActive ? theme.primary : theme.secondary}
      />
    )}
  </StyledSvgButton>
);

Pencil.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Pencil;
