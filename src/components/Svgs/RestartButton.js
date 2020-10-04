import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const Restart = ({ onTap, tooltipText, tooltipShortcut }) => (
  <Button
    name="restart"
    viewBox="0 0 20 20"
    onTap={onTap}
    tooltipText={tooltipText}
    tooltipShortcut={tooltipShortcut}
    svg
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.551 9.79638C17.5516 11.4795 16.9742 13.1118 15.9155 14.4203C14.8568 15.7287 13.3809 16.634 11.7347 16.9846C10.0885 17.3353 8.37181 17.1101 6.87176 16.3467C5.37171 15.5832 4.17927 14.3279 3.49388 12.7907L1.22286 13.7131C2.12314 15.7759 3.70618 17.4658 5.70583 18.4988C7.70548 19.5318 9.9998 19.8448 12.2031 19.3852C14.4063 18.9256 16.3842 17.7215 17.8041 15.9752C19.2241 14.229 19.9995 12.0471 20 9.79638C20.0001 7.75186 19.3605 5.75855 18.1708 4.0958C16.9811 2.43306 15.301 1.18422 13.3659 0.524305C11.4308 -0.135605 9.33775 -0.173512 7.38004 0.415898C5.42232 1.00531 3.69809 2.19249 2.44898 3.81107V0.816785H0V7.3474L1.22449 8.57189H6.93878V6.12291H3.84C4.64834 4.72155 5.89661 3.62618 7.3911 3.00677C8.8856 2.38736 10.5428 2.27855 12.1054 2.69722C13.6681 3.11589 15.0489 4.03863 16.0335 5.32225C17.0181 6.60588 17.5516 8.1786 17.551 9.79638V9.79638Z"
    />
  </Button>
);

Restart.propTypes = {
  onTap: PropTypes.func.isRequired,
  tooltipText: PropTypes.string,
  tooltipShortcut: PropTypes.string,
};

Restart.defaultProps = {
  tooltipText: '',
  tooltipShortcut: '',
};

export default Restart;
