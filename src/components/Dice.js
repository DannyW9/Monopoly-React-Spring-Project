import React, {Component} from 'react';
import diceLogic from '../helpers/logic/DiceLogic';
import buttonLogic from '../helpers/logic/ButtonLogic';

class Dice extends Component{

  constructor(props){
    super(props)
    this.state = {
      rollMessage: "",
      doubleRollMessage: "",
      firstFace: null,
      secondFace: null
    }
    this.handleRollDiceClick = this.handleRollDiceClick.bind(this)
  }

  getRandomRoll(){
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }

  handleRollDiceClick(){
    // Resets message when re-rolling
    this.setState({doubleRollMessage: ''})
    this.setState({rollMessage: ''})
    // Prevent roll if player has already rolled, or the game is won
    if (!this.props.rolled && !this.props.won){
      // variable setup for helper file
      let firstDiceValue = this.getRandomRoll()
      let secondDiceValue = this.getRandomRoll()
      let newValue = firstDiceValue + secondDiceValue
      let props = this.props;
      //Sets the value to be moved by the player
      props.setMoveValue(newValue)

      //Determines whether a double was rolled, and the actions required e.g.able to roll again, count # of cumulative doubles
      diceLogic.checkForDouble(firstDiceValue, secondDiceValue, newValue, props)
      if (diceLogic.checkIfDouble(firstDiceValue, secondDiceValue)){
        this.setState({doubleRollMessage: "Rolled a double " + firstDiceValue + "! Roll again!"})
      } else {
        this.setState({rollMessage: "You rolled " + newValue + "!"})
      }
      //Sets state to use for rendering dice faces
      this.setState({firstFace: diceLogic.showDiceFace(firstDiceValue)})
      this.setState({secondFace: diceLogic.showDiceFace(secondDiceValue)})
    }
  }

  render(){

    const diceStyle = {
      position: "absolute",
      border: '1px solid black',
      height: '50px',
      width: '50px',
      left: '200px'
    }
    const diceStyle2 = {
      position: "absolute",
      border: '1px solid black',
      height: '50px',
      width: '50px',
      left: '150px'
    }

    let rollDiceButton = buttonLogic.checkIfCanRoll(this.props, this.handleRollDiceClick)

    return(
      <div className="dice-div">
        {rollDiceButton}
        <img style={diceStyle} src={this.state.firstFace} />
        <img style={diceStyle2} src={this.state.secondFace} />
        <p>{this.state.rollMessage}</p>
        <p>{this.state.doubleRollMessage}</p>
      </div>
    );


  }

}

export default Dice;
