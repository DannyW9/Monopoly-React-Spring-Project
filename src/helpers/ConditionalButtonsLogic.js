import React from 'react';
import EndTurn from '../components/EndTurn';

const conditionalButtonsLogic ={


  checkIfCurrentGame(noOfPlayers, method) {
    if (noOfPlayers === 0){
      return <button onClick={method}>Start New Game </button>
      }
  },

  checkIfTurnEnd(hasRolled, props){
    if(props.rolled){
      return <EndTurn updateActivePlayer={props.updateActivePlayer} />
    }
  }

}

export default conditionalButtonsLogic;
