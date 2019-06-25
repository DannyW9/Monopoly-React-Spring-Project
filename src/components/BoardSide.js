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


	const squares = props.squares.map((square, index) => {
    //CornerBlock
    if(isCornerBlock(square)){
      return (
        <Square card={square} type={"Corner"} cornerImage={props.cornerImage} />
      )
    }else{
      return (
        <Square card={square}/>
      )
    }

	})

	return(
    <div className={props.boardSide}>
		{squares}
    </div>
	)
}
export default BoardSide;
