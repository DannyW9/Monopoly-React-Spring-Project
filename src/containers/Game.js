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
      players: [],
      mostRecentAction: ""
    }

    this.setMoveValue = this.setMoveValue.bind(this);
    this.updateRolled = this.updateRolled.bind(this);
    this.updateDoubleCount = this.updateDoubleCount.bind(this);
    this.updatePlayerPosition = this.updatePlayerPosition.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
    this.updateActivePlayer = this.updateActivePlayer.bind(this);
    this.purchaseProperty = this.purchaseProperty.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
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
        this.state.squares.push(new Square(square.name, square.squareNumber, square.setColour, square.purchasePrice, square.rents, square.buildCost))
      }
    })
  }

  updateMessage(inMesage){
    this.setState({mostRecentAction : inMesage })
  }

  startNewGame(){
    this.state.players.push(new Player('Danny', '#01E2FD'))
    this.state.players.push(new Player('Lindsey', '#75FF33'))
    this.state.players.push(new Player('Calum', '#FD6101'))
    this.state.players.push(new Player('Pablo','#BE33FF'))

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

    generateMoveString(moveCount){
      return this.getActivePlayer().name + " moved " + moveCount + " spaces, landing on " + this.state.squares[this.state.activePlayer.position].name;
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
            this.updateMessage(this.generateMoveString(moveValue))
      actionLogic.checkCurrentAction(this.state)
    }

    // bankruptcyCheck(player){
    //   if (player.money <= 0){
    //     this.state.players.
    //   }
    // }

    updateActivePlayer(){
      if(this.state.rolled){
        const newIndex = (this.state.activePlayerIndex +1) % (this.state.players.length)
        this.setState({
          activePlayer: this.state.players[newIndex],
          activePlayerIndex: newIndex,
          moveValue: null,
          rolled: false
        },() => {
             this.updateMessageActivePlayer(this.getActivePlayer())
        })
      }
    }

    updateMessageActivePlayer(newPlayer){
      this.updateMessage(this.generateNewTurnString(newPlayer))
    }

    generateNewTurnString(newPlayer){
      return newPlayer.name + "'s turn! "
    }


    purchaseProperty(){
      let activePlayer = this.state.activePlayer
      let currentProperty = this.state.squares[activePlayer.position]

      activePlayer.properties.push(currentProperty)
      activePlayer.buyProperty(currentProperty)
      currentProperty.owner = activePlayer
      this.setState({activePlayer: activePlayer});

      this.updateMessagePropertyBought(currentProperty);
    }

    updateMessagePropertyBought(currentProperty){
      this.updateMessage(this.state.activePlayer.name +  " bought " + currentProperty.name);
    }

    getActivePlayer(){
      return this.state.players[this.state.activePlayerIndex];
    }

    returnMessage(){
      if(this.state.players.length == 0){
        return (
        <p></p>
        )
      }else{
        return(
          <div className="mostRecentAction">
          <p>{this.state.mostRecentAction}</p>
          </div>
        )
      }
    }





render(){

const state = this.state;

let newGameButton = buttonLogic.checkIfCurrentGame(state.players.length, this.startNewGame);
let playerStatus = displayLogic.checkIfStatusCanDisplay(state)
let mostRecentActionDisplay = this.returnMessage();

  return(
    <div>
      {mostRecentActionDisplay}
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
        purchaseProperty={this.purchaseProperty}
        activePlayer={state.activePlayer}
        updateMessage={this.updateMessage}
        />
      {newGameButton}
      {playerStatus}

    </div>
  )
}

}

export default Game;
