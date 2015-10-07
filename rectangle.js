/**
 * Created by student on 2015-10-07.
 */
function drawRectangle(){
    var canvas = document.getElementById('FirstExample');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='rgba(255,0,0,1.0)';
    ctx.fillRect(2,2,300,300);
    // fillRect(x,y,w,h) dane kwadratu
    //napisz kod dla trójk¹ta masz funkcje w zeszycie w notatkach
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(400,400);
    ctx.lineTo(500,500);
    ctx.lineTo(450,450);
    ctx.closePath();
    ctx.fill();
};