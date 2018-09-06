	/*
		penport.js - illustrates pen portrait of a customer spending habits
		
		by po59726
	*/

	// set margins, width and height
	var ppwholewidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	var ppmargin = { left: 0, right: 0, top: 0, bottom: 0},
		ppwidth = width - ppmargin.left - ppmargin.right,
		ppheight = +900 - ppmargin.top - ppmargin.bottom;

	// set SVG canvass
	var ppsvg = d3.select(".animation5")
		.append("svg")
			.attr("width", width)
			.attr("height", 900)

	var img1 = ppsvg.append("svg:image")
		.attr("x", (ppwholewidth / 2) - 680)
		.attr("y", (ppheight / 2) - 500)
		.attr("xlink:href", "images/pp-img01.png")
		.attr("opacity", 0)
		.attr("width", 520)
		.attr("height", 450);

	var img2 = ppsvg.append("svg:image")
		.attr("x", (ppwholewidth / 2) - 180)
		.attr("y", (ppheight / 2) -300)
		.attr("xlink:href", "images/pp-img02.png")
		.attr("opacity", 1)
		.attr("width", 0)
		.attr("height", 0);

	var img3 = ppsvg.append("svg:image")
		.attr("x", (ppwholewidth / 2) + 145)
		.attr("y", (ppheight / 2) - 500)
		.attr("xlink:href", "images/pp-img04.png")
		.attr("opacity", 1)
		.attr("width", 0)
		.attr("height", 0);

	var img4 = ppsvg.append("svg:image")
		.attr("x", (ppwholewidth / 2) + 145)
		.attr("y", (ppheight / 2) - 100)
		.attr("xlink:href", "images/pp-img03.png")
		.attr("opacity", 0)
		.attr("width", 520)
		.attr("height", 450);

	var img0 = ppsvg.append("svg:image")
		.attr("x", (ppwholewidth / 2) - 180)
		.attr("y", (ppheight / 2) -300)
		.attr("xlink:href", "images/pp-img0.png")
		.attr("width", 350)
		.attr("height", 450)
		.attr("z-index", 9);

