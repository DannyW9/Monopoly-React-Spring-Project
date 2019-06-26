import React, {Component} from 'react';

class HoverZoom extends Component {

  //Track mouse position and pass to document.elementFromPoint to get element?
  //Use mouse hover?


  render(){
    console.log("MOUSE OVER: ", this.props.currentTile );
    if(this.props.currentTile == null){
      return <p>No Card</p>
    }
    return(
      <div className="HoverZoomCard">
      <div style={{background : this.props.currentTile.setColor}} className="HoverZoomCardTitleBox">
      <p className="tileText" style={{fontSize: 20 + 'px'}} >{this.props.currentTile.name}</p>
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
