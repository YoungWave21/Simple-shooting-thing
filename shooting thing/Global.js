let bulletone = [];
// let bulletoneRight = [];
let bullettwo = [];
let playeroneY = [];
let playertwoY = [];
let oneshoot = true;
let twoshoot = true;
let playerone = {
    x: 300,
    y: 70,
    xs: 4,
    ys: 0,
    w: 20,
    canJump: true,
    h: 20,
    a: 0.7,
    stand: true,
    stand2: true,
    lives: 5,
    isShot: false,
    direction: "left",
}
let death = {
    one: 0,
    two: 0
}
let playertwo = {
    y: 70,
    x: 900,
    xs: 4,
    ys: 0,
    w: 20,
    canJump: true,
    h: 20,
    a: 0.7,
    stand: true,
    stand2: true,
    lives: 5,
    isShot: false,
    direction: "right",
}
let TieBraker = "";
let point = {
    one: 0,
    two: 0
}
let directionOne = "right";
let directionTwo = "left";
//CANVAS size 1200 by 650
//top one
let platform = {
    x: 269,
    y: 220,
    w: 664,
    h: 20
}
//second layer left
let platform1 = {
    x: 295,
    y: 305,
    w: 140,
    h: 20
}
//second layer right
let platform2 = {
    x: 758,
    y: 305,
    w: 140,
    h: 20
}
//middle long 
let platform3 = {
    x: 110,
    y: 380,
    w: 1000,
    h: 20
}
//bottom middle plank
let platform4 = {
    x: 420,
    y: 480,
    w: 360,
    h: 20
}
//lower congruent sides
let platform5 = {
    x: 70,
    y: 570,
    w: 410,
    h: 20
}
let platform6 = {
    x: 720,
    y: 570,
    w: 435,
    h: 20
}
let leftedgeof1, rightedgeof2, leftedgeof2, rightedgeof1;
const ACCELERATION = 0.5;
const JUMP = -10;
let level = "level1";
let freeze = false;
let audio = new Audio("audio/BackgroundMusic.mp3");
let bulletsound = new Audio("audio/Bullet shot.mp3");
let rows1 = 2;
let cols1 = 8;
let leftDude = document.getElementById("left");
let rightDude = document.getElementById("runningleft");
let sheetwidth1 = 864;
let sheetheight1 = 280;
let playerimagewidth1 = sheetwidth1 / cols1;
let playerimageheight1 = sheetheight1 / rows1;
let currentframe1 = 0;
let framecount1 = 0;
let srcx1 = currentframe1 * playerimagewidth1;
let srcy1 = 0;
//player 2 sprite stuff
let cols2 = 6;
let sheetwidth2 = 1536;
let sheetheight2 = 256;
let playerimagewidth2 = sheetwidth2 / cols2;
let playerimageheight2 = sheetheight2;
let currentframe2 = 0;
let framecount2 = 0;
let srcx2 = currentframe2 * playerimagewidth2;
let srcy2 = 0;