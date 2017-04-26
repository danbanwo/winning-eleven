import React, { Component, } from 'react';
import GameFilter from './Game_filter';
import PlayerSearch from './Player_Search';
import PlayerFilter from './Player_Filter';
import PlayerList from './Player_List';
import LineUp from './Line_Up';

class TeamSelection extends Component {
  render() {
    return (
      <div className='team-selection'>
        Hello from the Team Selection Page!

        <GameFilter />

          <div className='team-selection-body' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

            <div className='team-selection-left'>

              <div className='team-filter-search' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <PlayerFilter />
                <PlayerSearch />
              </div>


              <PlayerList />
            </div>

            <div className='team-selection-right'>
              <LineUp />
            </div>

          </div>

      </div>
    )
  }
}

export default TeamSelection;
