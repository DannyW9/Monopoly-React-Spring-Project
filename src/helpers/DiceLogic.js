import React from 'react';

const diceLogic = {

  checkForDouble(firstDiceValue, secondDiceValue, newValue, props){
    if (firstDiceValue === secondDiceValue) {
      this.actionsIfDouble(newValue, props)
      return true
    } else {
      this.actionsIfNotDouble(newValue, props)
    }
  },

  checkIfDouble(firstDiceValue, secondDiceValue){
    if (firstDiceValue === secondDiceValue){
      return true
    } else
    return false
  },

  actionsIfDouble(newValue, props){
    props.updatePlayerPosition(newValue, true)
    props.updateDoubleCount(1)
    return true
  },

  actionsIfNotDouble(newValue, props){
    props.updatePlayerPosition(newValue)
    props.updateRolled()
  }

}

export default diceLogic;
