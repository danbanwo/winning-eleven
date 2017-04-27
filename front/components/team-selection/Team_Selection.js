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
        <section className='team-selection-header' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>

          {/* Title: Name of contest */}
          <div>
            <h2>Name of the contest ($11,000 to 1st)</h2>

            {/* Contest details */}
            <div className='team-contest-details' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>

              <div className='contest-details'>
                <h4>Tournament</h4>
                <h5>contest type</h5>
              </div>

              <div className='contest-details'>
                <h4>1,234/12,345</h4>
                <h5>entries</h5>
              </div>

              <div className='contest-details'>
                <h4>$7</h4>
                <h5>entry fee</h5>
              </div>

              <div className='contest-details'>
                <h4>$132,000</h4>
                <h5>prizes</h5>
              </div>
            </div>

          </div>

          <div className='countdown'><h3>Countdown</h3></div>

        </section>

        <GameFilter />

        <div className='team-selection-body' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>

          <section className='team-selection-left'>

            <div className='team-filter-search' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <PlayerFilter />
              <PlayerSearch />
            </div>


            <PlayerList />
          </section>

          <section className='team-selection-right' style={{border: 'solid 1px black', width: '40%', height: 'auto'}}>

            <LineUp />

          </section>

        </div>

      </div>
    )
  }
}

export default TeamSelection;
