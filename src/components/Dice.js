import React, {Component} from 'react';


class Dice extends Component{

  constructor(props){
    super(props)
    this.state = {
      doubleRollMessage: ""
    }
    // this.handleRollDiceClick = this.handleRollDiceClick.bind(this)
  }

  getRandomRoll(){
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }




  render(){
    return(
      <div className="dice-div">
        <button onClick={this.handleRollDiceClick}> Roll Dice </button>
        <p> {this.getRandomRoll()} </p>
        <p> {this.getRandomRoll()} </p>
      </div>
    );


  }

}

export default Dice;
