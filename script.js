var canvas =  document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//c stands for context
var c = canvas.getContext('2d');

// Master Circle
var a = 400, b = 300, radius = 200;
c.beginPath();
c.arc(a, b, radius, 0, Math.PI * 2, false);
c.stroke();

function drawCircle(xs, ys) {
    r = 1;
    console.log(xs);
    c.beginPath();
    c.arc(xs, ys, r, 0, Math.PI * 2, false);
    c.stroke();
    c.fill();
}

var n = 300;
var arc_len = 2 * Math.PI * radius / n;
var dtheta = arc_len / radius;
var x = a - radius;
var y = b;
var theta = 0;

var coorArray = [];
for (let i = 0; i < n; i++) {
    drawCircle(x,y);
    coorArray.push([x,y]);
    // console.log("drawn");
    theta += dtheta;
    x = a - (radius * Math.cos(theta));
    y = b - (radius * Math.sin(theta));        
}
 
// console.log(coorArray);
var endp;
var times = 8;
var r = Math.random() * 255;
var g = Math.random() * 255;
var b = Math.random() * 255;
c.strokeStyle = 'rgba('+r+','+g+','+b+',1)';

for (let i = 0; i < coorArray.length; i++) {
    c.beginPath();
    c.moveTo(...coorArray[i]);
    endp = times * i >= n ? (times * i) % n : times * i;
    console.log(endp);
    c.lineTo(...coorArray[endp]);
    c.stroke();   
}




