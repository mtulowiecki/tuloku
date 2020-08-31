import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

import LeftArrow from 'components/Svgs/LeftArrow';
import ThemeMenu from 'components/ThemeMenu/ThemeMenu';

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledLeftArrow = styled(LeftArrow)`
  justify-self: left;
  height: 1.75rem;
  width: 1.75rem;
`;

const Navbar = () => (
  <Header>
    <StyledLeftArrow name="back" onClick={() => navigate('/')} />
    <ThemeMenu />
  </Header>
);

export default Navbar;
