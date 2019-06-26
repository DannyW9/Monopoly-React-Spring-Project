class Player {

  constructor(name, color){
    this.name = name
    this.money = 1500
    this.color = color
    this.properties = []
    this.position = 0
    this.jailStatus = false
    this.timeInJail = 0
    this.goojfCard = false
  }


// Simple update Position without any Jail concerns
  updatePosition(moveValue){
    this.passGoCheck(moveValue)
    // %40 ensures that the position does not go above 40, and continues around the board
    this.position = (this.position + moveValue) % 40
  }

  passGoCheck(moveValue){
    if( this.position + moveValue >= 40){
      this.money += 200
    }
  }

// Simple rent without dealing with housess
  payRent(property, moveValue){
    if(property.fullSet === true){
      this.money -= (property.rents[property.rentLevel] * 2)
    } else if (property.setColor === "utility") {
      this.money -= (moveValue * property.rents[property.rentLevel])
    } else {
      this.money -= property.rents[property.rentLevel]
    }
  }

// Simple rent without dealing with houses
  receiveRent(property, moveValue){
    if(property.fullSet === true){
      this.money += (property.rents[property.rentLevel] * 2)
    } else if (property.setColor === "utility") {
      this.money += (moveValue * property.rents[property.rentLevel])
    } else {
      this.money += property.rents[property.rentLevel]
    }
  }

  checkMoney(){
    return this.money
  }

  buyProperty(square){
    this.money -= square.purchasePrice
    this.properties.push(square)
    this.checkIfFullSetOwned(square);

  }

  partsOfSetOwned(square){
    let set = square.setColor
    let owned = this.properties.filter(property => property.setColor === set)
    return owned
  }

  checkIfFullSetOwned(square){
    let set = square.setColor
    let owned = this.partsOfSetOwned(square)
    let ownedSize = owned.length

    if ((set === "darkblue" || set === "brown") && ownedSize === 2) {
      owned.forEach(property => property.fullSet = true)
    } else if (ownedSize === 3) {
      owned.forEach(property => property.fullSet = true)
      }
    }

}


export default Player;
