import React, {Component} from 'react';
import buttonLogic from '../helpers/logic/ButtonLogic';

class Purchase extends Component{

  constructor(props){
    super(props)

    this.handleBuyProperty = this.handleBuyProperty.bind(this)
  }

  handleBuyProperty(){
    this.props.purchaseProperty()
  }

  render(){
    let currentSquare = this.props.squares[this.props.activePlayer.position]
    let purchaseButton = buttonLogic.checkIfCanBuyProperty(currentSquare, this.handleBuyProperty)

    return(
      <div>
        {purchaseButton}
      </div>
    )
  }


}

export default Purchase;
