import React, {Component} from 'react';
import createRenderer from '../helpers/RendererHelper'
import RenderHelper from '../helpers/RenderHelperClass'
import tilePositions from '../helpers/tilePositions';
import Vec2 from '../helpers/Vec2';

class Renderer extends Component {


  constructor(props) {
      super(props);
      this.state = {
        renderer: {},
        playerPositions : [0,0,0,0]
      }

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

     this.setState({renderer : renderer});

     renderer.renderAllPlayers(this.props.players);

     const testvec = new Vec2(1,2);
  }

  renderPlayers(){
    this.state.renderer.renderAllPlayers(this.props.players);
  }

  playerPosChanged(){
    let index = 0;
    if(this.state.playerPositions[0] != this.props.players[0].position){
      console.log("PLAYER 0 MOVED TO: " + this.props.players[0].position);
      return true;
    }

    if(this.state.playerPositions[1] != this.props.players[1].position){
      console.log("PLAYER 0 MOVED TO: " + this.props.players[1].position);
      return true;
    }

  }




  render(){
    if(this.props.players.length != 0){

      if(this.playerPosChanged()){
          console.log("PLAYER HAS MOVED");
        //this.state.renderer.moveAndRenderLoop();
          this.state.renderer.renderPlayersFromProps(this.props.players);
      }

      console.log("RENDERING PLAYERS");
    //  this.renderPlayers();
        this.state.renderer.renderPlayersFromProps(this.props.players);
    }


    return (
          <canvas ref="canvas" className="canvas" id="myCanvas" width="720" height="720"></canvas>
    )
  }

}

export default Renderer;
