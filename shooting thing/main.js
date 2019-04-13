initGraphics(800, 533);

document.addEventListener("keydown", (event) => {
    //console.log(event.code);
    if (KeyIsPressed["KeyG"] && oneshoot) {
        bulletone.push([playerone.x, directionOne]);
        oneshoot = false;
        setTimeout(() => {
            oneshoot = true;
        }, 100);
        playeroneY.push(playerone.y + 10);
    }
    if (KeyIsPressed["ShiftRight"] && twoshoot) {
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
});
requestAnimationFrame(main);

function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "green";
    ctx.fillRect(platform.x, platform.y, platform.w, platform.h);
    drawplayer("black", playerone.x, playerone.y);
    drawplayer("red", playertwo.x, playertwo.y);
    oneplatformcollide(platform);
    twoplatformcollide(platform)
    bulletloopsone();
    bulletloopstwo();
    moveplayeronehr();
    moveplayeronevrt();
    requestAnimationFrame(main);
};



