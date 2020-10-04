import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

const RestartModal = ({ isVisible, onOutsideClick }) => (
  <Modal isVisible={isVisible} onOutsideClick={onOutsideClick}>
    <p>Siemka</p>
  </Modal>
);

RestartModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
};

export default RestartModal;
