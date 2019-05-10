initGraphics(1200, 650);

let level1 = document.getElementById("levelone");
let level2 = document.getElementById("leveltwo");
let heart = document.getElementById("heart");
ctx.font = "30px Arial";
audio.play();
function playaudio() {
    audio.play();
}
function pauseaudio() {
    audio.pause();
}
requestAnimationFrame(main);
function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    if (level == "level1") {
        ctx.drawImage(level1, -1, -1, cnv.width, cnv.height);
    } else {
        ctx.drawImage(level2, -1, -1, cnv.width, cnv.height);
    }
    // drawplatform();
    drawplayer("white", playerone.x, playerone.y);
    ctx.fillRect(20, 20, 20, 20);
    ctx.drawImage(heart, 80, 20, 20, 20);
    ctx.fillText(TieBraker, 500, 100)
    ctx.drawImage(heart, cnv.width - 65, 20, 20, 20);
    ctx.fillText(point.one + ":" + point.two, 550, 40)
    ctx.fillText(playertwo.lives, cnv.width - 85, 40);
    ctx.fillText(playerone.lives, 60, 40);
    drawplayer("red", playertwo.x, playertwo.y);
    ctx.fillRect(cnv.width - 40, 20, 20, 20);
    platformcollisions();
    bulletloopsone();
    bulletloopstwo();
    moveplayeronehr();
    moveplayeronevrt();
    if (playerone.isShot) {
        shotmove1();
    }
    if (playertwo.isShot) {
        shotmove2();
    }
    if (point.one == 1 && point.two == 1) {
        TieBraker = "Tie-Breaker";
    }
    if (point.one == 2) {
        alert("Game over, White Wins!");
        document.location.reload()
    }
    if (point.two == 2) {
        alert("Game over, Red Wins!");
        document.location.reload()
    }
    requestAnimationFrame(main);
};

function playerdeathconfirmation1() {
    death.one += 1;
    playerone = {
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
        lives: 5 - death.one
    }
    if (playerone.lives <= 0) {
        gamefreeze1();
    }
}

function shotmove1() {
    if (playerone.direction == "left") {
        playerone.x -= 30;
    } else if (playerone.direction == "right") {
        playerone.x += 30;
    }
}
function shotmove2() {
    if (playertwo.direction == "left") {
        playertwo.x -= 30;
    } else if (playertwo.direction == "right") {
        playertwo.x += 30;
    }
}

function gamefreeze1() {
    freeze = true;
    alert("Red Point");
    level2isinplay();
    point.two++;
}
function gamefreeze2() {
    freeze = true;
    alert("White Point");
    level2isinplay();
    point.one++;
}
function playerdeathconfirmation2() {
    death.two += 1;
    playertwo = {
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
        lives: 5 - death.two
    }
    if (playertwo.lives <= 0) {
        gamefreeze2();
    }
}

document.addEventListener("keydown", (event) => {
    //console.log(event.code);
    if (KeyIsPressed["ShiftRight"] && oneshoot) {
        bulletsound = new Audio("audio/Bullet shot.mp3");
        bulletsound.play();
        bulletone.push([playerone.x, directionOne]);
        oneshoot = false;
        setTimeout(() => {
            oneshoot = true;
        }, 100);
        playeroneY.push(playerone.y + 10);
    }
    if (KeyIsPressed["KeyQ"] && twoshoot) {
        bulletsound = new Audio("audio/Bullet shot.mp3");
        bulletsound.play();
        bullettwo.push([playertwo.x, directionTwo]);
        twoshoot = false;
        setTimeout(() => {
            twoshoot = true;
        }, 100);
        playertwoY.push(playertwo.y + 10);
    }
    if (event.code == "ArrowLeft") {
        directionOne = "left"
    }
    if (event.code == "ArrowRight") {
        directionOne = "right";
    }
    if (event.code == "KeyA") {
        directionTwo = "left"
    }
    if (event.code == "KeyD") {
        directionTwo = "right";
    }
    if (event.code == "ArrowDown" && playerone.stand2) {
        playerone.stand = false;
        playerone.stand2 = false;
        setTimeout(() => {
            playerone.stand = true;
            playerone.stand2 = true;
        }, 150);
    }
    if (event.code == "KeyS") {
        playertwo.stand = false;
        playertwo.stand2 = false;
        setTimeout(() => {
            playertwo.stand = true;
            playertwo.stand2 = true;
        }, 200);
    }
});