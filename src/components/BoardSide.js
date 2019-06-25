import React from 'react';
import Square from './Square.js';


const BoardSide = (props) => {

  if(!props){
    console.log("No props");
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
    console.log(colour, style.color === colour);
    return style.color == colour;
  }

  function handleSquare(square){
    //Check if setColour != color
    if(!isColour(square.setColor)){
      return <Square card={square} type="non-set" />
    }
    //if not colour go to handle non setSqaure
    return  <Square card={square}/>
  }

  function handleCorner(square){
    return   <Square card={square} type={"Corner"} cornerImage={props.cornerImage} />
  }

	const squares = props.squares.map((square, index) => {
    //Corner Square
    if(isCornerBlock(square)){
      return (handleCorner(square))
    }else{ //Normal Square
      return (handleSquare(square))
    }
	})

	return(
    <div className={props.boardSide}>
		{squares}
    </div>
	)
}
export default BoardSide;
