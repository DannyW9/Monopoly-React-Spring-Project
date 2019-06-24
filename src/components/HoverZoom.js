import React, {Component} from 'react';

class HoverZoom extends Component {

  //Track mouse position and pass to document.elementFromPoint to get element?
  //Use mouse hover?

  render(){
    console.log("MOUSE OVER:", document.elementFromPoint(10,10));
    return(
      <h1>HOVER ZOOM</h1>
    )
  }
}

export default HoverZoom;
