import React, {Component, useState}  from 'react';
import Board from '../containers/Board';
import Player from '../models/Player';
import PlayerStatus from '../components/PlayerStatus';
import buttonLogic from '../helpers/logic/ButtonLogic';
import Card from '../models/Card';
import displayLogic from '../helpers/logic/DisplayLogic';

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
    this.updateActivePlayer = this.updateActivePlayer.bind(this);
  }

  startNewGame(){
    // this.setState({
    //   players: []
    // })

    this.state.players.push(new Player('Danny', 'red'))
    this.state.players.push(new Player('Lindsey', 'orange'))

    this.state.chanceCards.push(new Card('Chance', 'Speeding Fine, pay £15.', 2, 15))
    this.state.chanceCards.push(new Card("Chance", "Advance to Trafalgar Square. If you pass go, collect £200.", 3, 24))
    this.state.chanceCards.push(new Card("Chance", "You have been elected chairman of the board. Receive £50.", 1, 50))

    this.state.chestCards.push(new Card("Community Chest", "Doctors Fee. pay £50.", 2, 50))
    this.state.chestCards.push(new Card("Community Chest", "Life Insurance matures. Collect £100.", 1, 100))
    this.state.chestCards.push(new Card("Community Chest", "It is your birthday. Collect £10 from every player.", 9, 10))


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

    updateActivePlayer(){
      if(this.state.rolled){
        const newIndex = (this.state.activePlayerIndex +1) % (this.state.players.length)
        this.setState({
          activePlayer: this.state.players[newIndex],
          activePlayerIndex: newIndex,
          moveValue: null,
          rolled: false
         })
      }
    }





render(){

const state = this.state;

let newGameButton = buttonLogic.checkIfCurrentGame(state.players.length, this.startNewGame);
let playerStatus = displayLogic.checkIfStatusCanDisplay(state)

  return(
    <div className="boardDivContainer">
      <Board
        squares={state.squares}
        moveValue={state.moveValue}
        rolled={state.rolled}
        won={state.won}
        doubleCount={state.doubleCount}
        setMoveValue={this.setMoveValue}
        updateRolled={this.updateRolled}
        updateDoubleCount={this.updateDoubleCount}
        updatePlayerPosition={this.updatePlayerPosition}
        updateActivePlayer={this.updateActivePlayer}
        players={state.players}
        />
      {newGameButton}
      {playerStatus}

    </div>
  )
}

}

export default Game;
