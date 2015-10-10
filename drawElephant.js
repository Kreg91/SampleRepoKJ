/**
 * Created by Kreg on 2015-10-10.
 */
function drawElephant(){
    var canvas = document.getElementById('FirstExample3');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='gray';
    //legs
    ctx.fillRect(200,800,50,250);
    ctx.fillRect(260,750,50,250);
    ctx.fillRect(500,800,50,250);
    ctx.fillRect(560,750,50,250);
    // fillRect(x,y,w,h) dane kwadratu


    //body
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
    //tail
    ctx.beginPath();
    ctx.moveTo(165,735);
    ctx.lineTo(100,950);
    ctx.lineTo(120,980);
    ctx.lineTo(140,970);
    ctx.lineTo(134,950);
    ctx.lineTo(175,770);
    ctx.lineTo(165,735);
    ctx.closePath();
    ctx.fill();

    //head
    ctx.beginPath();
    ctx.arc(770,585,100,0,2*Math.PI,true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(670,515,120,0,2*Math.PI,true);
    ctx.stroke();
    ctx.fillStyle='gray';
    ctx.fill();

    //proboscis
    ctx.beginPath();
    ctx.translate(500,-350);
    ctx.rotate(40*Math.PI/180);
    ctx.moveTo(900,600);
    ctx.lineTo(1100,650);
    ctx.lineTo(1150,750);
    ctx.lineTo(1130,780);
    ctx.lineTo(1060,765);
    ctx.lineTo(1020,800);
    ctx.lineTo(1130,830);
    ctx.lineTo(1200, 750);
    ctx.lineTo(1150, 630);
    ctx.lineTo(940, 560);
    ctx.stroke();
    ctx.lineTo(900,600);
    ctx.closePath();
    ctx.fill();

}