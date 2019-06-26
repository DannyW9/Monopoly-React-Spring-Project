import React, {Component} from 'react';

class HoverZoom extends Component {

  //Track mouse position and pass to document.elementFromPoint to get element?
  //Use mouse hover?

  generateCardInfo(){
    if(this.props.currentTile.rents == null || this.props.currentTile.name.includes("Chance") || this.props.currentTile.name.includes("Community") || this.props.currentTile.name.includes("Tax")){
      return(<p></p>)
    }

    if(this.props.currentTile.name.includes("Station")){
      return(
        <div>
        <p className="tileText">Rent _______________ £25 </p>
        <p className="tileText">If 2 Stations are owned £50</p>
        <p className="tileText">If 3 Stations are owned £100</p>
        <p className="tileText">If 4 Stations are owned £200</p>
        </div>
      )
    }

    return(
      <div>
      <p className="tileText">Rent _______________ £{this.props.currentTile.rents[0]}</p>
      <p className="tileText">Full Set £{this.props.currentTile.rents[0]*2}</p>
      <p className="tileText">With 1 House ____ £{this.props.currentTile.rents[1]}</p>
      <p className="tileText">With 2 Houses  ___ £{this.props.currentTile.rents[2]}</p>
      <p className="tileText">With 3 Houses ___ £{this.props.currentTile.rents[3]}</p>
      <p className="tileText">With 4 Houses  ___ £{this.props.currentTile.rents[4]}</p>
      <p className="tileText">With Hotel ______________ £{this.props.currentTile.rents[5]}</p>
      <p className="tileText">_____________________________</p>
      <p className="tileText">Houses Cost _________ £{this.props.currentTile.buildCost}</p>
      <p className="tileText">Hotels Cost __________ £{this.props.currentTile.buildCost}</p>
      </div>
    )
  }

  render(){
    if(this.props.currentTile == null){
      return <p></p>
    }

    const info = this.generateCardInfo();

    return(
      <div className="HoverZoomCard">
      <div style={{background : this.props.currentTile.setColor}} className="HoverZoomCardTitleBox">
      <p className="tileText" style={{fontSize: 20 + 'px'}} >{this.props.currentTile.name}</p>
      </div>
      <div className="HoverZoomCardInfo">
      {info}
      </div>
      </div>
    )
  }
}

export default HoverZoom;
