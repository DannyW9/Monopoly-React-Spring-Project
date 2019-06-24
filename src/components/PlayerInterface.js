import React, {Component, useState}  from 'react';
import Dice from '../components/Dice';

class PlayerInterface extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="playerInterface">
      <Dice />
      <p>PLAYER INTERFACE</p>
      </div>
    )
  }
}

export default PlayerInterface;
