import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import store from 'store';

import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home/Home';
import GameModuleLoader from 'views/Game/GameModuleLoader';
import Times from 'views/Times/Times';
import Settings from 'views/Settings/Settings';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <Router
        style={{
          height: '100vh',
          width: '100%',
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Home path="/" />
        <GameModuleLoader path="/game" />
        <Times path="/times" />
        <Settings path="/settings" />
      </Router>
    </MainTemplate>
  </Provider>
);

export default Root;
