import React, {Component} from 'react';
import createRenderer from '../helpers/RendererHelper'

class Renderer extends Component {


    constructor(props) {
      super(props);

    }

  componentDidMount() {
     const canvas = this.refs.canvas
     const ctx = canvas.getContext("2d")
     const renderer = createRenderer();
     renderer.initRenderer(canvas, ctx);

     const image = "images/go.png";

     renderer.renderPlayer(image, 1,1);
     console.log(this.props);
  }


  render(){
    return (
          <canvas ref="canvas" className="canvas" id="myCanvas" width="720" height="720"></canvas>
    )
  }

}

export default Renderer;
