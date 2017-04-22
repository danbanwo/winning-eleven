import React, { Component, } from 'react';

const EntryFee = () => (
  <div className='entry-fee' style={{width: '300px', border: 'black solid 1px', height: '100px', marginTop: '10px'}}>
    <h4>Entry Fee</h4>

    <div style={{display: 'flex',}}><span>$0</span> <input type='range' min='0' max='50,000' /> <span>$50,000</span></div>
  </div>
)

export default EntryFee;
