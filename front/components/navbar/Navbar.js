import React, { Component, } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  renderHome = () => {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Sign Up</a></li>
          <li>
            <a href="#" className="dropdown-toggle"  aria-haspopup="true" aria-expanded="false">Log In</a>
          </li>
        </ul>
      </div>
    )
  }

  renderOther = () => {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Lobby <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Upcoming</a></li>
          <li><a href="#">Live</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Friends</a></li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Log out</a></li>
        </ul>
      </div>
    )
  }

  render() {
    let { pathname } = this.props;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Winning Eleven</a>
          </div>
            {pathname === '/' ? this.renderHome()  : this.renderOther()}
        </div>
      </nav>
    )
  }
}

export default Navbar;
