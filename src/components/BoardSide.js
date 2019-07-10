import React from 'react';
import Square from './Square.js';


const BoardSide = (props) => {

  if(!props){
    return (<p>Loading</p>)
  }

  function isCornerBlock(square){
    if(square.name === "Go" || square.name === "Jail" || square.name === "Free Parking" || square.name === "Go to Jail"){
      return true;
    }
    return false;
  }

  function isColour(colour){
    var style = new Option().style;
    style.color = colour;
    return style.color == colour;
  }

  function returnSquare(square){
    //Check if setColour != color
    if(!isColour(square.setColor)){
      return <Square key={square.squareNumber} card={square} type="non-set" />
    }
    //if not colour go to return non setSqaure
    return  <Square key={square.squareNumber} card={square}/>
  }

  function returnCorner(square){
    return   <Square key={square.squareNumber} card={square} type={"Corner"} cornerImage={props.cornerImage} />
  }

	const squares = props.squares.map((square, index) => {
    //Corner Square
    if(isCornerBlock(square)){
      return (returnCorner(square))
    }else{ //Normal Square
      return (returnSquare(square))
    }
	})

	return(
    <div className={props.boardSide}>
		{squares}
    </div>
	)
}
export default BoardSide;
