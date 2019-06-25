import React from 'react';

const Square = (props) => {
  let propsTest = {
    name: "Street Name",
    price: 100,
    color: "green"
  }

  //if corner block
  if(props.type == "Corner"){
    return(
      //Switch statement for type of corner block
      <div style={{backgroundColor: "grey"}}  className="tileCorner">
      <img className="cornerImage" src={props.cornerImage} />
      </div>
    );
  }

  if(props.card.name == "Chance" || props.card.name == "Community Chest" ){
    return(
      <div className="tile">
          <div className="tileInfo">
            <p className="tileText">{props.card.name}</p>
        </div>
      </div>
    );
  }

  if(props.card.setColor == "tax"){
    return(
      <div className="tile">
          <div className="tileInfo">
            <p className="tileText">{props.card.name}</p>
            <p className="tileText">Pay: {props.card.rent}</p>
        </div>
      </div>
    );
  }

  if(props.type == "non-set"){
    return(
      <div className="tile">
          <div className="tileInfo">
            <p className="tileText">{props.card.name}</p>
            <p className="tileText">{props.card.purchasePrice}</p>
        </div>
      </div>
    );
  }

  //if no card
  if(!props.card){
    return(
      <div className="tile">
        <div style={{backgroundColor: "pink"}}  className="tileColor">
          </div>
          <div className="tileInfo">
            <p className="tileText">NAME</p>
            <p className="tileText">PRICE</p>
        </div>
      </div>
    );
  }

  //property tile
  return(
    <div className="tile">
      <div style={{backgroundColor: props.card.setColor}}  className="tileColor">
        </div>
        <div className="tileInfo">
          <p className="tileText">{props.card.name}</p>
          <p className="tileText">{props.card.price}</p>
          <p className="tileText">{props.card.purchasePrice}</p>
      </div>
    </div>
  )
}

export default Square;
