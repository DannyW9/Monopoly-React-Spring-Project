class Square {

  constructor(name, squareNumber, setColor, purchasePrice, rent, h1, h2, h3, h4, hotel, buildCost){
    this.name = name
    this.squareNumber = squareNumber
    this.setColor = setColor
    this.purchasePrice = purchasePrice
    this.rent = rent
    this.h1 = h1
    this.h2 = h2
    this.h3 = h3
    this.h4 = h4
    this.hotel = hotel
    this.buildCost = buildCost
    this.setRent = (rent * 2)
    this.mortgage = (purchasePrice / 2)
    this.unmortgage = (this.mortgage * 1.1)
    this.owner = null

  }


}

export default Square;
