import React, {Component} from 'react';
import Square from '../components/Square'
import Dice from '../components/Dice'
import BoardSide from '../components/BoardSide'
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

  handleLoading(){
    return <p> Loading HOOKS???</p>
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

    let bottomrow = (<p>LOADING</p>);
    const go = "images/go.png";
    const jail = "images/jail.png";
    const freeParking = "images/FreeParking.png";
    const goToJail = "images/gotojail.png";
    const props = this.props;

    let endButton = buttonLogic.checkIfTurnEnd(props)
    let dice = buttonLogic.checkIfGameStarted(props)

    if(this.props.squares){

    }

    if(this.props.squares.length <= 0){
      return this.handleLoading();
    } else {

      const bottomrow = this.props.squares.slice(0,10).reverse();
      const leftrow = this.props.squares.slice(10,20).reverse();
      const toprow = this.props.squares.slice(20,30);
      const rightrow = this.props.squares.slice(30,40);

      return(
        <div>
          <Renderer players={this.props.players} board={this.boardElement} />
          <div ref="board" className="Board">
            <img className="centreImage" src="images/monopolyman.png"/>
              <BoardSide squares={bottomrow} cornerImage={go} boardSide={"BottomRow"}/>
              <BoardSide squares={leftrow} cornerImage={jail} boardSide={"LeftColumn"}/>
              <BoardSide squares={toprow} cornerImage={freeParking} boardSide={"TopRow"}/>
              <BoardSide squares={rightrow} cornerImage={goToJail} boardSide={"RightColumn"}/>
          </div>
          {dice}
          {endButton}
          {this.renderInit}
        </div>
      )
    }
  }
}

export default Board;
