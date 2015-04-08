'use strict';

import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';

var RouteHandler = Router.RouteHandler;

require('./css/Root.less');

class Root extends React.Component {
  render() {
    return (
      <div>
        <Link to="home">Home</Link>
        <Link to="other">Other</Link>
        <RouteHandler />
      </div>
    );
  }
}

export default Root;
