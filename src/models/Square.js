class Square {

  constructor(name, squareNumber, setColor, purchasePrice, rents, buildCost){
    this.name = name
    this.squareNumber = squareNumber
    this.setColor = setColor
    this.purchasePrice = purchasePrice
    this.rents = rents
    this.buildCost = buildCost
    this.setRent = (rents[0] * 2)
    this.mortgage = (purchasePrice / 2)
    this.unmortgage = (this.mortgage * 1.1)
    this.owner = null
    this.rentLevel = 0

  }


}

export default Square;
