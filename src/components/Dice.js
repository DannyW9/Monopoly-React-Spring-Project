import React, {Component} from 'react';


class Dice extends Component{

  constructor(props){
    super(props)
    this.state = {
      doubleRollMessage: "",
      firstDiceValue: 1,
      secondDiceValue: 1
    }
    this.handleRollDiceClick = this.handleRollDiceClick.bind(this)
  }

  getRandomRoll(){
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }

  handleRollDiceClick(){
    this.setState({doubleMessage: ''})
    if (!this.props.rolled && !this.props.won){
      this.setState({firstDiceValue: this.getRandomRoll()})
      this.setState({secondDiceValue: this.getRandomRoll()})
      const newValue = this.firstDiceValue + this.secondDiceValue

      console.log(this.props);
      this.props.setMoveValue(newValue)

      if (this.firstDiceValue === this.secondDiceValue) {
        this.props.updatePlayerPosition(newValue, true)
        this.setState({doubleMessage: "Rolled a double " + this.secondDiceValue + "! Roll again!"})
        this.props.updateDoubleCount(1)
      } else {
        this.props.updatePlayerPosition(newValue)
        this.props.updateRolled()
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
