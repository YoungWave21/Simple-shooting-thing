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
    lives: 5
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
    lives: 5
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