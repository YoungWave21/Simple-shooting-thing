initGraphics(1200, 650);

let level1 = document.getElementById("levelone");
let level2 = document.getElementById("leveltwo");
let heart = document.getElementById("heart");
ctx.font = "30px Arial";
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
    ctx.drawImage(heart, cnv.width - 65, 20, 20, 20);
    ctx.fillText(playertwo.lives, cnv.width - 85, 40);
    ctx.fillText(playerone.lives, 60, 40);
    drawplayer("red", playertwo.x, playertwo.y);
    ctx.fillRect(cnv.width - 40, 20, 20, 20);
    platformcollisions();
    bulletloopsone();
    bulletloopstwo();
    moveplayeronehr();
    moveplayeronevrt();
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
        alert("red win");
        level2isinplay();
    }
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
        alert("white win");
        level2isinplay();
    }
}

document.addEventListener("keydown", (event) => {
    //console.log(event.code);
    if (KeyIsPressed["ShiftRight"] && oneshoot) {
        bulletone.push([playerone.x, directionOne]);
        oneshoot = false;
        setTimeout(() => {
            oneshoot = true;
        }, 100);
        playeroneY.push(playerone.y + 10);
    }
    if (KeyIsPressed["KeyQ"] && twoshoot) {
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