/**
 * Created by student on 2015-10-07.
 */

function drawTriangle(){ //czy to ta domyslana funkcja?
    //napisz kod rysowania tr�jk�ta
    var canvas = document.getElementById('FirstExample2');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='rgba(255,0,0,1.0)';
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(400,400);
    ctx.lineTo(500,500);
    ctx.lineTo(450,450);
    ctx.lineTo(340,250);
    ctx.closePath();
    ctx.fill();
    // fillRect(x,y,w,h) dane kwadratu
}