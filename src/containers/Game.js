import React, {Component, useState}  from 'react';
import Card from '../models/Card';
import Square from '../models/Square';
import Player from '../models/Player';
import Board from '../containers/Board';
import PlayerStatus from '../components/PlayerStatus';
import PlayerInterface from '../components/PlayerInterface';
import buttonLogic from '../helpers/logic/ButtonLogic';
import displayLogic from '../helpers/logic/DisplayLogic';
import actionLogic from '../helpers/logic/ActionLogic';
import Request from '../helpers/Request';

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

  componentDidMount(){
    const request = new Request();

    request.get('/cards')
    .then((data) => {
      for (let card of data) {
        if(card.name === "Chance"){
          this.state.chanceCards.push(new Card(card.name, card.information, card.method, card.adjuster))
        } else {
          this.state.chestCards.push(new Card(card.name, card.information, card.method, card.adjuster))
        }
      }
    })

    request.get('/squares')
    .then((data) => {
      for (let square of data) {
        this.state.squares.push(new Square(square.name, square.squareNumber, square.setColour, square.purchasePrice, square.rent, square.h1, square.h2, square.h3, square.h4, square.hotel, square.buildCost))
      }
    })
  }



  startNewGame(){
    this.state.players.push(new Player('Danny', 'red'))
    this.state.players.push(new Player('Lindsey', 'orange'))

    this.setState({
      moveValue: null,
      activePlayer: this.state.players[0],
      activePlayerIndex: 0,
      chanceCards: this.shuffleCards(this.state.chanceCards),
      chestCards: this.shuffleCards(this.state.chestCards)

    })

  }

  shuffleCards(array){
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;

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
      actionLogic.checkCurrentAction(this.state)
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
    <div>
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
