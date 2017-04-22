import React, { Component, } from 'react';

// import needed components here:
import AdCards from './Ad_Cards';
import EntryFee from './Entry_Fee';
import FixtureList from './Fixture_List';
import LeagueFilter from './League_Filter';
import SearchBar from '../search/Search_Bar';
import TimeSchedule from './Time_schedule';

class Dashboard extends Component {

  render() {
    return (
      <div className='dashboard'>
        <div style={{height: '20%'}}>
          <AdCards />
        </div>
        <LeagueFilter />

        {/* content within the dashboard's body */}
        <div className='dashboard-body' style={{display: 'flex', justifyContent: 'space-between'}}>

          {/* Left side of page  */}
          <div className='dashboard-left'>
            <TimeSchedule />
            <EntryFee />
          </div>

          {/* Right side of page  */}
          <div className='dashboard-right'>
            <SearchBar />
            <FixtureList />
          </div>

        </div>

      </div>
    )
  }
}

export default Dashboard;
