import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import styled from 'styled-components';

import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';

const Paragraph = styled.p`
  margin: 1rem 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ButtonsWrapper = styled.div`
  margin: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled(Button)`
  width: 40%;
  font-size: 0.75rem;
`;

const RestartModal = ({ isVisible, handleHide, restart }) => (
  <Modal isVisible={isVisible} onOutsideClick={handleHide}>
    <Paragraph>Are you sure you want to restart the game?</Paragraph>
    <ButtonsWrapper>
      <StyledButton name="no" secondary onTap={handleHide}>
        No
      </StyledButton>
      <StyledButton
        name="yes"
        onTap={() => {
          restart();
          navigate('/');
        }}
      >
        Yes
      </StyledButton>
    </ButtonsWrapper>
  </Modal>
);

RestartModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleHide: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
};

export default RestartModal;
