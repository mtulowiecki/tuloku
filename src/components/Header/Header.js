import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Location, navigate } from '@reach/router';
import { connect } from 'react-redux';

import LeftArrowButton from 'components/Svgs/LeftArrowButton';
import Chronograph from 'components/Chronograph/Chronograph';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  z-index: 900;
`;

const StyledLeftArrow = styled(LeftArrowButton)`
  justify-self: left;
  padding: 0.25rem;
  height: 1.75rem;
  width: 1.75rem;
`;

const Header = ({
  game: {
    present: { gameTimer },
  },
}) => (
  <Location>
    {({ location }) => (
      <StyledHeader>
        {!(location.pathname === '/') && (
          <StyledLeftArrow name="back" onTap={() => navigate('/')} />
        )}
        {gameTimer !== undefined && <Chronograph />}
        <ThemeToggle />
      </StyledHeader>
    )}
  </Location>
);

Header.propTypes = {
  game: PropTypes.shape({ present: PropTypes.object }),
};

Header.defaultProps = {
  game: { present: {} },
};

const mapStateToProps = ({ game }) => ({ game });

export default connect(mapStateToProps)(Header);
