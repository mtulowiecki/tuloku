import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Button = styled.button`
  padding: 0.25rem;
  line-height: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

const Icon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const SvgButton = ({ children, name, viewBox, theme, className, onClick }) => (
  <Button name={name} onClick={onClick} className={className}>
    <Icon viewBox={viewBox}>{children(theme)}</Icon>
  </Button>
);

SvgButton.propTypes = {
  children: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SvgButton.defaultProps = {
  className: '',
  onClick: () => {},
};

export default withTheme(SvgButton);
