import React, {Component, useState}  from 'react';
import Board from '../containers/Board';

class Game extends Component {

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

    this.setMoveValue = this.setMoveValue.bind(this);
    this.updateRolled = this.updateRolled.bind(this);
    this.updateDoubleCount = this.updateDoubleCount.bind(this);
    this.updatePlayerPosition = this.updatePlayerPosition.bind(this);
  }

    setMoveValue(newValue){
      this.setState({moveValue: newValue})
    }

    updateRolled(){
      this.setState({rolled: true})
    }

    updateDoubleCount(newValue){
      this.setState({doubleCount: this.doubleCount + newValue})
    }

    updatePlayerPosition(moveValue, double){

    }





render(){

const s = this.state;

  return(
    <Board
      squares={s.squares}
      moveValue={s.moveValue}
      rolled={s.rolled}
      won={s.won}
      doubleCount={s.doubleCount}
      setMoveValue={this.setMoveValue}
      updateRolled={this.updateRolled}
      updateDoubleCount={this.updateDoubleCount}
      updatePlayerPosition={this.updatePlayerPosition}
    />
  )
}

}

export default Game;
