import React, { Component } from 'react';

import PlayerPreview from './Player_Preview';

class PlayerList extends Component {
  constructor() {
    super();
    this.state = {
      tHead: ['NAME', 'POS', 'FPPG', 'PLAYED', 'GAME', 'SALARY']
    }
  }

  displayTHeader = () => {
    let { tHead } = this.state;
    return tHead.map((header, idx) => (
      <th key={idx}>{header}</th>
    ))
  }

  render() {
    return (
      <div className='player-list' style={{width: '45vw'}}>

        <table className="table table-striped table-hover" style={{width: '100%'}}>

          <thead>
            <tr>
              {this.displayTHeader()}
            </tr>
          </thead>

          {/* The table body contained in <PlayerPreview /> goes below  */}
          <PlayerPreview />

        </table>

      </div>
    )
  }
}

export default PlayerList;
