/**
 * Created by Kreg on 2015-10-10.
 */
function drawElephant(){
    var canvas = document.getElementById('FirstExample3');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='rgba(255,0,0,1.0)';
    ctx.fillRect(200,800,50,250);
    ctx.fillRect(260,750,50,250);
    ctx.fillRect(500,800,50,250);
    ctx.fillRect(560,750,50,250);
    // fillRect(x,y,w,h) dane kwadratu
    //napisz kod dla trójk¹ta masz funkcje w zeszycie w notatkach
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(400,400);
    ctx.lineTo(500,500);
    ctx.lineTo(450,450);
    ctx.lineTo(340,250);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(180,750);
    ctx.lineTo(700,730);
    ctx.lineTo(650,660);
    ctx.lineTo(190,700);
    ctx.lineTo(180,750);

    ctx.closePath();
    ctx.fill();
    ctx.lineWidth=5;
    ctx.strokeStyle="black";
    ctx.stroke();
}