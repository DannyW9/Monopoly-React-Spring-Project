import React, {Component, useState}  from 'react';
import Dice from '../components/Dice';
import buttonLogic from '../helpers/logic/ButtonLogic'

class PlayerInterface extends Component {
  constructor(props){
    super(props);
    this.handleBuyProperty = this.handleBuyProperty.bind(this);
    this.handleManageProperty = this.handleManageProperty.bind(this);
  }

  //Buy Prop
  handleBuyProperty(){
    console.log("Purchase Prop");
  }

  //Manage Prop
  handleManageProperty(){
    console.log("Manage Prop");
  }

  render(){

    return(
      <div>
      <p>PLAYER INTERFACE</p>
      <button className="BuyProperty" onClick={this.handleBuyProperty}>Buy Property</button>
      <button className="ManageProperty" onClick={this.handleManageProperty}>Manage Property</button>
      </div>
    )
  }

}

export default PlayerInterface;
