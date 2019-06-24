class Card {

  constructor(text, method, adjustor){
    this.text = text,
    this.method = method,
    this.adjustor = adjustor
  }

  let pos = player.positon;

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



}
