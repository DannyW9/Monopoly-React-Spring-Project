import React, {Component} from 'react';
import Square from '../components/Square'
import Dice from '../components/Dice'
import PlayerInterface from '../components/PlayerInterface'
import HoverZoom from '../components/HoverZoom'
import BoardSide from '../components/BoardSide'
import Renderer from '../containers/Renderer'
import buttonLogic from '../helpers/logic/ButtonLogic'
//A unit is one tile width
//Board is 13 units wide... 9 Property slots then 2 slots at each end for corner slots
class Board extends Component {

  constructor(props) {
    super(props);
    this.state ={
      board: "bla bla",
      currentTileSelected : {}
    }

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount(){
    this.props.updateMessage("Player1's turn to roll!")
  }

  handleLoading(){
    return <p className="tileText"> Waiting for Game to Start </p>
  }

 handleMouseMove(event){
   let elem = document.elementFromPoint(event.clientX,event.clientY);
   if(elem.className == "tile"){
     let tileIndex = document.elementFromPoint(event.clientX,event.clientY).title;
     this.setState({currentTileSelected : this.props.squares[tileIndex]})
   }else{
     this.setState({currentTileSelected : null})
   }
 //  this.setState({mouseVec : new Vec2(event.clientX, event.clientY)})

 }

  handleHoverComponent(){
    if(this.state.currentTileSelected != null){
      return <HoverZoom currentTile={this.state.currentTileSelected}/>
    }else{
      return <p>NO CURRENT TILE</p>
    }
  }



  render(){

    let bottomrow = (<p>LOADING</p>);
    const go = "images/go.png";
    const jail = "images/jail.png";
    const freeParking = "images/FreeParking.png";
    const goToJail = "images/gotojail.png";
    const props = this.props;

    let endButton = buttonLogic.checkIfTurnEnd(props)
    let dice = buttonLogic.checkIfGameStarted(props)
    let hoverComponent = this.handleHoverComponent();
    //dice.props.mostRecentAction = this.props.mostRecentAction;

    if(this.props.squares.length <= 0){
      return this.handleLoading();
    } else {

      const bottomrow = this.props.squares.slice(0,10).reverse();
      const leftrow = this.props.squares.slice(10,20).reverse();
      const toprow = this.props.squares.slice(20,30);
      const rightrow = this.props.squares.slice(30,40);


      return(
        <div onMouseMove={this.handleMouseMove}>
          {hoverComponent}
          <Renderer players={this.props.players} board={this.boardElement} />
          <div ref="board" className="Board">
            <img className="centreImage" src="images/monopolyman.png"/>
              <BoardSide squares={bottomrow} cornerImage={go} boardSide={"BottomRow"}/>
              <BoardSide squares={leftrow} cornerImage={jail} boardSide={"LeftColumn"}/>
              <BoardSide squares={toprow} cornerImage={freeParking} boardSide={"TopRow"}/>
              <BoardSide squares={rightrow} cornerImage={goToJail} boardSide={"RightColumn"}/>
          </div>
        <div className="playerInterface">
        <PlayerInterface
          purchaseProperty={this.props.purchaseProperty}
          activePlayer={this.props.activePlayer}
          squares={this.props.squares}/>
        {dice}
        {endButton}
        {this.renderInit}
        </div>
      </div>
    )
    }
  }
  }


export default Board;
