import React, {Component} from 'react';
import Square from '../components/Square'
<<<<<<< HEAD
import Renderer from '../containers/Renderer'
=======
>>>>>>> 57f85114c0ebfacd0cde832135373c7b15c00d25
//A unit is one tile width
//Board is 13 units wide... 9 Property slots then 2 slots at each end for corner slots
class Board extends Component {
  render(){
    return(
<<<<<<< HEAD
      <div>
        <Renderer />
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
=======
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
>>>>>>> 57f85114c0ebfacd0cde832135373c7b15c00d25
        </div>
      </div>
    )
  }
}

export default Board;
