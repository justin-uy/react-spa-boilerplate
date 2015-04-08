'use strict';

import React from 'react';
import Router from 'react-router';

import Root from './components/root/Root.react';

import Home from './components/home/Home.react';
import Other from './components/other/Other.react';


var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route handler={Root}>
    <Route handler={Home} name="home" />
    <Route handler={Other} name="other" />
    <Redirect from="/" to="home" />
  </Route>
);

export default routes;
