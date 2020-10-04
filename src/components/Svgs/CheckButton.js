import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Button from 'components/Button/Button';

const CheckButton = ({ onTap, tooltipText, tooltipShortcut }) => (
  <Button
    name="check"
    viewBox="0 0 14 10"
    onTap={onTap}
    tooltipText={tooltipText}
    tooltipShortcut={tooltipShortcut}
    svg
  >
    <motion.path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6947 0.292787C13.8822 0.480314 13.9875 0.734622 13.9875 0.999786C13.9875 1.26495 13.8822 1.51926 13.6947 1.70679L5.69471 9.70679C5.50718 9.89426 5.25288 9.99957 4.98771 9.99957C4.72255 9.99957 4.46824 9.89426 4.28071 9.70679L0.280712 5.70679C0.0985537 5.51818 -0.00224062 5.26558 3.78026e-05 5.00339C0.00231622 4.74119 0.107485 4.49038 0.292893 4.30497C0.478301 4.11956 0.729114 4.01439 0.99131 4.01211C1.25351 4.00983 1.50611 4.11063 1.69471 4.29279L4.98771 7.58579L12.2807 0.292787C12.4682 0.105316 12.7225 0 12.9877 0C13.2529 0 13.5072 0.105316 13.6947 0.292787Z"
    />
  </Button>
);

CheckButton.propTypes = {
  onTap: PropTypes.func.isRequired,
  tooltipText: PropTypes.string,
  tooltipShortcut: PropTypes.string,
};

CheckButton.defaultProps = {
  tooltipText: '',
  tooltipShortcut: '',
};
export default CheckButton;
