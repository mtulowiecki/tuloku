import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navigate } from '@reach/router';

import GitHubButton from 'components/Svgs/GitHubButton';
import ListButton from 'components/Svgs/ListButton';
import SettingsButton from 'components/Svgs/SettingsButton';
import InfoButton from 'components/Svgs/InfoButton';

const Wrapper = styled.div`
  margin: 1.5rem 0;
  padding: 0.35rem 0.5rem;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-row: 6;
`;

const Footer = ({ toggleInfoModal }) => {
  return (
    <Wrapper>
      <a href="https://github.com/mtulowiecki">
        <GitHubButton />
      </a>
      <ListButton onTap={() => navigate('/times')} />
      <SettingsButton onTap={() => navigate('/settings')} />
      <InfoButton onTap={toggleInfoModal} />
    </Wrapper>
  );
};

Footer.propTypes = {
  toggleInfoModal: PropTypes.func.isRequired,
};

export default Footer;
