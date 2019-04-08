//Graphics library to extend the HTML canvas drawing capabilities
//Library reqiers a global context and canvas
//must call inigraphics after defining global contecxt

let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");

function initGraphics(cnvwidth, cnvheight) {
    cnv.width = cnvwidth;
    cnv.height = cnvheight;
    // ctx.fillStyle;
    // ctx.strokeStyle;
    // ctx.drawImage;
    ctx.line = function (x1, y1, x2, y2) {
        //drawing a line from x1,y1 to x2,y2
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    ctx.strokeTriangle = function (x1, y1, x2, y2, x3, y3) {
        //draiwing a triangle
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();
    }
    ctx.fillTriangle = function (x1, y1, x2, y2, x3, y3) {
        //draiwing a filled triangle
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
    }
    ctx.strokeQuad = function (x1, y1, x2, y2, x3, y3, x4, y4) {
        //drawing outline of quadrilateral
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.closePath();
        ctx.stroke();
    }
    ctx.fillQuad = function (x1, y1, x2, y2, x3, y3, x4, y4) {
        //drawing a filled quadrilateral
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.fill();
    }
    ctx.strokeCircle = function (x, y, r) {
        //drawing a outline of a circle
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
    ctx.fillCircle = function (x, y, r) {
        // drawing a filled circle
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.rectCollide = function (rect1, rect2) {
        let leftedge = rect1.x;
        let rightEdge = rect1.x + rect1.w
        if (leftedge <= rect2.x + rect2.w && leftedge >= rect2.x || rightEdge <= rect2.x + rect2.w && rightEdge >= rect2.x) {
            if (rect1.y + rect1.h <= rect2.y + rect2.h && rect1.y + rect1.h >= rect2.y - 5) {
                return rect2, rect1;
            }
        }
    }
    Math.randomDec = function (low, high) {
        return Math.random() * (high - low) + low;
    }
    Math.randomInt = function (low, high) {
        return Math.floor(Math.randomDec(low, high));
    }
}

//mouse stuff
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
document.addEventListener("mousemove", mousemoveHanderLIB);

document.addEventListener("mousedown", () => {
    mouseIsPressed = true;
});
document.addEventListener("mouseup", () => {
    mouseIsPressed = false;
});

function mousemoveHanderLIB(event) {
    // Save previous mouseX and mouseY
    pmouseX = mouseX;
    pmouseY = mouseY;

    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

let KeyIsPressed = {};

document.addEventListener("keydown", keydownhandlerLIB);
document.addEventListener("keyup", keyuphandlerLIB);

function keydownhandlerLIB(event) {
    KeyIsPressed[event.code] = true;
}

function keyuphandlerLIB(event) {
    KeyIsPressed[event.code] = false;
}