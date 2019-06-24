class Card {

  constructor(text, method, adjustor){
    this.text = text,
    this.method = method,
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
      // Move to specified position
      player.position = this.adjustor
      // Check if this will make the player pass go
      if ((player.position > this.adjustor) && (this.adjustor != 10)){
        player.money += 200
      }
    }
  }

  addGoojfCard(player){
    player.goojfCard = true
  }

}
