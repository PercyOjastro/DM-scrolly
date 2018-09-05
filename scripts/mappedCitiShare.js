	// init
	var mapInit = true;

	// set margins
	var mapmargin = { left: 80, right: 40, top: 40, bottom: 80},
		mapwidth = (width * 0.65) - mapmargin.left - mapmargin.right,
		mapheight = +900 - mapmargin.top - mapmargin.bottom;

	// set SVG canvass
	var mapsvg = d3.select(".animation4")
		.append("svg")
			.attr("width", width * 0.65)
			.attr("height", 900)
		.append("g")
	        .attr("transform", "translate(" + mapmargin.left + ", " + mapmargin.top + ")")
	        .attr("stroke", "#000000");


	var AUmap1 = mapsvg.append("svg:image")
		.attr("x", mapmargin.left - 50)
		.attr("y", mapmargin.top + 50)
		.attr("xlink:href", "images/AUPopulation.png")
		.attr("width",(mapwidth - mapmargin.left - mapmargin.right))
		.attr("height", (mapheight - mapmargin.top - mapmargin.bottom))
		.attr("opacity", 0.40);

	var AUmap2 = mapsvg.append("svg:image")
		.attr("x", mapmargin.left - 50)
		.attr("y", mapmargin.top + 50)
		.attr("xlink:href", "images/CitiShare.png")
		.attr("width",(mapwidth - mapmargin.left - mapmargin.right))
		.attr("height", (mapheight - mapmargin.top - mapmargin.bottom))
		.attr("opacity", 0.00);

	// set x-axis
	var xAxismap = mapsvg.append("g")
	    .attr("class", "x axis")
	    .attr("stroke", "#000000")
	    .attr("transform", "translate(0," + mapheight +")");
	var xScaleMap = d3.scaleBand()
	    .range([0, mapwidth])
	    .padding(0.2)
    mapsvg.append("text")
	    .attr("y", mapheight + 55)
	    .attr("x", mapwidth / 2)
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("stroke", "#000000")
	    .text("States");

	// set y-axis
	var yAxismap = mapsvg.append("g")
	    .attr("class", "y axis")
	    .attr("stroke", "#000000");
	var yScaleMap = d3.scaleLinear()
	    .range([mapheight, mapmargin.top])
    var yLabelMap = mapsvg.append("text")
	    .attr("y", -65)
	    .attr("x", -(mapheight / 2))
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("transform", "rotate(-90)")
	    .attr("stroke", "#000000")
	    .text("Population (%)");

    var mapVar = "Population";

    d3.csv("data/AuPopulationbyState.csv").then(function(data){
			
		data.forEach(function(d) {
			d.Population = +d.Population;
			d.Percent = +d.Percent;
		});

		var yMapVal = function(d) { return d[mapVar];},
			yMapScale = function(d) { return yScaleMap(yMapVal(d))};

		xScaleMap.domain(data.map(function(d){ return d.State }));
	    yScaleMap.domain([0, d3.max(data, yMapVal)]);
	    	
	    // Draw X Axis
	    var xAxisCallMap = d3.axisBottom(xScaleMap)
			.tickFormat(function(d){ return d; });		    	
	    xAxismap.transition(t2).call(xAxisCallMap);

	    // Draw Y Axis
	    var yAxisCallMap = d3.axisLeft(yScaleMap)
	    	.tickFormat(function(d){ return d; });
	    yAxismap.transition(t2).call(yAxisCallMap);

		// JOIN new data with old elements.
	    var maprect = mapsvg.selectAll(".maprect")
	        .data(data);

	    // EXIT old elements not present in new data.
	    /*rects.exit()
	        .attr("fill", "red")
	    .transition(t)
	        .attr("y", y(0))
	        .attr("height", 0)
	        .remove();*/

	    // ENTER new elements present in new data...
	    maprect.enter()
	        .append("rect")
	        	.attr("class", "maprect")
	        	.attr("fill", "#2471A3")
	        	.attr("opacity", 0.7)
	            .attr("y", yScaleMap(0))
	            .attr("height", 0)
	            .attr("x", function(d){ return xScaleMap(d.State) })
	            .attr("width", xScaleMap.bandwidth)
	            // AND UPDATE old elements present in new data.
	            .merge(maprect)
	            .transition(d3.transition().duration(1000))
	                .attr("x", function(d){ return xScaleMap(d.State) })
	                .attr("width", xScaleMap.bandwidth)
	                .attr("y", function(d){ return yScaleMap(d[mapVar]); })
	                .attr("height", function(d){ return mapheight - yScaleMap(d[mapVar]); });

	});

