import React, { Component } from 'react';

class LineUp extends Component {
  constructor() {
    super();
    this.state = {
      positions: ['FWD', 'FWD', 'MID', 'MID', 'MID', 'DEF', 'DEF', 'GK']
    }
  }

  displayLineUpPlaceHolders = () => {
    const { positions } = this.state;
    return positions.map((position, idx) => (
      <tr key={ idx }>
        <td key={ idx }>{ position } SELECT PLAYER</td>
      </tr>
    ))
  }

  render() {
    return(
    <div className='line-up'>

      <div className='line-up-titles' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <h3>Your Lineup</h3>
        <h5>Salary Remaining | Average Player</h5>
      </div>

      <table className="table table-striped table-hover" style={{width: '100%', height: '100%'}}>

        <tbody>
          { this.displayLineUpPlaceHolders() }
        </tbody>

      </table>

      <button className='btn btn-success'>Enter</button>
    </div>
    )
  }
}

export default LineUp;
