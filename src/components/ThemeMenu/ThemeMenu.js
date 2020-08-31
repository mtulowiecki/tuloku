import React from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTheme as changeThemeAction } from 'actions';
import themeObject from 'styles/theme';

import Palette from 'components/Svgs/Palette';

const Wrapper = styled(motion.div)`
  position: absolute;
  height: 2.25rem;
  width: 2.25rem;
  top: 1rem;
  right: 1rem;
  overflow: visible;
`;

const StyledPalette = styled(Palette)`
  position: absolute;
  top: 1.125rem;
  right: 1.125rem;
  transform: translate(50%, -50%);
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
  background-color: ${({ theme }) => theme.secondary15};
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
  open: {
    // clipPath: `circle(2.25rem at center center)`,
    opacity: 1,
  },
  closed: {
    // clipPath: `circle(0rem at center center)`,
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const backgroundVariants = {
  open: {
    clipPath: `circle(100vw at center right)`,
    display: 'block',
    transition: {
      delay: 0.3,
    },
  },
  closed: {
    clipPath: `circle(0vw at center right)`,
    transitionEnd: {
      display: 'none',
    },
  },
};

const ThemeMenu = ({ className, changeTheme }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <Wrapper
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={className}
    >
      <Background variants={backgroundVariants}>
        <List>
          {Object.keys(themeObject).map((option) => (
            <Option
              key={option}
              option={option}
              onClick={() => changeTheme(option)}
            />
          ))}
        </List>
      </Background>
      <Circle variants={circleVariants} />
      <StyledPalette onClick={toggleOpen} isOpen={isOpen} />
    </Wrapper>
  );
};

ThemeMenu.propTypes = {
  className: PropTypes.string,
  changeTheme: PropTypes.func.isRequired,
};

ThemeMenu.defaultProps = {
  className: '',
};

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (option) => dispatch(changeThemeAction(option)),
});

export default connect(null, mapDispatchToProps)(ThemeMenu);
