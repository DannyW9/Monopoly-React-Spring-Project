import React from 'react';
import EndTurn from '../../components/EndTurn';
import Dice from '../../components/Dice';

const buttonLogic ={


  checkIfCurrentGame(noOfPlayers, method) {
    if (noOfPlayers === 0){
      return <button className="startNewGame" onClick={method}>Start New Game </button>
    }
  },

  checkIfCanRoll(props, method){
    if (!props.rolled){
      return <button className="rolldicebutton" onClick={method}> Roll Dice </button>
    }else{
      return <button className="rolldicebutton" disabled onClick={method}> Roll Dice </button>
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

export default buttonLogic;
