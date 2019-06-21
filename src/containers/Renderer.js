import React, {Component} from 'react';
import createRenderer from '../helpers/RendererHelper'

class Renderer extends Component {

  componentDidMount() {
    console.log(this.refs)
     const canvas = this.refs.canvas
     const ctx = canvas.getContext("2d")
     console.log(canvas);
     const renderer = createRenderer();
     renderer.initRenderer(canvas, ctx);

     const image = "images/go.png";

     renderer.renderPlayer(image, 1,1);
  }


  render(){
    return (
          <canvas ref="canvas" className="canvas" id="myCanvas" width="720" height="720"></canvas>
    )
  }

}

export default Renderer;
