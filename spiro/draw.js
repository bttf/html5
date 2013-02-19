function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');
	for (var i=0; i<6; i++) {
		for (var j=0; j<6; j++) {
			// save previous style settings
			ctx.save();

			// set new style settings
			ctx.strokeStyle = "#9CFF00";

			// translate moves the canvas x and y amount
			// so this guy moves 100 for each iteration plus a padding of 50 pixels
			ctx.translate(50 + j * 100, 50 + i * 100);

			// passing in the context, plus 3 numbers idk what the hell they are
			drawSpirograph(ctx, 20*(j+2)/(j+1), -8*(i+3)/(i+1), 10);

			// restore back to previous style
			ctx.restore();
		}
	}
}
function drawSpirograph(ctx, R, r, O) {
	var x1 = R-O;
	var y1 = 0;
	var i = 1;
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	do {
		if (i > 20000) break;
		var x2 = (R + r) * Math.cos(i * Math.PI/72) - (r + O) * Math.cos(((R + r)/r) * (i * Math.PI/72));
		var y2 = (R + r) * Math.sin(i * Math.PI/72) - (r + O) * Math.sin(((R + r)/r) * (i * Math.PI/72));
		ctx.lineTo(x2, y2);
		x1 = x2;
		y1 = y2;
		i++;
	} while (x2 != R - O && y2 != 0);
	ctx.stroke();
}
