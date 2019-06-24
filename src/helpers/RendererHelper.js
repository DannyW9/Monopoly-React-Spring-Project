import Vec2 from '../helpers/Vec2';

const createRenderer = function() {

    const p1 = 0;

    const renderer = {

    initRenderer(canvas, ctx){
      this.canvas = canvas;
      this.ctx = ctx;
    },

    moveAndRenderLoop(){
      //check
      if(/*Player pos != CurrentPos*/true){
        //move
        this.p1 += 1;

        //render
        //this.renderPlayer(p1, "pink");

        //wait - loop
        setTimeout(this.moveAndRenderLoop, 500);
      }

    },

     renderPlayer(positionIndex, color){
      //console.log(player1Test.positionIndex);
      let position = this.calculateCoordinates(positionIndex);
      this.ctx.beginPath();
      this.ctx.arc(position.x + 25, position.y + 25, 15, 0, 2 * Math.PI);
      this.ctx.fillStyle = color;
      this.ctx.fill();
    },

    calculateCoordinates(index){
      //position 1
      const baseX = 570;
      const baseY = 650;
      const tileWidth = 60;
      if(index == 0){
          return new Vec2(baseX + 80,baseY);
      }else if (index <= 10) {
            return new Vec2(baseX-((index-1)*tileWidth),baseY);
      }else if (index <= 20) {
          return new Vec2(10,baseY-((index-9)*tileWidth));
      }else if (index <= 30) {
        return new Vec2(10+(index-19)*tileWidth,10);
      }else if (index <= 40) {
        return new Vec2(10+(index-29)*tileWidth,10+((index-29)*tileWidth));
      }
      //start from baseX(650) to 1(650-80) to 2(570-60)...
      //from 1 - 9, - 60
      // 9 - 10 - 80 to get to corner
      // 11 + y 80 then 60 till 19 then 80 to top left
      //move along top
      //move back down
    }



  }

  return renderer;
}

export default createRenderer;
