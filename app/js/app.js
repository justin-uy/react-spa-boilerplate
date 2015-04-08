import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Other from './components/Other.react';

let App = React.createClass({
  render() {
    return (
      <div>
        <Link to="home">Home</Link>
        <Link to="other">Other</Link>
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (
  <Route name="home" path="/" handler={App}>
    <Route name="other" path="/other" handler={Other}/>
  </Route>
);

let Home = React.createClass({
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>The home of the boilerplate</p>
      </div>
    );
  }
});

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
