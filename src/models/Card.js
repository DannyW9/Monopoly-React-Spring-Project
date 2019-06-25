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
      if ((player.position > this.adjustor) && (this.adjustor !== 10)){
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
    // let pos = player.position

    if (player.position < 15){
      player.position = 15
    } else if (player.position >= 15 && player.position < 25) {
      player.position = 25
    } else if (player.position >= 35) {
      player.position = 5
      player.money += 200
    }
  }

// STILL NEED TO ADD INCREASED RENT
  moveToUtility(player){
    // let pos = player.position

    if (player.position < 12){
      player.position = 12
    } else if (player.position >= 12 && player.position < 28) {
      player.position = 28
    } else if (player.position >= 28) {
      player.position = 12
      player.money += 200
    }
  }

  giveToPlayers(player, players){
    for (let owedPlayer in players) {
      if (owedPlayer !== player) {
        owedPlayer.money += this.adjustor
        player.money -= this.adjustor
      }
    }
  }

  receiveFromPlayers(player, players){
    for (var debtPlayer in players) {
      if (debtPlayer !== player) {
        debtPlayer.money -= this.adjustor
        player.money += this.adjustor
      }
    }
  }

  determineMethod(player, players){
    switch(this.method){
      case 1:
      this.addMoney(player)
      break;
      case 2:
      this.subtractMoney(player)
      break;
      case 3:
      this.movePlayer(player)
      break;
      case 4:
      this.addGoojfCard(player)
      break;
      case 5:
      this.performRepairs(player)
      break;
      case 6:
      this.moveToStation(player)
      break;
      case 7:
      this.moveToUtility(player)
      break;
      case 8:
      this.giveToPlayers(player, players)
      break;
      case 9:
      this.receiveFromPlayers(player, players)
    }
    alert(this.text)
  }

  // applyMethod(player){
  //   this.lookupMethod()
  // }

}

export default Card;
