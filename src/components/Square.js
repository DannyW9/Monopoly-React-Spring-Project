import React from 'react';

const Square = (props) => {
  let propsTest = {
    name: "Street Name",
    price: 100
  }
  if(props.type){
    return(
      <div className="tileCorner"></div>
    );
  }

  return(
    <div className="tile">
      <div className="tileBlue">
        </div>
        <div className="tileInfo">
          <p className="tileText">{propsTest.name}</p>
          <p className="tileText">{propsTest.price}</p>
      </div>
    </div>
  )
}

export default Square;
