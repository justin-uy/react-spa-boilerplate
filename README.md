react-spa-boilerplate
=====================

Boilerplate for a React.js SPA:
* Babel for transpiling ES6
* Hot loader updating using react hot loader
* Using react router and flux. (Flux is not really demonstrated in the boilerplate, but it is already added as a dev dependency)
* Tested by Jest
* Styled with Less
* Bundled by Webpack

### Run with hot loading for rapid layout development

```
npm install
npm start
open http://localhost:3000
```

### Build and run
```
npm run build

#first time create symlink
ln -s index.html build/index.html

# You can add an nginx config which points to your build folder
# This will be useful when integrating with APIs

```


### Testing

Jest is used for testing and is preset to use babel to transpile ES6 code to ES5

```
npm test
```

### Dependencies

* React
* Webpack
* [react-router](https://github.com/rackt/react-router)
* [flux](https://github.com/facebook/flux)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [jest](https://github.com/facebook/jest)
