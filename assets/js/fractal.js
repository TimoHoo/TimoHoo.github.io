
var r_init, g_init, b_init, r_delta, g_delta, b_delta;

window.onload = init_colors();

function init_colors()
{
	r_init = parseInt(Math.random() * 255);
	g_init = parseInt(Math.random() * 255);
	b_init = parseInt(Math.random() * 255);
	r_delta = parseInt(25 + Math.random() * 25);
	g_delta = parseInt(25 + Math.random() * 25);
	b_delta = parseInt(25 + Math.random() * 25);
	init();
}

function init()
{
	var canvas = document.getElementById("PiirtoAlusta");
	var ctx = canvas.getContext("2d");
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W * 0.9;
	canvas.height = H * 1.0;

	var length, angle, reduction, line_width, start_points = [];

	draw();

	function draw()
	{
    ctx.fillStyle = "#002b36";
		ctx.fillRect(0, 0, W, H);

		length = 0.25 * H;
		reduction = parseFloat(document.getElementById("complexity_range").value);
		document.getElementById("complexity_span").innerHTML=reduction;
    line_width = 18;
		angle = parseInt(document.getElementById("angle_range").value);
		document.getElementById("angle_span").innerHTML=angle;
		flexure = parseInt(document.getElementById("flexure_range").value);
		document.getElementById("flexure_span").innerHTML=flexure;

		var trunk = {x: canvas.width/2, y: length+50, angle: 90};
		start_points = [];
		start_points.push(trunk);
		ctx.globalCompositeOperation = "lighter";
		ctx.beginPath();
		ctx.moveTo(trunk.x, H-50);
		ctx.lineTo(trunk.x, H-trunk.y);
		r =  r_init;
		g =  g_init;
		b =  b_init;
		ctx.strokeStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
		ctx.lineWidth = line_width;
		ctx.stroke();
		branches();
	}

	function branches()
	{
		length = length * reduction;
		line_width = line_width * reduction;
		ctx.lineWidth = line_width;

		var new_start_points = [];
		ctx.beginPath();
		for(var i = 0; i < start_points.length; i++)
		{
			var sp = start_points[i];
			var ep1 = get_endpoint(sp.x, sp.y, sp.angle+angle, length);
			var ep2 = get_endpoint(sp.x, sp.y, sp.angle-angle, length);
			ctx.moveTo(sp.x, H-sp.y);
			ctx.lineTo(ep1.x, H-ep1.y);
			ctx.moveTo(sp.x, H-sp.y);
			ctx.lineTo(ep2.x, H-ep2.y);
			ep1.angle = sp.angle+angle - flexure;
			ep2.angle = sp.angle-angle - flexure;
			new_start_points.push(ep1);
			new_start_points.push(ep2);
		}
		ctx.stroke();
		start_points = new_start_points;
		r = r + r_delta;
		if(r < 0 || r > 255)
		{
			r_delta = -r_delta;
		}
		g = g + g_delta;
		if(g < 0 || g > 255)
		{
			g_delta = -g_delta;
		}
		b = b + b_delta;
		if(b < 0 || b > 255)
		{
			b_delta = -b_delta;
		}
		ctx.strokeStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
		if(length > 2) branches();
	}

	function get_endpoint(x, y, a, length)
	{
		var epx = x + length * Math.cos(a*Math.PI/180);
		var epy = y + length * Math.sin(a*Math.PI/180);
		return {x: epx, y: epy};
	}
}
