import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import Header from 'components/Header/Header';

const MainTemplate = ({ children, currentTheme }) => (
  <ThemeProvider theme={theme[currentTheme]}>
    <GlobalStyle />
    <Header />
    {children}
  </ThemeProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

const mapStateToProps = ({ root: { currentTheme } }) => ({ currentTheme });

export default connect(mapStateToProps)(MainTemplate);
