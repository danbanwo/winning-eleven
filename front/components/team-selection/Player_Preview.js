import React, { Component } from 'react';

class PlayerPreview extends Component {
  constructor() {
    super();
    this.state = {
      playerStats: [
        {name: 'John Doe', pos: 'FWD', fppg: '28.5', played: '32', game: 'ARS @ CHE', salary: '$2,000'},
        {name: 'Jane Doe', pos: 'MID', fppg: '38.5', played: '28', game: 'ARS @ CHE', salary: '$11,000'},
        {name: 'Jake Doe', pos: 'DEF', fppg: '18.5', played: '7', game: 'ARS @ CHE', salary: '$900'}
      ]
    }
  }

  /* This will display all players associated with current filter option. STATS to be shown are:
    team-jersey-svg, name, pos, fppg, played, game and salary
  */
  displayTBody = () => {
    let { playerStats } = this.state;
    return playerStats.map((stat, idx) => (
      <tr key={idx}>
        <td key={idx + '-' + stat.name}>{stat.name}</td>
        <td key={idx + '-' + stat.pos}>{stat.pos}</td>
        <td key={idx + '-' + stat.fppg}>{stat.fppg}</td>
        <td key={idx + '-' + stat.played}>{stat.played}</td>
        <td key={idx + '-' + stat.game}>{stat.game}</td>
        <td key={idx + '-' + stat.salary}>{stat.salary}</td>
        <td key={idx + 'btn'}><button className='btn btn-success' style={{borderRadius: '100%'}}>+</button></td>
      </tr>
    ))
  }

  render() {
    return (
      <tbody className='player-preview'>
        {this.displayTBody()}
      </tbody>
    )
  }
}

export default PlayerPreview;
