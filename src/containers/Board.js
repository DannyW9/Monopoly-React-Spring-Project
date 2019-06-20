import React, {Component} from 'react';
import Square from '../components/Square'
//A unit is one tile width
//Board is 13 units wide... 9 Property slots then 2 slots at each end for corner slots
class Board extends Component {
  render(){
    return(
      <div className="Board">
        <div className="BottomRow">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square type="Corner"/>
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
          <Square type="Corner"/>
        </div>
        <div className="TopRow">
        <Square type="Corner"/>
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
          <Square type="Corner"/>
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
    )
  }
}

export default Board;
