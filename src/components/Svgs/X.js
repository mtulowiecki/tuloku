import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SvgButton from 'containers/SvgButton';

const StyledSvgButton = styled(SvgButton)`
  height: 1.5rem;
  width: 1.5rem;
`;

const X = ({ onClick }) => (
  <StyledSvgButton name="restart" viewBox="0 0 13 12" onClick={onClick}>
    {(theme) => (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.293.305a1 1 0 011.414 0L6 4.598 10.293.305a1 1 0 111.414 1.414L7.414 6.012l4.293 4.293a1 1 0 01-1.414 1.414L6 7.426 1.707 11.72a1 1 0 01-1.414-1.414l4.293-4.293L.293 1.72a1 1 0 010-1.414z"
        fill={theme.secondary}
      />
    )}
  </StyledSvgButton>
);

X.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default X;
