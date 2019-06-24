import React, {Component, useState}  from 'react';
import Dice from '../components/Dice';
import buttonLogic from '../helpers/logic/ButtonLogic'

class PlayerInterface extends Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
      <p>PLAYER INTERFACE</p>
      <button>Buy Property</button>
      <button>Manage Property</button>
      </div>
    )
  }
}

export default PlayerInterface;
