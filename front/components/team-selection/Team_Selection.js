import React, { Component, } from 'react';
import GameFilter from './Game_filter';
import PlayerSearch from './Player_Search';
import PlayerFilter from './Player_Filter';
import PlayerList from './Player_List';
import AddPlayer from './Add_Player';
import PlayerPreview from './Player_Preview';

class TeamSelection extends Component {
  render() {
    return (
      <div className='team-selection'>
        Hello from the Team Selection Page!
        <GameFilter />
        <PlayerSearch />
        <PlayerFilter />
        <PlayerList />
        <AddPlayer />
        <PlayerPreview />
      </div>
    )
  }
}

export default TeamSelection;
