const actionLogic = {

  checkCurrentAction(state, moveValue){
    let currentSquare = state.squares[state.activePlayer.position]
    let player = state.activePlayer

    if (currentSquare.setColor === "tax"){
      this.payTax(currentSquare, player)
    } else if (currentSquare.setColor === "communitychest" || currentSquare.setColor === "chance") {
      this.pickBonusCard(currentSquare, player, state)
    } else if (currentSquare.squareNumber === 30) {
      this.goToJail(player)
    } else if (currentSquare.owner !== null && currentSquare.owner !== player) {
      this.payRent(currentSquare, player, moveValue)
    }
    state.additionalAction = this.determineMessage(currentSquare, player, moveValue)
  },

  determineMessage(square, player, moveValue){

    if (square.owner !== null && square.owner !== player) {
      if (square.setColor === "utility") {
        return "Paid £" + (square.rents[square.rentLevel] * moveValue) + " in rent to " + square.owner.name
      }else{
        return "Paid £" + square.rents[square.rentLevel] + " in rent to " + square.owner.name
      }
    }else if (square.setColor === "tax") {
      return "Paid £" + square.rents[0] + " in taxes!"
    }else if (square.squareNumber === 30) {
      return player.name + " was sent directly to jail without passing GO!"
    }else{
      return ""
    }
  },

  payRent(square, player, moveValue){
      player.payRent(square, moveValue)
      square.owner.receiveRent(square, moveValue)
  },

  payTax(square, player){
    player.money -= square.rents[square.rentLevel]
    alert("Landed on " + square.name + "! Paid £" + square.rents[square.rentLevel] + " in taxes.")
  },

  pickBonusCard(square, player, state){
    if(square.name === "Chance") {
      let card = this.drawAndReplaceChance(state)
      card.determineMethod(player, state.players)
    } else {
      let card = this.drawAndReplaceChest(state)
      card.determineMethod(player, state.players)
    }
  },

  drawAndReplaceChance(state){
    let card = state.chanceCards.shift()
    state.chanceCards.push(card)
    return card
  },

  drawAndReplaceChest(state){
    let card = state.chestCards.shift()
    state.chestCards.push(card)
    return card
  },

  goToJail(player){
    player.position = 10
    player.inJail = true
  }


}

export default actionLogic;
