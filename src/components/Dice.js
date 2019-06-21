import React, {Component} from 'react';
import diceLogic from '../helpers/DiceLogic';


class Dice extends Component{

  constructor(props){
    super(props)
    this.state = {
      doubleRollMessage: ""
    }
    this.handleRollDiceClick = this.handleRollDiceClick.bind(this)
  }

  getRandomRoll(){
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }

  handleRollDiceClick(){
    this.setState({doubleRollMessage: ''}) // Resets message when re-rolling after a double
    if (!this.props.rolled && !this.props.won){
      let firstDiceValue = this.getRandomRoll()
      let secondDiceValue = this.getRandomRoll()
      let newValue = firstDiceValue + secondDiceValue
      let props = this.props;
      this.props.setMoveValue(newValue)
      diceLogic.checkForDouble(firstDiceValue, secondDiceValue, newValue, props)
      if (diceLogic.checkIfDouble(firstDiceValue, secondDiceValue)){
        this.setState({doubleRollMessage: "Rolled a double " + firstDiceValue + "! Roll again!"})
      }
    }
  }


  render(){
    return(
      <div className="dice-div">
        <button onClick={this.handleRollDiceClick}> Roll Dice </button>
        <p> {this.state.firstDiceValue} </p>
        <p> {this.state.secondDiceValue} </p>
        <p> You rolled a: {this.props.moveValue}</p>
        <p>{this.state.doubleRollMessage}</p>
      </div>
    );


  }

}

export default Dice;
