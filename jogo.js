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

const gameOver = {
  spriteX: 134, 
  spriteY: 153, 
  width: 226, 
  height: 200, 
  x: (canvas.width / 2) - 226 /2, 
  y: 50,
draw() {  
    ctx.drawImage ( //drawImage(image: CanvasImageSource, dx: number, dy: number): void
          sprites,
          gameOver.spriteX, gameOver.spriteY,
          gameOver.width, gameOver.height,
          gameOver.x, gameOver.y,
          gameOver.width, gameOver.height,
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
<<<<<<< HEAD
function  createFloor() {

=======
>>>>>>> d88cd7b6f7ae4407e9a183422dff5842aa60bf6d
const floor = {
          spriteX: 0, 
          spriteY: 610, 
          width: 224, 
          height: 112, 
          x: 0, 
          y: canvas.height - 112,
<<<<<<< HEAD

          update() {
            const floorMovement = 1;
            const repeat = floor.width / 2;
            const movement = floor.x - floorMovement 
            
            floor.x = movement % repeat;
          },

=======
>>>>>>> d88cd7b6f7ae4407e9a183422dff5842aa60bf6d
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
<<<<<<< HEAD
  );
  },
 };
 return floor;
}
=======
);

  }
 }

>>>>>>> d88cd7b6f7ae4407e9a183422dff5842aa60bf6d
function colide(flappyBird, floor) {
  const flappyBirdY = flappyBird.y + flappyBird.height;
  const floorY = floor.y;
  
  if (flappyBirdY >= floorY) {
    return true;
    
  } 
    return false;
}

<<<<<<< HEAD
function createPipes() {
  const pipes = {
    width: 52,
    height: 400,
    floor: {
      spriteX: 0,
      spriteY: 169,
    },
    top: {
      spriteX: 52,
      spriteY: 169,
          },
    space: 80,

    draw() {
      pipes.pairs.forEach(function(pair){
        const yRandom = pair.y;
        const spaceBetweenPipes = 120;
          
        const pipeTopX = pair.x;
        const pipeTopY = yRandom;
        // Top Pipe
        ctx.drawImage (
          sprites,
                    pipes.top.spriteX, pipes.top.spriteY,
                    pipes.width, pipes.height,
                    pipeTopX, pipeTopY,
                    pipes.width, pipes.height,
        )
        // bottom Pipe
        const pipeBottomX = pair.x;
        const pipeBottomY = pipes.height + spaceBetweenPipes + yRandom;
        ctx.drawImage (
          sprites,
                    pipes.floor.spriteX, pipes.floor.spriteY,
                    pipes.width, pipes.height,
                    pipeBottomX, pipeBottomY,
                    pipes.width, pipes.height,
        )

    pair.pipeTop = {
      x: pipeTopX,
      y: pipes.height + pipeTopY
    }
    
    pair.pipeBottom = {
      x: pipeBottomX,
      y: pipeBottomY
    }
  })     
},

colidedWithPipe(pair) {
const headFlappy = globais.flappyBird.y;
const pawFlappy = globais.flappyBird.y + globais.flappyBird.height;

    if ((globais.flappyBird.x + globais.flappyBird.height) >= pair.x) {
      if (headFlappy <= pair.pipeTop.y) {
        return true;
        
      }

      if (pawFlappy >= pair.pipeBottom.y) {
        return true;
      }

    }
    return false;
},

pairs: [],
    update() {
        const more100Frames = frames % 100 === 0;
        if (more100Frames) {
          pipes.pairs.push({
            x: canvas.width,
            y: -150 *(Math.random() + 1 ),
          });
        }

        pipes.pairs.forEach(function(pair) {
          pair.x = pair.x - 2;

          if (pipes.colidedWithPipe(pair)) {
changeToScreen(ScreenGameOver)
            }

          if (pair.x + pipes.width <= 0) {
              pipes.pairs.shift(); 
          }
        });
    }
   }
    
    return pipes;
}

=======
>>>>>>> d88cd7b6f7ae4407e9a183422dff5842aa60bf6d
function createFlappyBird() {
  const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    width: 33,
    height: 24,
    x: 10,
    y: 50,
<<<<<<< HEAD
    jumpFlap: 4.6,
    jump() {
      flappyBird.velocity = -flappyBird.jumpFlap;
=======
    flap: 4.6,
    flap() {
      flappyBird.velocity = -flappyBird.flap;
>>>>>>> d88cd7b6f7ae4407e9a183422dff5842aa60bf6d
    },
    gravity: 0.25,
    velocity: 0,
 
 
    update() {
<<<<<<< HEAD
      if (colide(flappyBird, globais.floor)) {
        changeToScreen(screen.START);
        return;

      };
      flappyBird.velocity = flappyBird.velocity + flappyBird.gravity;
      flappyBird.y = flappyBird.y + flappyBird.velocity;
    },
        flappyMovement: [
          {spriteX: 0, spriteY: 0,},
          {spriteX: 0, spriteY: 26,},
          {spriteX: 0, spriteY: 52,},
          {spriteX: 0, spriteY: 26,},
    ],
actualFrame: 0,
updateActualFrame(){
  
  const frameInterval = 10;
  const passedInterval = frames % frameInterval === 0;

  if (passedInterval) {
  const incrementBase = 1;
  const increment = incrementBase + flappyBird.actualFrame;
  const repetitionBase = flappyBird.flappyMovement.length;
  flappyBird.actualFrame = increment % repetitionBase
}
},

    draw() {
        flappyBird.updateActualFrame();
        const {spriteX, spriteY} = flappyBird.flappyMovement[flappyBird.actualFrame]; 

      ctx.drawImage(
        sprites,
        spriteX, spriteY, 
=======
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
>>>>>>> d88cd7b6f7ae4407e9a183422dff5842aa60bf6d
        flappyBird.width, flappyBird.height,
        flappyBird.x, flappyBird.y,
        flappyBird.width, flappyBird.height
      );
    }
  }
  return flappyBird;
}

<<<<<<< HEAD

=======
>>>>>>> d88cd7b6f7ae4407e9a183422dff5842aa60bf6d
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
<<<<<<< HEAD
    globais.floor = createFloor();  
    globais.pipes = createPipes();
  },
  draw() {
    backGround.draw();
    globais.flappyBird.draw();
    globais.floor.draw();
    getReady.draw ();
  },
  
  click(){ 
    changeToScreen(gameBoard); 
    
  },
  update() {
    globais.floor.update();
    
    
  }
}
};
gameBoard = {
  draw() {
    backGround.draw();
    globais.pipes.draw();
    globais.floor.draw();
    globais.flappyBird.draw();
  },
  click () {
    globais.flappyBird.jump();

  },
  update() {
    globais.flappyBird.update();
    globais.pipes.update();
    globais.floor.update();
   }
   };
    
   ScreenGameOver = {
    draw() {
      gameOver.draw();
    },
  update() {

  },

  click() {
    changeToScreen(screen.START)
  }

   }
=======
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
       
>>>>>>> d88cd7b6f7ae4407e9a183422dff5842aa60bf6d
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