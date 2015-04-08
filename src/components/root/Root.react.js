'use strict';

import React from 'react';
import Router from 'react-router';
import Header from '../header/Header.react';

var RouteHandler = Router.RouteHandler;

require('./css/Root.less');

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
}

export default Root;
