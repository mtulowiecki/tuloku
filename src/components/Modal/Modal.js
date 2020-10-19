import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index: 100;

  ${({ isVisible }) =>
    isVisible &&
    css`
      & + div {
        filter: blur(4px);
      }
    `}
`;

const ModalWrapper = styled(motion.div)`
  width: 85%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary};
  border: solid 1px ${({ theme }) => theme.secondary15};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
`;

const Modal = ({ children, isVisible, onOutsideClick }) => {
  const wrapperEl = useRef(null);

  const handleClick = (e) => wrapperEl.current === e.target && onOutsideClick();

  return (
    <AnimatePresence>
      {isVisible && (
        <Wrapper ref={wrapperEl} isVisible={isVisible} onTap={handleClick}>
          <ModalWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </ModalWrapper>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onOutsideClick: PropTypes.func,
};

Modal.defaultProps = {
  onOutsideClick: () => {},
};

export default Modal;
