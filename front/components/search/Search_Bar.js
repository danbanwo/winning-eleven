import React, { Component, } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

/*
This function should fire an action to filter list
of fixtures with value from search. It will most likely accomplish this
by taking an array of fixture objects, parse through the fixture of each object,
and return an array of objects with fixtures containing the search value.
It should return null if value doesn't return a match.
*/
  handleChange = (e) => {
    let term = e.target.value;
    this.setState({search: term})
  }

  render() {
    return (
      <div className='search-bar'>
        <input type='text' value={this.state.search} placeholder='Search' name='Search' onChange={this.handleChange}/>
      </div>
    )
  }
}

export default SearchBar;
