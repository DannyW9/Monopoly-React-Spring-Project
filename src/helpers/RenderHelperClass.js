import Vec2 from '../helpers/Vec2';

class RenderHelper {
  constructor(canvas, ctx){
      this.canvas = canvas;
      this.ctx = ctx;
      this.p1 = 0;
      this.p2 = 0;
      this.p3 = 0;
      this.p4 = 0;
      this.players = [this.p1,this.p2,this.p3,this.p4];
  }

  testFunction(){

  }

  moveAndRenderLoop(playerIndex, targetIndex){
    //check

    if(/*this.players[playerIndex] < this.props.players[playerIndex].position*/true){
      //clear
      this.clearCanvas();

      //move
      this.players[playerIndex] += 1;

      //render
      this.renderAllPlayers();

      //wait - loop
      setTimeout(() => {
        this.moveAndRenderLoop();
      }, 250);
    }

  }

  renderPlayer(positionIndex, color, offset){
    let position = this.calculateCoordinates(positionIndex);
    this.ctx.beginPath();
    this.ctx.arc(position.x + 25 + offset, position.y + 25 + offset, 15, 0, 2 * Math.PI);
    this.ctx.fillStyle = color;
    this.ctx.fill();

    this.ctx.arc(position.x + 25 + offset, position.y + 25 + offset, 15, 0, 2 * Math.PI);
    this.ctx.fillStyle = "white";
    this.ctx.stroke();

  }

  calculateCoordinates(index){
    //position 1
    const baseX = 570;
    const baseY = 650;
    const tileWidth = 60;

    //Player on Go
    if(index == 0){
        return new Vec2(baseX + 80,baseY);
    }else if (index < 10) {//Player on bottom row
          return new Vec2(baseX-((index-1)*tileWidth),baseY);
    }else if (index == 10) {//Player is on JAIL
        return new Vec2(10,baseY-((index-10)*(tileWidth+2)));
    }else if (index < 20) {//Player on left column
        return new Vec2(10,baseY-((index-10)*(tileWidth+2)));
    }else if (index == 20) {//Player on FREE PARKING
        return new Vec2(10,10);
    }else if (index < 30) {//Player on top row
      return new Vec2(40+(index-20)*tileWidth,10);
    }else if (index == 30) {//Player on GO TO JAIL
        return new Vec2(baseX + 80,10);
    }else if (index <= 40) {//Player on right column
      return new Vec2(baseX+80, 40 + ((index-30)*tileWidth));
    }

  }

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  }

  renderPlayersFromProps(playerprops){
    this.clearCanvas();
    for(let i=0; i<playerprops.length;i++){
      //Using local players to position and props players for colour
      this.renderPlayer(playerprops[i].position, playerprops[i].color, i*10);
    }
  }

}

export default RenderHelper;
