	var anim4Margin = { left:50, right:50, top:50, bottom:50 };
	var anim4Width = width * 0.65,
			anim4Height = 900,
			padding = 10;

	var animation4 = d3.select(".animation4")
		.append("svg")
			.attr("width", (anim4Width - anim4Margin.left - anim4Margin.right))
			.attr("height", (anim4Height - anim4Margin.top - anim4Margin.bottom))
		.append("g")
	        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
	        .attr("stroke", "#000000");

	var AUmap1 = animation4.append("svg:image")
		.attr("x", anim4Margin.left + 50)
		.attr("y", anim4Margin.top + 50)
		.attr("xlink:href", "images/AUPopulation.png")
		.attr("width",(anim4Width - anim4Margin.left - anim4Margin.right - 100))
		.attr("height", (anim4Height - anim4Margin.top - anim4Margin.bottom - 100))
		.attr("opacity", 0.40);

	var AUmap2 = animation4.append("svg:image")
		.attr("x", anim4Margin.left + 50)
		.attr("y", anim4Margin.top + 50)
		.attr("xlink:href", "images/CitiShare.png")
		.attr("width",(anim4Width - anim4Margin.left - anim4Margin.right - 100))
		.attr("height", (anim4Height - anim4Margin.top - anim4Margin.bottom - 100))
		.attr("opacity", 0.00);

	var xAni4Group = animation4.append("g")
	    .attr("class", "x axis")
	    .attr("stroke", "#000000")
	    .attr("transform", "translate(" + (anim4Margin.left + 80) + "," + (anim4Height - anim4Margin.bottom - anim4Margin.top) + ")")

	var yAni4Group = animation4.append("g")
	    .attr("class", "y axis")
	    .attr("stroke", "#000000")
	    .attr("transform", "translate(" + (anim4Margin.left + 80) + "," + anim4Margin.top + ")");

	// X Scale
	var xAni4 = d3.scaleBand()
	    .range([0, anim4Width])
	    .padding(0.2);

	// Y Scale
	var yAni4 = d3.scaleLinear()
	    .range([anim4Height, 0]);

	// X Label
	xAni4Group.append("text")
	    .attr("y", anim4Height + 55)
	    .attr("x", anim4Width / 2)
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("stroke", "#000000")
	    .text("State");

	// Y Label
	var yLabel = yAni4Group.append("text")
	    .attr("y", -65)
	    .attr("x", -(anim4Height / 2))
	    .attr("font-size", "50px")
	    .attr("text-anchor", "middle")
	    .attr("transform", "rotate(-90)")
	    .attr("stroke", "#000000")
	    .text("Population");

	d3.csv("data/AuPopulationbyState.csv").then(function(pop){
		pop.forEach(function(d) {
			xAni4.domain(pop.map(function(d){ return d.State }));
		    yAni4.domain([0, d3.max(pop, function(d) { return d["Population"] })])

		    // X Axis
		    var xAxisCall = d3.axisBottom(x);
		    xAni4Group.transition(t).call(xAxisCall);

		    // Y Axis
		    var yAxisCall = d3.axisLeft(y)
		        .tickFormat(function(d){ return (d + "MM"); });
		    yAni4Group.transition(t).call(yAxisCall);
		})
	});
