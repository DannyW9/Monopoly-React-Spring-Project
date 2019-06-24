import React, {Component} from 'react';
import Square from '../components/Square'
import Dice from '../components/Dice'
import Renderer from '../containers/Renderer'
import buttonLogic from '../helpers/logic/ButtonLogic'
//A unit is one tile width
//Board is 13 units wide... 9 Property slots then 2 slots at each end for corner slots
class Board extends Component {

  constructor(props) {
    super(props);
    this.state ={
      board: "bla bla"
    }
  }

  componentDidMount(){
    console.log(this.props.players);
  }


  render(){

    const testCardB = {
      price : 20,
      name : "Brown Town",
      color : "brown"
    }

    const testCardLB = {
      price : 70,
      name : "Lightblue Town",
      color : "lightblue"
    }

    const go = "images/go.png";
    const jail = "images/jail.png";
    const freeParking = "images/FreeParking.png";
    const goToJail = "images/gotojail.png";
    const props = this.props;

    let endButton = buttonLogic.checkIfTurnEnd(props)
    let dice = buttonLogic.checkIfGameStarted(props)

    return(
      <div>
        <Renderer players={this.props.players} board={this.boardElement} />
        <div ref="board" className="Board">
          <img className="centreImage" src="images/monopolyman.png"/>
          <div className="BottomRow">
            <Square card={testCardLB}/>
            <Square card={testCardLB}/>
            <Square />
            <Square card={testCardLB}/>
            <Square />
            <Square />
            <Square card={testCardB}/>
            <Square />
            <Square card={testCardB}/>
            <Square cornerImage={go} type="Corner"/>
          </div>
          <div className="LeftColumn">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square cornerImage={jail} type="Corner"/>
          </div>
          <div className="TopRow">
          <Square cornerImage={freeParking} type="Corner"/>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="RightColumn">
            <Square cornerImage={goToJail} type="Corner"/>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        </div>
        {endButton}
        {dice}
        {this.renderInit}
      </div>
    )
  }
}

export default Board;
