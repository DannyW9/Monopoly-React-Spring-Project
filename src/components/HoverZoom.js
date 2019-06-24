import React, {Component} from 'react';

class HoverZoom extends Component {

  //Track mouse position and pass to document.elementFromPoint to get element?
  //Use mouse hover?


  render(){
    console.log("MOUSE OVER:");
    return(
      <div className="HoverZoomCard">
      <div className="HoverZoomCardTitleBox">
      <p className="tileText" style={{fontSize: 20 + 'px'}} >Orange Town</p>
      </div>
      <div className="HoverZoomCardInfo">
      <p className="tileText">Rent ______________ £12</p>
      <p className="tileText">Rent ______________ £12</p>
      <p className="tileText">Rent ______________ £12</p>
      <p className="tileText">Rent ______________ £12</p>
      <p className="tileText">Rent ______________ £12</p>
      <p className="tileText">_____________________________</p>
      <p className="tileText">Houses Cost _________ £12</p>
      <p className="tileText">Hotels Cost __________ £12</p>
      </div>
      </div>
    )
  }
}

export default HoverZoom;
