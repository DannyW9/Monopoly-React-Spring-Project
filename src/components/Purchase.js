import React, {Component} from 'react';
import buttonLogic from '../helpers/logic/ButtonLogic';

class Purchase extends Component{

  constructor(props){
    super(props)
    this.state = {
      purchaseMessage: ""
    }

    this.handleBuyProperty = this.handleBuyProperty.bind(this)
  }

  handleBuyProperty(){
    this.props.purchaseProperty()
    this.setState({purchaseMessage: "You purchased " + this.props.squares[this.props.activePlayer.position].name + " for £" + this.props.squares[this.props.activePlayer.position].purchasePrice})
  }

  render(){
    let currentSquare = this.props.squares[this.props.activePlayer.position]
    let purchaseButton = buttonLogic.checkIfCanBuyProperty(currentSquare, this.handleBuyProperty)

    return(
      <div>
        {purchaseButton}
        <p>{this.state.purchaseMessage}</p>
      </div>
    )
  }


}

export default Purchase;
