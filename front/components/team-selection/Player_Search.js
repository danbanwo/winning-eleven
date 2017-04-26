import React, { Component } from 'react';

class PlayerSearch extends Component {
  constructor() {
    super();
    this.state = { search: ''}
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <div className='player-search'>
        <input onChange={this.handleChange} type='text' placeholder='Search for player' value={this.state.search}/>
      </div>
    )
  }
}

export default PlayerSearch;
