var canvas =  document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//c stands for context
var c = canvas.getContext('2d');

// Master Circle
var a = 400, b = 400, radius = 200;
c.beginPath();
c.arc(a, b, radius, 0, Math.PI * 2, false);
c.stroke();

function drawCircle(xs, ys) {
    r = 3;
    console.log(xs);
    c.beginPath();
    c.arc(xs, ys, r, 0, Math.PI * 2, false);
    c.stroke();
    c.fill();
}

var n = 50;
var arc_len = 2 * Math.PI * radius / n;
var dtheta = arc_len / radius;
var x = a - radius;
var y = b;
var theta = 0;

for (let i = 0; i <= n; i++) {
    drawCircle(x,y);
    console.log("drawn");
    x = a - (radius * Math.cos(theta));
    y = b - (radius * Math.sin(theta));
    theta += dtheta;     
}






