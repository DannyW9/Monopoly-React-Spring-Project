import React from 'react';

const conditionalButtonsLogic ={


  checkIfCurrentGame(noOfPlayers, method) {
  if (noOfPlayers === 0){
  let  button = <button onClick={method}>Start New Game </button>
  return button
  }
}

}

export default conditionalButtonsLogic;
