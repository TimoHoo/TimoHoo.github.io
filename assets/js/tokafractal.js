
var alkuX, alkuY, pituus, kallistus, runkoPaksuus;

window.onload = init();

function init()
{
	var canvas = document.getElementById("kuvaKanvaasi");
	var ctx = canvas.getContext("2d");
	var Leveys = window.innerWidth;
	var Korkeus = window.innerHeight;
	canvas.width = Leveys * 0.7;
	canvas.height = Korkeus * 0.7;
	ctx.fillStyle = "#002b36"; // sama taustaväri kuin miniman dark-solarized -teemassa
	ctx.fillRect(0, 0, Leveys, Korkeus);
	red = parseInt(Math.random() * 127);
	green = parseInt(Math.random() * 127);
	blue = parseInt(Math.random() * 127);
//	alkupiste X, alkupiste Y, pätkän alkupituus, kallistus,
//  rungon tyven paksuus, satunnaislukuväritys r,g,b
  draw(Leveys*0.25,Korkeus*0.7,120,-5,24, red, green, blue);

// vasen ylänurkka: x=0 y=0
function draw(alkuX, alkuY, pituus, kallistus, runkoPaksuus, red, green, blue)
 {
  ctx.beginPath();
  ctx.save();
  ctx.translate(alkuX, alkuY);
  ctx.rotate(kallistus * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -pituus);
	ctx.lineWidth = runkoPaksuus;
	ctx.strokeStyle = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
	ctx.shadowBlur = 15;
	ctx.shadowColor = "rgba(0,0,0,0.8)";
	ctx.stroke();

	if(pituus < 12) {
			ctx.beginPath();
			// arc(x,y,r,startangle,endangle)
			ctx.arc(0, -pituus, 16, 0, 0.25*Math.PI);
			ctx.fill();
			ctx.restore();
			return;
  }
//  if(pituus < 12) {
//			ctx.restore();
//			return;
//  }

  draw(0, -pituus, pituus*0.8, kallistus+10, runkoPaksuus*0.75, red*1.2, green*1.2, blue*1.2);
  draw(0, -pituus, pituus*0.8, kallistus-10, runkoPaksuus*0.75, red*1.2, green*1.2, blue*1.2);
  ctx.restore();
 }

}
