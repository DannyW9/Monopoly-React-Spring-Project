class Card {

  constructor(type, text, method, adjustor){
    this.type = type
    this.text = text
    this.method = method
    this.adjustor = adjustor
  }

  // CARD METHODS

  addMoney(player){
    player.money += this.adjustor;
  }

  subtractMoney(player){
    player.money -= this.adjustor;
  }

  movePlayer(player){
    // Check for specific card
    if (this.text === "Go back 3 spaces."){
      player.position -= 3
    } else {
            // Check if this will make the player pass go
      if ((player.position > this.adjustor) && (this.adjustor != 10)){
        player.money += 200
      }
      // Move to specified position
      player.position = this.adjustor
    }
  }

  addGoojfCard(player){
    player.goojfCard = true
  }

  performRepairs(player){

  }

// STILL NEED TO ADD DOUBLE RENT
  moveToStation(player){
    let pos = player.position

    if (pos < 15){
      pos = 15
    } else if (15 <= pos < 25) {
      pos = 25
    } else if (pos >= 35) {
      pos = 5
      player.money += 200
    }
  }

// STILL NEED TO ADD INCREASED RENT
  moveToUtility(player){
    let pos = player.position

    if (pos < 12){
      pos = 12
    } else if (12 <= pos < 28) {
      pos = 28
    } else if (pos >= 28) {
      pos = 12
      player.money += 200
    }
  }

  giveToPlayers(player, players){
    for (var owedPlayer in players) {
      if (owedPlayer != player) {
        owedPlayer.money += this.adjustor
        player.money -= this.adjustor
      }
    }
  }

  receiveFromPlayers(player, players){
    for (var debtPlayer in players) {
      if (debtPlayer != player) {
        debtPlayer.money -= this.adjustor
        player.money += this.adjustor
      }
    }
  }

  determineMethod(player, players, cardMethod){
    switch(cardMethod){
      case 1:
      this.addMoney(player)
      case 2:
      this.subtractMoney(player)
      case 3:
      this.movePlayer(player)
      case 4:
      this.addGoojfCard(player)
      case 5:
      this.performRepairs(player)
      case 6:
      this.moveToStation(player)
      case 7:
      this.moveToUtility(player)
      case 8:
      this.giveToPlayers(player, players)
      case 9:
      this.receiveFromPlayers(player, players)
    }
    alert(this.text)
  }

}

export default Card;
