import React, {Component, useState}  from 'react';
import Dice from '../components/Dice';
import Purchase from '../components/Purchase';
import buttonLogic from '../helpers/logic/ButtonLogic'

class PlayerInterface extends Component {
  constructor(props){
    super(props);


    this.handleManageProperty = this.handleManageProperty.bind(this);
    this.getPropertyList = this.getPropertyList.bind(this);
  }
  //Pass in current player
  //Get list of props
  //Display list

  getPropertyList(){
    return this.props.activePlayer.properties.map((property) => {
      return <details><summary><li className="propertyListItem">{property.name}</li></summary><button>Mortgage</button></details>
    })
  }

  //Manage Prop
  handleManageProperty(){
    console.log("Manage Prop");
  }

  render(){

    let propertyList = this.getPropertyList();
    console.dir("prop list: ",propertyList);
    return(
      <div>
      <Purchase
        purchaseProperty={this.props.purchaseProperty}
        activePlayer={this.props.activePlayer}
        squares={this.props.squares}
        />
        <div className="propertyListDiv">
          <ul className="propertyList">
            <p className="propertyListText"> Properties </p>
            {propertyList}
          </ul>
        </div>
      </div>

    )
  }

}

export default PlayerInterface;
