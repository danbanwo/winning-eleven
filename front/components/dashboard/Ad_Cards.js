import React, { Component, } from 'react';

/*
  AdCards display on the top section of the Dashboard page.
  The idea will be to autopopulate ads for featured gameday contests.
*/
class AdCards extends Component {
  constructor(props) {
    super(props);
  }

  displayAds = () => {
    let ads = [];
    for(let i = 0; i < 4; i++) {
      ads.push(<div key={i} style={{height: '120px', width: '250px', border: 'solid black 1px'}}>
        FEATURED CONTEST AD - {i + 1} GOES HERE!
      </div>)
    }
    return ads
  }

  render() {
    return (
      <section className='ad-cards-wrapper' style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>
        {this.displayAds()}
      </section>
    )
  }
}

export default AdCards;
