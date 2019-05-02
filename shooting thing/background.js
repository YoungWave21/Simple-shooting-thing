function level2isinplay() {
    settingfalse();
    // setInterval(() => {
    freeze = false;
    // }, 2000);
    level = "level2";
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
        lives: 5
    }
    death = {
        one: 0,
        two: 0
    }
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
        lives: 5
    }
    platform = {
        x: 120,
        y: 130,
        w: 970,
        h: 20
    }
    //second layer left
    platform1 = {
        x: 49,
        y: 236,
        w: 380,
        h: 20
    }
    //second layer right
    platform2 = {
        x: 774,
        y: 236,
        w: 380,
        h: 20
    }
    //middle long 
    platform3 = {
        x: 365,
        y: 340,
        w: 480,
        h: 20
    }
    //bottom middle plank
    platform4 = {
        x: 55,
        y: 445,
        w: 378,
        h: 20
    }
    //lower congruent sides
    platform5 = {
        x: 773,
        y: 445,
        w: 378,
        h: 20
    }
    platform6 = {
        x: 120,
        y: 555,
        w: 965,
        h: 20
    }
}
function settingfalse() {
    KeyIsPressed["KeyD"] = false;
    KeyIsPressed["KeyA"] = false;
    KeyIsPressed["KeyQ"] = false;
    KeyIsPressed["KeyW"] = false;
    KeyIsPressed["KeyS"] = false;
    KeyIsPressed["ArrowLeft"] = false;
    KeyIsPressed["ArrowRight"] = false;
    KeyIsPressed["ArrowUp"] = false;
    KeyIsPressed["ArrowDown"] = false;
    KeyIsPressed["ShiftRight"] = false;
    KeyIsPressed["ArrowLeft"] = false;
}