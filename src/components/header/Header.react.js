import React from 'react';
import { Link } from 'react-router';

require('./css/Header.less');

let Home = React.createClass({

  render() {
    return(
      <div className="header">
        <div className="header__item">
          <Link to="home">Home</Link>
        </div>
        <div className="header__item">
          <Link to="other">Other</Link>
        </div>
      </div>
    );
  }
});

export default Home;
