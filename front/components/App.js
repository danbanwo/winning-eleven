import React, { Component, } from 'react';

// import components here:
import Navbar from './navbar/Navbar'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { pathname } = this.props.location;
    return (
      <div className='app-home'>
        <Navbar pathname={pathname} />
        {this.props.children}
      </div>
    )
  }
}

export default App;
