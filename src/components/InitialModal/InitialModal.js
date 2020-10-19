import React, { useState } from 'react';
import screenfull from 'screenfull';
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

const InitialModal = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const [isVisible, setVisible] = useState(
    !screenfull.isFullscreen && isMobile
  );

  const hideModal = () => setVisible(false);

  const enableFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request();
      hideModal();
    }
  };

  return (
    <Modal isVisible={isVisible} onOutsideClick={hideModal}>
      <Paragraph>For full expirience enter fullscreen mode.</Paragraph>
      <ButtonsWrapper>
        <StyledButton name="cancel" secondary onTap={hideModal}>
          Cancel
        </StyledButton>
        <StyledButton name="fullscreen" onTap={enableFullScreen}>
          Fullscreen
        </StyledButton>
      </ButtonsWrapper>
    </Modal>
  );
};

export default InitialModal;
