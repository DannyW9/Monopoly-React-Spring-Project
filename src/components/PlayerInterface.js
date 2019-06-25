import React, {Component, useState}  from 'react';
import Dice from '../components/Dice';
import Purchase from '../components/Purchase';
import buttonLogic from '../helpers/logic/ButtonLogic'

class PlayerInterface extends Component {
  constructor(props){
    super(props);

    this.handleManageProperty = this.handleManageProperty.bind(this);
  }



  //Manage Prop
  handleManageProperty(){
    console.log("Manage Prop");
  }

  render(){

    return(
      <div>
      <p>PLAYER INTERFACE</p>
      <Purchase
        purchaseProperty={this.props.purchaseProperty}
        activePlayer={this.props.activePlayer}
        squares={this.props.squares}
        />
      <button className="ManageProperty" onClick={this.handleManageProperty}>Manage Property</button>
      </div>
    )
  }

}

export default PlayerInterface;
