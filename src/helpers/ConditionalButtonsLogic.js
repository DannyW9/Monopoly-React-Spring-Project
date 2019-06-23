import React from 'react';
import EndTurn from '../components/EndTurn';
import Dice from '../components/Dice';

const conditionalButtonsLogic ={


  checkIfCurrentGame(noOfPlayers, method) {
    if (noOfPlayers === 0){
      return <button onClick={method}>Start New Game </button>
    }
  },

  checkIfTurnEnd(props){
    if(props.rolled){
      return <EndTurn updateActivePlayer={props.updateActivePlayer} />
    }
  },

  checkIfGameStarted(props){
    if(props.players.length > 0){
      return <Dice
        moveValue={props.moveValue}
        rolled={props.rolled}
        won={props.won}
        doubleCount={props.doubleCount}
        setMoveValue={props.setMoveValue}
        updateRolled={props.updateRolled}
        updatePlayerPosition={props.updatePlayerPosition}
        updateDoubleCount={props.updateDoubleCount}
      />
    }
  }

}

export default conditionalButtonsLogic;
