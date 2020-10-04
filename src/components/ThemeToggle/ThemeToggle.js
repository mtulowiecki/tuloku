import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTheme as setThemeAction } from 'actions/rootActions';
import themeObject from 'styles/theme';

import PaletteButton from 'components/Svgs/PaletteButton';

const Wrapper = styled(motion.div)`
  position: absolute;
  height: 2.25rem;
  width: 2.25rem;
  top: 0.75rem;
  right: 1rem;
  overflow: visible;
`;

const StyledPalette = styled(PaletteButton)`
  position: absolute;
  top: 0.125rem;
  right: 0.125rem;
  padding: 0.25rem;
  height: 2rem;
  width: 2rem;
`;

const Circle = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondary};
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0.125rem;
  right: 1.125rem;
  height: 2rem;
  width: calc(100vw - 3.225rem);
  max-width: 430px;
  border-radius: 1.125rem 0 0 1.125rem;
  background: linear-gradient(
      ${({ theme }) => theme.secondary15},
      ${({ theme }) => theme.secondary15}
    ),
    linear-gradient(
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.primary}
    ); /* first bg is on top of this */
  overflow: hidden;
`;

const List = styled.div`
  padding: 0 1.25rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  direction: rtl;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Option = styled(motion.div)`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 0.25rem;
  border-radius: 50%;
  background-color: ${({ option }) => themeObject[option].primary};
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    height: 50%;
    width: 50%;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ option }) => themeObject[option].secondary};
  }
`;

const circleVariants = {
  active: {
    opacity: 1,
  },
  normal: {
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const backgroundVariants = {
  active: {
    clipPath: `circle(100vw at center right)`,
    display: 'block',
    transition: {
      delay: 0.2,
    },
  },
  normal: {
    clipPath: `circle(0vw at center right)`,
    transitionEnd: {
      display: 'none',
    },
    transition: {
      duration: 0.2,
    },
  },
};

const ThemeMenu = ({ className, setTheme }) => {
  const wrapperEl = useRef(null);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleClick = (e) =>
    !wrapperEl.current.contains(e.target) && toggleOpen();

  useEffect(() => {
    if (isOpen) document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });

  return (
    <Wrapper
      initial={false}
      animate={isOpen ? 'active' : 'normal'}
      className={className}
      ref={wrapperEl}
    >
      <Background variants={backgroundVariants}>
        <List>
          {Object.keys(themeObject).map((option) => (
            <Option
              key={option}
              option={option}
              onClick={() => setTheme(option)}
            />
          ))}
        </List>
      </Background>
      <Circle variants={circleVariants} />
      <StyledPalette onTap={toggleOpen} isActive={isOpen} />
    </Wrapper>
  );
};

ThemeMenu.propTypes = {
  className: PropTypes.string,
  setTheme: PropTypes.func.isRequired,
};

ThemeMenu.defaultProps = {
  className: '',
};

const mapDispatchToProps = (dispatch) => ({
  setTheme: (option) => dispatch(setThemeAction(option)),
});

export default connect(null, mapDispatchToProps)(ThemeMenu);
