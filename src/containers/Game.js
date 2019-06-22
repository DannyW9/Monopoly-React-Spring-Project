import React, {Component, useState}  from 'react';
import Board from '../containers/Board';
import Player from '../models/Player';
import PlayerStatus from '../components/PlayerStatus';

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
      activePlayerIndex: null,
      players: []
    }

    this.setMoveValue = this.setMoveValue.bind(this);
    this.updateRolled = this.updateRolled.bind(this);
    this.updateDoubleCount = this.updateDoubleCount.bind(this);
    this.updatePlayerPosition = this.updatePlayerPosition.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }

  startNewGame(){
    // this.setState({
    //   players: []
    // })

    this.state.players.push(new Player('Danny', 'red'))
    this.state.players.push(new Player('Lindsey', 'orange'))

    this.setState({
      moveValue: null,
      activePlayer: this.state.players[0],
      activePlayerIndex: 0,
      won: false
    })
  }

    setMoveValue(newValue){
      this.setState({moveValue: newValue})
    }

    updateRolled(){
      this.setState({rolled: true})
    }

    updateDoubleCount(newValue){
      this.setState({doubleCount: this.state.doubleCount + newValue})
    }

    // Double will be used to check if the player can leave jail once implemented
    updatePlayerPosition(moveValue, double){
      this.state.activePlayer.updatePosition(moveValue)
    }





render(){

const s = this.state;

  return(
    <div>
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
      <button onClick={this.startNewGame}>Start New Game </button>
      <PlayerStatus
        players={s.players}
        activePlayer={s.activePlayer}
      />
    </div>
  )
}

}

export default Game;
