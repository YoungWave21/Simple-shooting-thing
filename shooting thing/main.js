initGraphics(1000, 800);
let bullet = [];
let playeroneY = [];
let playertwoY = [];
let shoot = true;
let playerone = {
    x: 390,
    y: 500,
    xs: 4,
    ys: 0,
    w: 20,
    canJump: true,
    h: 20,
    a: 0.7
}
let playertwo = {
    y: 500,
    x: 750,
    xs: 4,
    ys: 0,
    w: 20,
    canJump: true,
    h: 20,
    a: 0.7
}
document.addEventListener("keydown", () => {
    // console.log(event.code);
    if (KeyIsPressed["KeyX"] && shoot) {
        bullet.push(playerone.x + playerone.w);
        shoot = false;
        setTimeout(() => {
            shoot = true;
        }, 100);
        playeroneY.push(playerone.y + 10);
    }
});
requestAnimationFrame(main);

function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "black";
    for (let i = 0; i < bullet.length; i++) {
        move(i);
        if (bullet[i] + 20 > cnv.width) {
            bullet.shift();
            playeroneY.shift();
        }
        ctx.fillRect(bullet[i], playeroneY[i], 20, 3);
    };
    // console.log(bullet);
    ctx.fillStyle = "black";
    ctx.fillRect(playerone.x, playerone.y, 20, 20);
    ctx.fillStyle = "red";
    ctx.fillRect(playertwo.x, playertwo.y, 20, 20);
    moveplayeronehr();
    moveplayeronevrt();
    moveplayertwohr();
    moveplayertwovrt();
    requestAnimationFrame(main);
};

function move(i) {
    bullet[i] += 10;
};

function moveplayeronehr() {
    if (KeyIsPressed["ArrowRight"]) {
        playerone.x += playerone.xs;
        if (playerone.x + playerone.w + 2 > cnv.width) {
            playerone.x = cnv.width - playerone.w - 2;
        }
    } else if (KeyIsPressed["ArrowLeft"]) {
        playerone.x -= playerone.xs;
        if (playerone.x < 2) {
            playerone.x = 2;
        }
    }
}
function moveplayeronevrt() {
    playerone.y += playerone.ys;
    playerone.ys += playerone.a;
    if (KeyIsPressed["ArrowUp"] && playerone.canJump) {
        playerone.ys = -15;
        playerone.canJump = false;
    }
    if (playerone.y + playerone.h + 2 > cnv.height) {
        playerone.canJump = true;
        playerone.y = cnv.height - playerone.h - 2;
    }
}


function moveplayertwohr() {
    if (KeyIsPressed["KeyD"]) {
        playertwo.x += playertwo.xs;
        if (playertwo.x + playertwo.w + 2 > cnv.width) {
            playertwo.x = cnv.width - playertwo.w - 2;
        }
    } else if (KeyIsPressed["KeyA"]) {
        playertwo.x -= playertwo.xs;
        if (playertwo.x < 2) {
            playertwo.x = 2;
        }
    }
}
function moveplayertwovrt() {
    playertwo.y += playertwo.ys;
    playertwo.ys += playertwo.a;
    if (KeyIsPressed["KeyW"] && playertwo.canJump) {
        playertwo.ys = -15;
        playertwo.canJump = false;
    }
    if (playertwo.y + playertwo.h + 2 > cnv.height) {
        playertwo.canJump = true;
        playertwo.y = cnv.height - playertwo.h - 2;
    }
}