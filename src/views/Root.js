import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import Game from 'views/Game';

const Root = () => {
  return (
    <Provider store={store}>
      <MainTemplate>
        <Router style={{ height: '100vh', width: '100%' }}>
          <Home path="/" />
          <Game path="/game" />
        </Router>
      </MainTemplate>
    </Provider>
  );
};

export default Root;
