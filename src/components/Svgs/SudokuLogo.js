import React from 'react';
import styled from 'styled-components';
import SvgButton from 'containers/SvgButton';

const StyledSvgButton = styled(SvgButton)`
  height: 11rem;
  width: 11rem;
  cursor: default;
`;

const SudokuLogo = () => (
  <StyledSvgButton name="logo" viewBox="0 0 181 181">
    {(theme) => (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M181 90.5c0 49.982-40.518 90.5-90.5 90.5S0 140.482 0 90.5 40.518 0 90.5 0 181 40.518 181 90.5zM19.053 109.316a5 5 0 015-5h37.631V66.684H24.053a5 5 0 010-10h37.631V23.816a5 5 0 0110 0v32.868h37.632V23.816a5 5 0 1110 0v32.868h37.189a5 5 0 110 10h-37.189v37.632h37.189a5 5 0 110 10h-37.189v43.49a5 5 0 01-10 0v-43.49H71.684v43.49a5 5 0 01-10 0v-43.49H24.053a5 5 0 01-5-5zm52.631-5h37.632V66.684H71.684v37.632z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-53.5"
            y1="90"
            x2="181"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={theme.primary} />
            <stop offset="1" stopColor={theme.secondary} />
          </linearGradient>
        </defs>
      </>
    )}
  </StyledSvgButton>
);

export default SudokuLogo;
