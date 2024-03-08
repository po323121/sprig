
// define the sprites in our game
const player = "p";
const obstacle = "o";
const background = "b";
let score = 0;
let level = 0;



// assign bitmap art to each sprite
setLegend(
  [obstacle, bitmap`
................
................
..5....7........
..57..737.......
..55779337......
....5799373.....
....57799333....
...395799333....
...399599933....
....39999933....
.....999993.....
........99......
................
................
................
................`],
  [player, bitmap`
.......3........
.....33333......
....3333333.....
....3333333.....
...CCCCCCCCC....
....DHHHH00.....
....DDHH880.....
....DHH88HH.....
....0DD777H.....
.....DDDD11.....
.....111.81.....
.....158801.....
....8888811.....
......85811.....
.....88LL1......
.....88.LL......`],
  [background, bitmap`
....555555......
....HH....55....
......HH....555.
...0000.........
555000000H..0000
....000055000000
5HHHH00055000000
5.6HHHHHHHHHHHH.
5.6.....HHH.HHH.
.56..666........
.56..6.HHHHH....
.5666666666666..
6656666...666...
..56666666666...
..5..55555555...
..55.........555` ] 
);

// Step 1 - Add player to map

const levels = [map`
........
........
........
........
........
........
........
....p...`, map`
...b....
........
........
..o.oo..
...o....
........
........
........
...p....`,map`
oobobo..
........
........
........
........
........
........
....p...`,map`
b...b..b
........
........
........
........
........
........
....p...`,]
const gameOverWin = [map`
........
o..o....
o..oo...
o..o.ooo
o.oooo.o
oooooo.o
........
...p....`]
const currentLevel = levels[level];
setMap(currentLevel);


const melody = tune`
37.5: C5-37.5 + E5-37.5 + D5-37.5 + B4-37.5 + A4-37.5,
37.5: D5/37.5 + C5^37.5 + E5/37.5 + E4-37.5 + G5/37.5,
37.5: E5-37.5 + B4^37.5 + D4-37.5 + E4/37.5 + F4/37.5,
37.5: C5~37.5 + F5^37.5 + B4^37.5 + E5-37.5 + D4-37.5,
37.5: C5~37.5 + F5/37.5 + A4^37.5 + G5/37.5 + E5-37.5,
37.5: C5~37.5 + B4~37.5 + G5^37.5 + A4^37.5 + B5/37.5,
37.5: B4~37.5 + A5^37.5 + A4^37.5 + B5/37.5 + E5/37.5,
37.5: B4~37.5 + B5/37.5 + G4^37.5 + E5/37.5 + F4-37.5,
37.5: A4~37.5 + A5^37.5 + G4^37.5 + B5/37.5 + E5/37.5,
37.5: A4~37.5 + A5^37.5 + G4^37.5 + B5/37.5 + E5/37.5,
37.5: G4~37.5 + G5^37.5 + F4^37.5 + B5/37.5 + D5/37.5,
37.5: G4~37.5 + G5^37.5 + F4^37.5 + B5/37.5 + D5/37.5,
37.5: G4~37.5 + F4^37.5 + G5^37.5 + B5/37.5 + C5/37.5,
37.5: F4^37.5 + F5^37.5 + B5/37.5 + C5/37.5 + D4-37.5,
37.5: F4^37.5 + F5^37.5 + B5/37.5 + C5/37.5 + C4-37.5,
37.5: F4^37.5 + E4~37.5 + E5^37.5 + B5/37.5 + B4/37.5,
37.5: E4^37.5 + D5^37.5 + B5/37.5 + B4/37.5 + C4-37.5,
37.5: E4^37.5 + C5^37.5 + B5/37.5 + B4/37.5 + C4-37.5,
37.5: E4^37.5 + C5^37.5 + A5/37.5 + B4/37.5 + D4-37.5,
37.5: E4^37.5 + B4-37.5 + A5/37.5 + D4-37.5 + C5-37.5,
37.5: E4^37.5 + B4-37.5 + A5/37.5 + D4-37.5 + C5-37.5,
37.5: E4^37.5 + A4^37.5 + G5/37.5 + B4-37.5 + C5-37.5,
37.5: F4^37.5 + G4^37.5 + E4^37.5 + G5/37.5 + A4/37.5,
37.5: E4^37.5 + F4^37.5 + F5/37.5 + A4/37.5 + B4-37.5,
37.5: D4^37.5 + E4^37.5 + F5/37.5 + A4/37.5 + B4-37.5,
37.5: E4^37.5 + E5/37.5 + A4/37.5 + B4-37.5 + B5~37.5,
37.5: E4^37.5 + E5/37.5 + G4/37.5 + B4-37.5 + A5~37.5,
37.5: E4^37.5 + C5/37.5 + D5/37.5 + G4/37.5 + B4-37.5,
37.5: E4^37.5 + B4-37.5 + C5/37.5 + G4/37.5 + A5~37.5,
37.5: E4^37.5 + F4/37.5 + B4-37.5 + A5~37.5 + B5~37.5,
37.5: E4^37.5 + F4/37.5 + A4-37.5 + B4-37.5 + A5~37.5,
37.5: E4^37.5 + F4^37.5 + A4-37.5 + B5~37.5 + A5~37.5`
playTune(melody)
playTune(melody, 5)
const playback = playTune(melody, Infinity)
//setBackground(background)


// Create a variable that shows when the game is running
var gameRunning = true; 
map`
.`

// START - PLAYER MOVEMENT CONTROLS

onInput("a", () => {
  if (gameRunning) {
    getFirst(player).x -= 1;
    score++;
  }
});

// Step 2 - Add move right controls
onInput("d", () => {
  if (gameRunning) {
    getFirst(player).x += 1;
    score++;
  }
});
onInput("w", () => {
  if (gameRunning) {
    getFirst(player).y -= 1;
    score--;
  }
});
onInput("s", () => {
  if (gameRunning) {
    getFirst(player).y += 1;
    score--;
  }
});
// END - PLAYER MOVEMENT CONTROLS

// Put obstacle in a random position
function spawnObstacle() {
  let x = Math.floor(Math.random() * 8);
  let y = 0; 
  addSprite(x, y, obstacle);
}

// Make obstacles move
function moveObstacles() {
  let obstacles = getAll(obstacle);
 
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
  }
}

// Make obstacles disappear
function despawnObstacles() {
  let obstacles = getAll(obstacle);

  for (let i = 0; i < obstacles.length; i++) {
   if (obstacles[i].y >= 8) {
     obstacles[i].remove();
   }
  }
}

// See if the player was hit
function checkHit() {

  // Step 3 - Fix code
  let obstacles = getAll(obstacle);
  let p = getFirst(player);

  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x == p.x && obstacles[i].y == p.y) {
      return true;
    }
  }

  return false;
 
}

var gameLoop = setInterval(() => {
   addText('score', {
      x: 2,
      y: 0,
      color: color`0`
    });  
     addText(`${score}`, {
      x: 8,
      y: 0,
      color: color`0`
    });  
  // Step 4 - Add all game functions
  spawnObstacle()
  moveObstacles()
  despawnObstacles()

 if (checkHit()) {
    clearInterval(gameLoop);
    gameRunning = false;
    addText(`dead`, {
      x: 8,
      y: 4,
      color: color`3`
    });    
  }


if((score  > 5 + (level* 5)))
{
 level++
  score = 0;
  if(level <= 3)
    {
      setMap(levels[level])
    }
    else
    {
      setMap(gameOverWin[0])
    }
}
if((score > 30 + (level * 30)) )
  {
   level++;
    if(level <= 3)
    {
      setMap(levels[level])
    }
    else
    {
      setMap(gameOverWin[0])
    }
  }
if((score >= 80 + (level * 80)))
  {
   level++;
    if(level <= 3)
    {
      setMap(levels[level])
    }
    else
    {
      setMap(gameOverWin[0])
    }    

}
  }, 500);
