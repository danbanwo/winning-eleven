import React, { Component, } from 'react';


/* This will be imported into the league filter component,
and will serve as a filter for the different contests available within a
specific league.
*/

class ContestFilter extends Component {
  render() {
    return (
      <div className='contest-filter' style={{display: 'flex', justifyContent: 'space-around', marginBottom: '2.5%'}}>
        <span><a href='#tournament'>Tournaments</a></span>
        <span><a href='#smallPlayer'>3-100 Player</a></span>
        <span><a href='#head2heads'>Head to Heads</a></span>
        <span><a href='#multipliers'>50/50s & Multipliers</a></span>
        <span><a href='#beginner'>Beginner Contests</a></span>
      </div>
    )
  }
}

export default ContestFilter;
