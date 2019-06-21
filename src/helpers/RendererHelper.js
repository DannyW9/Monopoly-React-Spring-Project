const createRenderer = function() {

  const renderer = {

    initRenderer(canvas, ctx){
      this.canvas = canvas;
      this.ctx = ctx;
    },

    renderTest(canvas, ctx){
      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(5, 5, 290, 140);
      ctx.stroke();
    },

    renderPlayer(image, position){
      let x = 20;
      let y = 20;

      const imageHTML = new Image();
      imageHTML.src = 'images/car.png';

      imageHTML.onload = () => {
          this.ctx.drawImage(imageHTML,20,  20, 53, 59);
      }

    }

  }

  return renderer;
}

module.exports = createRenderer;
