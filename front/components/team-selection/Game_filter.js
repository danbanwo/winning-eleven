import React, { Component } from 'react';


/*
The plan is for each Game filter to filter content displayed on the
team selection page. 'A' tags should be converted to React-router Link components,
and each pill should represent a specific game fixture and time. This will be done by receiving
props containing the name of the teams and scheduled game time.
*/
class GameFilter extends Component {
  constructor() {
    super();
    this.state = {
      fixtures: [
        {name: 'Game 1', time: '10:00am'},
        {name: 'Game 2', time: '10:00am'},
        {name: 'Game 3', time: '10:00am'},
        {name: 'Game 4', time: '10:00am'},
        {name: 'Game 5', time: '10:00am'},
      ]
    }
  }

  displayGameFilters = () => {
      const { fixtures } = this.state;
      return fixtures.map((fixture, idx) => (
          <li key={idx} role="presentation"><a key={idx} href={'#' + fixture.name} aria-controls={fixture.name} role="tab" data-toggle="tab">{fixture.name} {fixture.time}</a></li>
      ))
  }

  render() {
    return (
      <div className='game-filter'>
        Hello from the Game Filter!

        {/* <!-- Nav tabs --> */}
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <ul className="nav nav-tabs" role="tablist">
            <li key='all' role="presentation" className='active'><a key='all' href='#all' aria-controls='all' role="tab" data-toggle="tab">All</a></li>
            {this.displayGameFilters()}
          </ul>
        </div>
      </div>
    )
  }
}

export default GameFilter;
