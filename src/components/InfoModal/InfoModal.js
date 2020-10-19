import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

const RestartModal = ({ isVisible, onOutsideClick }) => (
  <Modal isVisible={isVisible} onOutsideClick={onOutsideClick}>
    <p>Portfolio project</p>
    <p>
      Progressive Web App made out of love to sudoku. Complete react game with
      redux dynamic modules and framer-motion animations. Simple, minimalist
      design.
    </p>
    <a href="https://www.tulski.com/">visit my portfolio page</a>
  </Modal>
);

RestartModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
};

export default RestartModal;
