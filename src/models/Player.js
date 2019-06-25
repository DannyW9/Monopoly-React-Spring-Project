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

  // resetState(){
  //   this.money = 1500
  //   this.properties =[]
  //   this.position = 0
  //   this.jailStatus = false
  //   this.timeInJail = 0
  //   this.goojfCard = false
  // }

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

// Simple rent without dealing with houses or full sets
  payRent(property){
    this.money -= property.rent
  }

// Simple rent without dealing with houses or full sets
  receiveRent(property){
    this.money += property.rent
  }

  checkMoney(){
    return this.money
  }

  buyProperty(square){
    this.money -= square.purchasePrice
  }


}

export default Player;
