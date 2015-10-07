/**
 * Created by student on 2015-10-07.
 */

function drawTriangle(){ //czy to ta domyslana funkcja?
    //napisz kod rysowania trójk¹ta
    var canvas = document.getElementById('FirstExample');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='rgba(255,0,0,1.0)';
    ctx.beginPath()
    ctx.moveTo(300,300);
    ctx.lineTo(400,400);
    // fillRect(x,y,w,h) dane kwadratu
};