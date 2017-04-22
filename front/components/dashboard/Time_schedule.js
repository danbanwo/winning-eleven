import React, { Component, } from 'react';

/* Creates time schedule for all upcoming games for the week.
   Think of refactoring this to populate times dynamically!
   This will help autogenerate times regardless of timezone
   or games played outside hardcoded times.
*/
class TimeSchedule extends Component {
  displayTimeSchedule = () => {
    let attributes = ['7:45am', '10:00am', '12:30pm', '2:00pm', '4:00pm', '6:00pm']
    return attributes.map(time => ([
      <input type='radio' name='time-schedule' value={time}/>,
      <label htmlFor={time}><span>{time}</span></label>
      ])
    )
  }

  render() {
    return (
      <div className='time-schedule'>
        <h3>Time Schedule</h3>
        <form style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '100px', border: 'black solid 1px'}}>
          {this.displayTimeSchedule()}
        </form>
      </div>
    )
  }
}

export default TimeSchedule;
