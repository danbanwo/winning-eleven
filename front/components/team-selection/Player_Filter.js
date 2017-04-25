import React, { Component } from 'react';

class PlayerFilter extends Component {
  constructor() {
    super();
    this.state = {
      positions: ['ALL', 'GK', 'DEF', 'MID', 'FWD']
    }
  }
  displayPositions = () => {
    const { positions } = this.state;
    return positions.map((position, idx) => {
      if(position === 'ALL'){
         return (
           <li key='all' role="presentation" className='active'><a key='all' href='#all' aria-controls='all' role="tab" data-toggle="tab">ALL</a></li>
         )
      } else {
        return (
          <li key={idx} role="presentation"><a key={idx} href={'#' + position} aria-controls={position} role="tab" data-toggle="tab">{position}</a></li>
        )
      }
    })
  }

  render() {
    return (
      <div className='player-filter'>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <ul className="nav nav-tabs" role="tablist">
            {this.displayPositions()}
          </ul>
        </div>

      </div>
    )
  }
}

export default PlayerFilter;
