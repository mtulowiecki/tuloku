import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const GitHubButton = ({ onTap, tooltipText }) => (
  <Button
    name="check"
    viewBox="0 0 16 16"
    onTap={onTap}
    tooltipText={tooltipText}
    svg
  >
    <path d="M8 0C3.5 0 0 3.5 0 8C0 13.25 4.75 15.5 5.5 15.5C6 15.5 6 15.25 6 15V13.75C4.25 14.25 3.5 13.25 3.25 12.5C3.25 12.5 3.25 12.25 2.75 11.75C2.5 11.5 1.5 11 2.5 11C3.25 11 3.75 12 3.75 12C4.5 13 5.5 12.75 6 12.5C6 12 6.5 11.5 6.5 11.5C4.5 11.25 3 10.5 3 7.75C3 6.75 3.25 6 3.75 5.5C3.75 5.5 3.25 4.5 3.75 3.25C3.75 3.25 5 3.25 6 4.25C6.75 3.75 9.25 3.75 10 4.25C11 3.25 12.25 3.25 12.25 3.25C12.75 5 12.25 5.5 12.25 5.5C12.75 6 13 6.75 13 7.75C13 10.5 11.25 11.25 9.5 11.5C9.75 11.75 10 12.25 10 13V15C10 15.25 10 15.5 10.5 15.5C11.25 15.5 16 13.25 16 8C16 3.5 12.5 0 8 0Z" />
  </Button>
);

GitHubButton.propTypes = {
  onTap: PropTypes.func,
  tooltipText: PropTypes.string,
};

GitHubButton.defaultProps = {
  onTap: null,
  tooltipText: '',
};
export default GitHubButton;
