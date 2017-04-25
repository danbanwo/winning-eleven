import React, { Component, } from 'react';
import { Link } from 'react-router';

// Component(s):
import ContestFilter from './Contest-Filter';

/*
The plan is for each league filter to filter content displayed on the
dashboard. 'A' tags should be converted to React-router Link components,
and each pill should have finer filter links.
Each pill also filters the fixture list by League/Tournament
*/

class LeagueFilter extends Component {
  constructor() {
    super();

/* Eventually state will be received through Redux store. The reducer that handles the below state
should return an array of Objects, with each Object having both a 'text' and 'attrValue'
property */
    this.state = { content: [
      {
        text: 'Featured',
        attrValue: 'featured'
    },
    {
      text: 'All',
      attrValue: 'all'
    },
    {
      text: 'EPL',
      attrValue: 'epl'
    },
    {
      text: 'La Liga',
      attrValue: 'la-liga'
    },
    {
      text: 'Serie A',
      attrValue: 'serie-a'
    },
    {
      text: 'Bundesliga',
      attrValue: 'bundesliga'
    },
    {
      text: 'Ligue 1',
      attrValue: 'ligue-1'
    },
    {
      text: 'Champions League',
      attrValue: 'champions-league'
    },
  ],
}
  }

  navTabs = () => {
    // Function used to render League filter tags to the dashboard
    let { content } = this.state
    return content.map((title, idx) => {
      if(idx === 0) {
        return <li key={idx} role="presentation" className='active'><a key={idx} href={'#' + title.attrValue} aria-controls={title.attrValue} role="tab" data-toggle="tab">{title.text}</a></li>
      } else {
        return <li key={idx} role="presentation"><a key={idx} href={'#' + title.attrValue} aria-controls={title.attrValue} role="tab" data-toggle="tab">{title.text}</a></li>
      }
     })
  }

  tabContent = () => {
    // Function used to render content of each League filter tab
    let { content } = this.state
    return content.map((title, idx) => {
      if(idx === 0) {
        return <div key={idx} role="tabpanel" className="tab-pane active" id={title.attrValue}>{'Hello from ' + title.text}</div>
      } else {
        return <div key={idx} role="tabpanel" className="tab-pane" id={title.attrValue}>{'Hello from ' + title.text} <ContestFilter /></div>
      }
    })
  }

  render() {
    return (
      <div className='league-filter'>
        {/* <!-- Nav tabs --> */}
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <ul className="nav nav-tabs" role="tablist">
            {this.navTabs()}
          </ul>
          <button type="button" id="myButton" className="btn btn-primary">Create Contest</button>
        </div>


        {/* <!-- Tab panes --> */}
        <div className="tab-content">
          {this.tabContent()}
        </div>

      </div>
    )
  }
}

export default LeagueFilter;
