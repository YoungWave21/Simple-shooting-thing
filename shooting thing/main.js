initGraphics(1200, 650);

let level1 = document.getElementById("levelone");
let level2 = document.getElementById("leveltwo");

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
    if (event.code == "ArrowDown") {
        playerone.stand = false;
        setTimeout(() => {
            playerone.stand = true;
        }, 200);
    }
    if (event.code == "KeyS") {
        playertwo.stand = false;
        setTimeout(() => {
            playertwo.stand = true;
        }, 200);
    }
});
requestAnimationFrame(main);

function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(level1, -1, -1, cnv.width, cnv.height);
    // drawplatform();
    drawplayer("black", playerone.x, playerone.y);
    drawplayer("red", playertwo.x, playertwo.y);
    platformcollisions();
    bulletloopsone();
    bulletloopstwo();
    moveplayeronehr();
    moveplayeronevrt();
    playerdeathconfirmation();
    requestAnimationFrame(main);
};
function playerdeathconfirmation() {

}