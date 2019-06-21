import React, {Component},  {useState}  from 'react';
import Board from '../containers/Board';

class React extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: [],
      chanceCards: [],
      chestCards: [],
      rolled: false,
      won: false,
      moveValue: null,
      doubleCount: 0,
      activePlayer: null,
      activePlayerIndex: null
    }

    setMoveValue(newValue){
      this.setState({moveValue: newValue})
    }

    updateRolled(){
      this.setState({rolled: true})
    }

    updateDoubleCount(newValue){
      this.setState({doubleCount: newValue})
    }

    updatePlayerPosition(moveValue, double){

    }





render(){
  return(
    <Board />
  )
}

}
