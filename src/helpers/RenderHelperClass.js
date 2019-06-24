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

  moveAndRenderLoop(){
    //check

    if(/*Player pos != CurrentPos*/true){
      //clear
      this.clearCanvas();

      //move
      this.p1 += 1;

      //render
      this.renderPlayer(this.p1, "pink");

      //wait - loop
      setTimeout(() => {
        this.moveAndRenderLoop();
      }, 250);
    }

  }

  renderPlayer(positionIndex, color, offset){
    //console.log(player1Test.positionIndex);
    let position = this.calculateCoordinates(positionIndex);
    this.ctx.beginPath();
    this.ctx.arc(position.x + 25 + offset, position.y + 25 + offset, 15, 0, 2 * Math.PI);
    this.ctx.fillStyle = color;
    this.ctx.fill();

    this.ctx.arc(position.x + 25 + offset, position.y + 25 + offset, 15, 0, 2 * Math.PI);
    this.ctx.fillStyle = "white";
    this.ctx.stroke();

  }

  renderAllPlayers(){
    for(let i=0; i<4;i++){
      this.renderPlayer(this.players[i], "blue", i*5);
    }
  }

  calculateCoordinates(index){
    //position 1
    const baseX = 570;
    const baseY = 650;
    const tileWidth = 60;

    //Player on Go
    if(index == 0){
        return new Vec2(baseX + 80,baseY);
    }else if (index <= 10) {//Player on bottom row
          return new Vec2(baseX-((index-1)*tileWidth),baseY);
    }else if (index <= 20) {//Player on left column
        return new Vec2(10,baseY-((index-10)*(tileWidth+2)));
    }else if (index <= 30) {//Player on top row
      return new Vec2(20+(index-20)*tileWidth,10);
    }else if (index <= 40) {//Player on right column
      return new Vec2(baseX+80,10+((index-30)*tileWidth));
    }



  }

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  }

}

export default RenderHelper;
