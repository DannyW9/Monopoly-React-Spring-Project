const actionLogic = {

  checkCurrentAction(state){
    let currentSquare = state.squares[state.activePlayer.position]
    let player = state.activePlayer

    if (currentSquare.setColor === "tax"){
      this.payTax(currentSquare, player)
    } else if (currentSquare.setColor === "communitychest" || currentSquare.setColor === "chance") {
      this.pickBonusCard(currentSquare, player, state)
    } else if (currentSquare.squareNumber === 30) {
      this.goToJail(player)
    }

  },

  payTax(square, player){
    player.money -= square.rent
    alert("Landed on " + square.name + "! Paid £" + square.rent + " in taxes.")
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
