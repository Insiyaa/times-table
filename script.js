
document.getElementById("gen").addEventListener("click", function(){
    console.log('here');
    var times = parseInt(document.getElementById('times').value);
    var ticks = parseInt(document.getElementById('ticks').value);
    generate(times, ticks);
});

function generate(times, n) {
    var canvas =  document.querySelector('canvas');
    var canvas_id = document.getElementById('canvas');

    canvas.width = canvas_id.clientWidth;
    canvas.height = canvas_id.clientHeight;

    //c stands for context
    var c = canvas.getContext('2d');

    // Master Circle
    var a = canvas.width / 2, b = canvas.height / 2, radius = canvas.height * 0.8 / 2;
    c.beginPath();
    c.arc(a, b, radius, 0, Math.PI * 2, false);
    c.stroke();
   

    function drawCircle(xs, ys) {
        console.log('mini circ');
        r = 1;
        c.beginPath();
        c.arc(xs, ys, r, 0, Math.PI * 2, false);
        c.stroke();
        c.fill();
    }
    
    // var n = 300;
    var arc_len = 2 * Math.PI * radius / n;
    var dtheta = arc_len / radius;
    var x = a - radius;
    var y = b;
    var theta = 0;
    
    var coorArray = [];
    for (let i = 0; i < n; i++) {
        drawCircle(x,y);
        coorArray.push([x,y]);
        theta += dtheta;
        x = a - (radius * Math.cos(theta));
        y = b - (radius * Math.sin(theta));        
    }
     
    var endp;
    // var times = 8;
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    c.strokeStyle = 'rgba('+r+','+g+','+b+',1)';
    console.log(coorArray);
    
    for (let i = 0; i < coorArray.length; i++) {
        c.beginPath();
        c.moveTo(...coorArray[i]);
        endp = times * i >= n ? (times * i) % n : times * i;
        c.lineTo(...coorArray[endp]);
        c.stroke();   
        console.log('yes');
    }
}




