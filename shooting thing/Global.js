let bulletone = [];
let bulletoneRight = [];
let bullettwo = [];
let playeroneY = [];
let playertwoY = [];
let oneshoot = true;
let twoshoot = true;
let playerone = {
    x: 300,
    y: 200,
    xs: 4,
    ys: 0,
    w: 20,
    canJump: true,
    h: 20,
    a: 0.7
}
let playertwo = {
    y: 200,
    x: 510,
    xs: 4,
    ys: 0,
    w: 20,
    canJump: true,
    h: 20,
    a: 0.7
}
let directionOne = "right";
let directionTwo = "left";
let platform = {
    x: 250,
    y: 350,
    w: 300,
    h: 20
}
let leftedgeof1, rightedgeof2, leftedgeof2, rightedgeof1;