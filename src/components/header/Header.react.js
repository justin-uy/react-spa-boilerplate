import React from 'react';
import { Link } from 'react-router';

let Home = React.createClass({

  render() {
    return(
      <div>
        <Link to="home">Home</Link>
        <Link to="other">Other</Link>
      </div>
    );
  }
});

export default Home;
