initGraphics(800, 600);
let bullet = [];
let playerX = [];
let shoot = true;
let player = {
    x: 390,
    y: 500
}
document.addEventListener("keydown", () => {
    // console.log(event.code);
    if (KeyIsPressed["Space"] && shoot) {
        bullet.push("500");
        shoot = false;
        setTimeout(() => {
            shoot = true;
        }, 100);
        playerX.push(player.x + 10);
    }
    if (KeyIsPressed["ArrowLeft"]) {
        player.x -= 5;
    }
    if (KeyIsPressed["ArrowRight"]) {
        player.x += 5;
    }
});
requestAnimationFrame(main);

function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "black";
    for (let i = 0; i < bullet.length; i++) {
        move(i);
        if (bullet[i] + 20 < 0) {
            bullet.shift();
            playerX.shift();
        }
        ctx.fillRect(playerX[i], bullet[i], 3, 20);
    };
    // console.log(bullet);
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, 20, 20);
    requestAnimationFrame(main);
};

function move(i) {
    bullet[i] -= 3;
};