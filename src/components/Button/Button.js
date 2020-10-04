import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const Wrapper = styled(motion.button)`
  position: relative;
  border: none;
  outline: none !important;
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.secondary};

  &:focus {
    outline: 0 !important;
    box-shadow: none;
  }

  ${({ svg }) =>
    svg
      ? css`
          padding: 0.25rem 0.75rem;
          height: 1.5rem;
          width: 2.75rem;
          border-radius: 0.875rem;
        `
      : css`
          padding: 0.5rem;
          width: 10rem;
          border-radius: 1.25rem;
          font-size: 1rem;
          line-height: 100%;
          font-weight: 500;
          text-transform: capitalize;
        `}

  ${({ secondary }) =>
    secondary &&
    css`
      border: solid 1px ${({ theme }) => theme.secondary15};
    `}
`;

const Icon = styled(motion.svg).attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  max-height: 100%;
  max-width: 100%;
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  bottom: calc(100% + 0.3rem);
  left: calc(50% - 2.25rem);
  width: 4.5rem;
  border-radius: 0.125rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 0.6rem;
  line-height: 100%;
  white-space: normal;
  text-align: center;
  padding: 0.125rem;

  &::before {
    position: absolute;
    bottom: -0.3rem;
    left: calc(50% - 0.5rem);
    width: 0;
    border-top: 0.35rem solid ${({ theme }) => theme.secondary};
    border-right: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    content: ' ';
  }
`;

const Button = ({
  children,
  name,
  svg,
  viewBox,
  theme,
  className,
  onTap,
  isActive,
  tooltipText,
  tooltipShortcut,
  noBackground,
  secondary,
}) => {
  const buttonControls = useAnimation();
  const buttonVariants = {
    normal: {
      backgroundColor: svg || secondary ? `rgba(0,0,0,0)` : theme.secondary15,
      color: theme.secondary,
    },
    active: {
      backgroundColor: theme.secondary,
      color: theme.primary,
    },
  };

  const tooltipControls = useAnimation();
  const tooltipVariants = {
    hidden: {
      y: 1,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  };

  const iconVariants = {
    normal: {
      fill: theme.secondary,
      transition: {
        delay: 0.2,
      },
    },
    active: {
      fill: theme.primary,
    },
  };

  useEffect(() => {
    if (isActive) buttonControls.set('active');
    else buttonControls.set('normal');

    return () => buttonControls.stop();
  }, [theme, isActive, buttonControls]);

  useEffect(() => {
    if (isActive) buttonControls.start('active');
    else buttonControls.start('normal');

    return () => buttonControls.stop();
  }, [isActive, buttonControls]);

  return (
    <Wrapper
      name={name}
      onTap={onTap}
      className={className}
      inital="normal"
      whileTap={!noBackground && 'active'}
      animate={buttonControls}
      variants={!noBackground && buttonVariants}
      onHoverStart={tooltipText && (() => tooltipControls.start('visible'))}
      onHoverEnd={tooltipText && (() => tooltipControls.start('hidden'))}
      svg={svg}
      secondary={secondary}
    >
      {tooltipText && (
        <Tooltip
          initial="hidden"
          animate={tooltipControls}
          variants={tooltipVariants}
        >
          {tooltipText}
          {tooltipShortcut && ` | ${tooltipShortcut}`}
        </Tooltip>
      )}
      {svg ? (
        <Icon viewBox={viewBox} initial="normal" variants={iconVariants}>
          {children}
        </Icon>
      ) : (
        children
      )}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  svg: PropTypes.bool,
  viewBox: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  onTap: PropTypes.func,
  isActive: PropTypes.bool,
  tooltipText: PropTypes.string,
  tooltipShortcut: PropTypes.string,
  noBackground: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  svg: false,
  viewBox: '',
  onTap: null,
  tooltipText: '',
  tooltipShortcut: '',
  isActive: false,
  noBackground: false,
  secondary: false,
};

export default withTheme(Button);
