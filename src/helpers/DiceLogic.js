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
  },

  showDiceFace(firstDiceValue){
    switch (firstDiceValue) {
      case 1:
        return 'images/dice-one.png';
      case 2:
        return 'images/dice-two.png';
      case 3:
        return 'images/dice-three.png';
      case 4:
        return 'images/dice-four.png';
      case 5:
        return 'images/dice-five.png';
      case 6:
        return 'images/dice-six.png';

    }
  }

}

export default diceLogic;
