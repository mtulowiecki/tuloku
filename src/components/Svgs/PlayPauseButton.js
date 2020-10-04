import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { motion } from 'framer-motion';

const PencilButton = ({ className, onTap, tooltipText, tooltipShortcut }) => {
  const pathVariants = {
    play: {
      d:
        'M7.596 5.69698L1.233 9.38898C0.693 9.70198 0 9.32298 0 8.69198V1.30798C0 0.677982 0.692 0.297982 1.233 0.611982L7.596 4.30398C7.71884 4.37411 7.82094 4.47547 7.89196 4.59779C7.96299 4.72011 8.00039 4.85904 8.00039 5.00048C8.00039 5.14193 7.96299 5.28085 7.89196 5.40317C7.82094 5.5255 7.71884 5.62686 7.596 5.69698V5.69698Z',
    },
    pause: {
      transitionEnd: {
        d:
          'M1.5 0.5C1.89782 0.5 2.27936 0.658035 2.56066 0.93934C2.84196 1.22064 3 1.60218 3 2V8C3 8.39782 2.84196 8.77936 2.56066 9.06066C2.27936 9.34196 1.89782 9.5 1.5 9.5C1.10218 9.5 0.720644 9.34196 0.43934 9.06066C0.158035 8.77936 8.38353e-09 8.39782 0 8V2C0 1.60218 0.158035 1.22064 0.43934 0.93934C0.720644 0.658035 1.10218 0.5 1.5 0.5V0.5ZM6.5 0.5C6.89782 0.5 7.27936 0.658035 7.56066 0.93934C7.84196 1.22064 8 1.60218 8 2V8C8 8.39782 7.84196 8.77936 7.56066 9.06066C7.27936 9.34196 6.89782 9.5 6.5 9.5C6.10218 9.5 5.72064 9.34196 5.43934 9.06066C5.15804 8.77936 5 8.39782 5 8V2C5 1.60218 5.15804 1.22064 5.43934 0.93934C5.72064 0.658035 6.10218 0.5 6.5 0.5Z',
      },
    },
  };
  return (
    <Button
      name="pencil"
      viewBox="0 0 8 10"
      onTap={onTap}
      className={className}
      tooltipText={tooltipText}
      tooltipShortcut={tooltipShortcut}
      svg
    >
      <motion.path initial="pause" variants={pathVariants} />
    </Button>
  );
};

PencilButton.propTypes = {
  className: PropTypes.string,
  onTap: PropTypes.func,
  tooltipText: PropTypes.string,
  tooltipShortcut: PropTypes.string,
};

PencilButton.defaultProps = {
  className: '',
  onTap: null,
  tooltipText: '',
  tooltipShortcut: '',
};

export default PencilButton;
