import React from 'react';
import PlayerStatus from '../../components/PlayerStatus';

const displayLogic = {

  checkIfStatusCanDisplay(state){
    if(state.players.length > 0){
      return <PlayerStatus
        players={state.players}
        activePlayer={state.activePlayer}
      />
    }
  }

}

export default displayLogic;
