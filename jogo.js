let frames = 0;

console.log('Flappy Bird');

const sprites = new Image();
sprites.src = '/sprites.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getReady = {
      spriteX: 134, 
      spriteY: 0, 
      width: 174, 
      height: 152, 
      x: (canvas.width / 2) - 174 /2, 
      y: 50,
      draw() {  
        ctx.drawImage ( //drawImage(image: CanvasImageSource, dx: number, dy: number): void
              sprites,
              getReady.spriteX, getReady.spriteY,
              getReady.width, getReady.height,
              getReady.x, getReady.y,
              getReady.width, getReady.height,
    );
 }      
}

const backGround = {
  spriteX: 390, 
  spriteY: 0, 
  width: 275, 
  height: 204, 
  x: 0, 
  y: canvas.height - 204,
  draw() {  
    ctx.fillStyle = '#70c5ce' ;
    ctx.fillRect (0, 0, canvas.width, canvas.height); //fillRect(x: number, y: number, w: number, h: number): void;

    ctx.drawImage ( //drawImage(image: CanvasImageSource, dx: number, dy: number): void
    sprites,
    backGround.spriteX, backGround.spriteY,
    backGround.width, backGround.height,
    backGround.x , backGround.y,
    backGround.width, backGround.height,
);
    ctx.drawImage ( //drawImage(image: CanvasImageSource, dx: number, dy: number): void
        sprites,
        backGround.spriteX, backGround.spriteY,
        backGround.width, backGround.height,
        (backGround.x + backGround.width), backGround.y,
        backGround.width, backGround.height,
    );
}
}
const floor = {
          spriteX: 0, 
          spriteY: 610, 
          width: 224, 
          height: 112, 
          x: 0, 
          y: canvas.height - 112,
          draw() {  
            ctx.drawImage ( //drawImage(image: CanvasImageSource, dx: number, dy: number): void
                  sprites,
                  floor.spriteX, floor.spriteY,
                  floor.width, floor.height,
                  floor.x, floor.y,
                  floor.width, floor.height,
    );
    ctx.drawImage ( //drawImage(image: CanvasImageSource, dx: number, dy: number): void
    sprites,
    floor.spriteX, floor.spriteY,
    floor.width, floor.height,
    (floor.x + floor.width), floor.y,
    floor.width, floor.height,
);

  }
 }

function colide(flappyBird, floor) {
  const flappyBirdY = flappyBird.y + flappyBird.height;
  const floorY = floor.y;
  
  if (flappyBirdY >= floorY) {
    return true;
    
  } 
    return false;
}

function createFlappyBird() {
  const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    width: 33,
    height: 24,
    x: 10,
    y: 50,
    flap: 4.6,
    flap() {
      flappyBird.velocity = -flappyBird.flap;
    },
    gravity: 0.25,
    velocity: 0,
 
 
    update() {
      if (colide(flappyBird, floor)) {
        changeToScreen(screen.START);
        return;

      }


      flappyBird.velocity = flappyBird.velocity + flappyBird.gravity;
      flappyBird.y = flappyBird.y + flappyBird.velocity;
    },

    draw() {

      ctx.drawImage(
        sprites,
        flappyBird.spriteX, flappyBird.spriteY,
        flappyBird.width, flappyBird.height,
        flappyBird.x, flappyBird.y,
        flappyBird.width, flappyBird.height
      );
    }
  }
  return flappyBird;
}

const globais = {};
let activeScreen = {};

function changeToScreen(newScreen) {
  activeScreen = newScreen;

  if (activeScreen.begin) {
    activeScreen.begin();
  }

}

const screen = {
START: {
  begin() {
    globais.flappyBird = createFlappyBird();
  },
  draw() {
    backGround.draw();
    floor.draw();
    globais.flappyBird.draw();
    getReady.draw ();
  },

  click(){ 
  changeToScreen(gameBoard); 

},
  update() {

   }
  }
};

gameBoard = {
  draw() {
    backGround.draw();
    floor.draw();
    globais.flappyBird.draw();
  },
  click () {
    globais.flappyBird.flap();
  },
  update() {
    globais.flappyBird.update();
   }
   };
       
    function loop () {  

      activeScreen.draw();
      activeScreen.update();

      frames = frames + 1;
      requestAnimationFrame(loop);
      
  }

  window.addEventListener('click', function() {
    if (activeScreen.click) {
      activeScreen.click();
  }
});

  changeToScreen(screen.START);
 loop(); 