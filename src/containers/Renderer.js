import React, {Component} from 'react';
import createRenderer from '../helpers/RendererHelper'
import RenderHelper from '../helpers/RenderHelperClass'
import tilePositions from '../helpers/tilePositions';
import Vec2 from '../helpers/Vec2';

class Renderer extends Component {


  constructor(props) {
      super(props);
      this.renderer = {};
  }

  //Animate Movement
  animatePlayer(){
    //Render at position
      //move one
        //render
  }

  moveOneAndRender(current, renderer){
    //renderer.renderPlayer(current, "red");
  }

  //Check Players positions

  componentDidMount() {
    console.log(this.props.players);
     const canvas = this.refs.canvas
     const ctx = canvas.getContext("2d")
     const renderer = new RenderHelper(canvas, ctx);

     renderer.renderAllPlayers();
     //renderer.moveAndRenderLoop();

     const testvec = new Vec2(1,2);
  }




  render(){
    return (
          <canvas ref="canvas" className="canvas" id="myCanvas" width="720" height="720"></canvas>
    )
  }

}

export default Renderer;
