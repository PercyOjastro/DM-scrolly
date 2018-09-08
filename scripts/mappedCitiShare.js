	/*
		mappedCitiShare.js - generates bar charts for Australian population percentage by State,
		Citi population share by State, Australian population percentage by Mosaic group,
		Citi population share by Mosaic group
		
		by po59726
	*/

	// init
	var bar1Init = true,
		bar2Init = true,
		AUMosaicInit = true,
		CitiMosaicInit = true;

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

    // Tooltip
	var tip3 = d3.tip().attr('class', 'd3-tip')
	    .html(function(d) {
	        var text = "<strong>State:</strong> <span style='color:red'>" + d.State + "</span><br>";
	        text += "<strong>Population share:</strong> <span style='color:red;'>" + d[mapVar] + "%</span><br>";
	        return text;
	    });
	mapsvg.call(tip3);

	var tip4 = d3.tip().attr('class', 'd3-tip')
	    .html(function(d) {
	        var text = "<strong>State:</strong> <span style='color:red'>" + d.State + "</span><br>";
	        text += "<strong>Citi share:</strong> <span style='color:red;'>" + d[mapVar2] + "%</span><br>";
	        return text;
	    });
	mapsvg.call(tip4);

	var tip5 = d3.tip().attr('class', 'd3-tip')
	    .html(function(d) {
	        var text = "<strong>Mosaic Group Type: </strong> <span style='color:red'>" + d.GroupType + "</span><br>";
	        text += "<strong>Description: </strong> <span style='color:red;'>" + d.Description + "</span><br>";
	        text += "<strong>Population (%): </strong> <span style='color:red;'>" + d[AUMosaicVar] + "%</span><br>";
	        return text;
	    });
	mapsvg.call(tip5);

	var tip6 = d3.tip().attr('class', 'd3-tip')
	    .html(function(d) {
	        var text = "<strong>Mosaic Group Type: </strong> <span style='color:red'>" + d.GroupType + "</span><br>";
	        text += "<strong>Description: </strong> <span style='color:red;'>" + d.Description + "</span><br>";
	        text += "<strong>Population (%): </strong> <span style='color:red;'>" + d[CitiMosaicVar] + "%</span><br>";
	        return text;
	    });
	mapsvg.call(tip6);

	var AUmap1 = mapsvg.append("svg:image")
		.attr("x", mapmargin.left - 50)
		.attr("y", mapmargin.top + 50)
		.attr("xlink:href", "images/AUPopulation.png")
		.attr("width",(mapwidth - mapmargin.left - mapmargin.right))
		.attr("height", (mapheight - mapmargin.top - mapmargin.bottom))
		.attr("opacity", 0.80);

	/*var AUmap2 = mapsvg.append("svg:image")
		.attr("x", mapmargin.left - 50)
		.attr("y", mapmargin.top + 50)
		.attr("xlink:href", "images/CitiShare.png")
		.attr("width",(mapwidth - mapmargin.left - mapmargin.right))
		.attr("height", (mapheight - mapmargin.top - mapmargin.bottom))
		.attr("opacity", 0.00);*/

	// set x-axis
	var xAxismap = mapsvg.append("g")
	    .attr("class", "x axis")
	    .attr("stroke", "#000000")
	    .attr("transform", "translate(0," + mapheight +")");
	var xScaleMap = d3.scaleBand()
	    .range([0, mapwidth])
	    .padding(0.5)
    var xLabelMap = mapsvg.append("text")
	    .attr("y", mapheight + 55)
	    .attr("x", mapwidth / 2)
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("stroke", "#000000");
	    /*.text("States");*/

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

    var AUpop = [],
    	CitiShare = [],
    	AUMosaic = [],
    	CitiMosaic = [];

    d3.csv("data/AuPopulationbyState.csv").then(function(data){
			
		data.forEach(function(d) {
			d.Population = +d.Population;
			d.Percent = +d.Percent;
			d.Percent0 = +d.Percent0;
		});

		data.map(function(d) {
			AUpop.push(d);
		});

		barAUpop(AUpop);
	});

	d3.csv("data/CitiSharebyState.csv").then(function(data){
			
		data.forEach(function(d) {
			d.CitiShare = +d.CitiShare;
			d.CitiShare0 = +d.CitiShare0;
		});

		data.map(function(d) {
			CitiShare.push(d);
		});

		barCitiShare(CitiShare);
	});

	d3.csv("data/AUMosaic.csv").then(function(data){
			
		data.forEach(function(d) {
			d.PopPct = +d.PopPct;
			d.PopPct0 = +d.PopPct0;
		});

		data.map(function(d) {
			AUMosaic.push(d);
		});

	});

	d3.csv("data/CitiMosaic.csv").then(function(data){
			
		data.forEach(function(d) {
			d.PopPct = +d.PopPct;
			d.PopPct0 = +d.PopPct0;
		});

		data.map(function(d) {
			CitiMosaic.push(d);
		});

	});

	function barAUpop(barData) {

		if (bar1Init) {
			mapVar = "Percent0"
		} else {
			mapVar = "Percent"
		}

		xLabelMap.text("States");

		var yMapVal = function(d) { return d[mapVar];},
			yMapScale = function(d) { return yScaleMap(yMapVal(d))};

		xScaleMap.domain(barData.map(function(d){ return d.State }));
	    yScaleMap.domain([0, d3.max(barData, yMapVal)]);
	    /*yScaleMap.domain([0, 100]);*/
	    	
	    // Draw X Axis
	    var xAxisCallMap = d3.axisBottom(xScaleMap)
			.tickFormat(function(d){ return d; });		    	
	    xAxismap.transition(d3.transition().duration(1000)).call(xAxisCallMap);

	    // Draw Y Axis
	    var yAxisCallMap = d3.axisLeft(yScaleMap)
	    	.tickFormat(function(d){ return d; });
	    yAxismap.transition(d3.transition().duration(1000)).call(yAxisCallMap);

		// JOIN new data with old elements.
	    var maprect = mapsvg.selectAll(".maprect")
	        .data(barData);

	    // EXIT old elements not present in new data.
	    maprect.exit()
	        /*.attr("fill", "red")*/
	    .transition(d3.transition().duration(1000))
	        .attr("y", yScaleMap(0))
	        .attr("height", 0)
	        .remove();

	    // ENTER new elements present in new data...
	    maprect.enter()
	        .append("rect")
	        	.attr("class", "maprect")
	        	.attr("fill", "#04F9F2")
	        	.attr("stroke", "none")
	        	.attr("opacity", 0.7)
	            .attr("y", yScaleMap(0))
	            .attr("height", 0)
	            .attr("x", function(d){ return xScaleMap(d.State) })
	            .attr("width", xScaleMap.bandwidth)
	            .on("mouseover", tip3.show)
    			.on("mouseout", tip3.hide)
	            // AND UPDATE old elements present in new data.
	            .merge(maprect)
	            .transition(d3.transition().duration(1000))
	                .attr("x", function(d){ return xScaleMap(d.State) })
	                .attr("width", xScaleMap.bandwidth)
	                .attr("y", function(d){ return yScaleMap(d[mapVar]); })
	                .attr("height", function(d){ return mapheight - yScaleMap(d[mapVar]); });

	};

	function barCitiShare(barData) {

		if (bar2Init) {
			mapVar2 = "CitiShare0"
		} else {
			mapVar2 = "CitiShare"
		}

		var yMapVal = function(d) { return d[mapVar2];},
			yMapScale = function(d) { return yScaleMap(yMapVal(d))};

/*		xScaleMap.domain(barData.map(function(d){ return d.State }));
	    yScaleMap.domain([0, d3.max(barData, yMapVal)]);
	    	
	    // Draw X Axis
	    var xAxisCallMap = d3.axisBottom(xScaleMap)
			.tickFormat(function(d){ return d; });		    	
	    xAxismap.transition(d3.transition().duration(1000)).call(xAxisCallMap);

	    // Draw Y Axis
	    var yAxisCallMap = d3.axisLeft(yScaleMap)
	    	.tickFormat(function(d){ return d; });
	    yAxismap.transition(d3.transition().duration(1000)).call(yAxisCallMap);*/

		// JOIN new data with old elements.
	    var maprect2 = mapsvg.selectAll(".maprect2")
	        .data(barData);

	    // EXIT old elements not present in new data.
	    maprect2.exit()
	        /*.attr("fill", "red")*/
	    .transition(d3.transition().duration(1000))
	        .attr("y", yScaleMap(0))
	        .attr("height", 0)
	        .remove();

	    // ENTER new elements present in new data...
	    maprect2.enter()
	        .append("rect")	
	        	.attr("class", "maprect2")
	        	.attr("fill", "#042DFB")
	        	.attr("stroke", "none")
	        	.attr("opacity", 0.9)
	            .attr("y", yScaleMap(0))
	            .attr("height", 0)
	            .attr("x", function(d){ return xScaleMap(d.State) + 20})
	            .attr("width", xScaleMap.bandwidth)
	            .on("mouseover", tip4.show)
    			.on("mouseout", tip4.hide)
	            // AND UPDATE old elements present in new data.
	            .merge(maprect2)
	            .transition(d3.transition().duration(1000))
	                .attr("x", function(d){ return xScaleMap(d.State) + 20})
	                .attr("width", xScaleMap.bandwidth)
	                .attr("y", function(d){ return yScaleMap(d[mapVar2]); })
	                .attr("height", function(d){ return mapheight - yScaleMap(d[mapVar2]); });
	};

	function barAUMosaic(Data) {

		if (AUMosaicInit) {
			AUMosaicVar = "PopPct0"
		} else {
			AUMosaicVar = "PopPct"
		}

		xLabelMap.text("Mosaic Group");

		var yMapVal = function(d) { return d[AUMosaicVar];},
			yMapScale = function(d) { return yScaleMap(yMapVal(d))};

		xScaleMap.domain(Data.map(function(d){ return d.Group }));
	    /*yScaleMap.domain([0, d3.max(Data, yMapVal)]);*/
	    yScaleMap.domain([0, 18]);
	    	
	    // Draw X Axis
	    var xAxisCallMap = d3.axisBottom(xScaleMap)
			.tickFormat(function(d){ return d; });		    	
	    xAxismap.transition(d3.transition().duration(1000)).call(xAxisCallMap);

	    // Draw Y Axis
	    var yAxisCallMap = d3.axisLeft(yScaleMap)
	    	.tickFormat(function(d){ return d; });
	    yAxismap.transition(d3.transition().duration(1000)).call(yAxisCallMap);

		// JOIN new data with old elements.
	    var maprect3 = mapsvg.selectAll(".maprect3")
	        .data(Data);

	    // EXIT old elements not present in new data.
	    maprect3.exit()
	        /*.attr("fill", "red")*/
	    .transition(d3.transition().duration(1000))
	        .attr("y", yScaleMap(0))
	        .attr("height", 0)
	        .remove();

	    // ENTER new elements present in new data...
	    maprect3.enter()
	        .append("rect")
	        	.attr("class", "maprect3")
	        	.attr("fill", "#04F9F2")
	        	.attr("stroke", "none")
	        	.attr("opacity", 0.7)
	            .attr("y", yScaleMap(0))
	            .attr("height", 0)
	            .attr("x", function(d){ return xScaleMap(d.Group) })
	            .attr("width", xScaleMap.bandwidth)
	            .on("mouseover", tip5.show)
    			.on("mouseout", tip5.hide)
	            // AND UPDATE old elements present in new data.
	            .merge(maprect3)
	            .transition(d3.transition().duration(1000))
	                .attr("x", function(d){ return xScaleMap(d.Group) })
	                .attr("width", xScaleMap.bandwidth)
	                .attr("y", function(d){ return yScaleMap(d[AUMosaicVar]); })
	                .attr("height", function(d){ return mapheight - yScaleMap(d[AUMosaicVar]); });

	};

	function barCitiMosaic(Data) {

		if (CitiMosaicInit) {
			CitiMosaicVar = "PopPct0"
		} else {
			CitiMosaicVar = "PopPct"
		}

		var yMapVal = function(d) { return d[CitiMosaicVar];},
			yMapScale = function(d) { return yScaleMap(yMapVal(d))};

/*		xScaleMap.domain(barData.map(function(d){ return d.State }));
	    yScaleMap.domain([0, d3.max(barData, yMapVal)]);
	    	
	    // Draw X Axis
	    var xAxisCallMap = d3.axisBottom(xScaleMap)
			.tickFormat(function(d){ return d; });		    	
	    xAxismap.transition(d3.transition().duration(1000)).call(xAxisCallMap);

	    // Draw Y Axis
	    var yAxisCallMap = d3.axisLeft(yScaleMap)
	    	.tickFormat(function(d){ return d; });
	    yAxismap.transition(d3.transition().duration(1000)).call(yAxisCallMap);*/

		// JOIN new data with old elements.
	    var maprect4 = mapsvg.selectAll(".maprect4")
	        .data(Data);

	    // EXIT old elements not present in new data.
	    maprect4.exit()
	        /*.attr("fill", "red")*/
	    .transition(d3.transition().duration(1000))
	        .attr("y", yScaleMap(0))
	        .attr("height", 0)
	        .remove();

	    // ENTER new elements present in new data...
	    maprect4.enter()
	        .append("rect")	
	        	.attr("class", "maprect4")
	        	.attr("fill", "#042DFB")
	        	.attr("stroke", "none")
	        	.attr("opacity", 0.9)
	            .attr("y", yScaleMap(0))
	            .attr("height", 0)
	            .attr("x", function(d){ return xScaleMap(d.Group) + 20})
	            .attr("width", xScaleMap.bandwidth)
	            .on("mouseover", tip6.show)
    			.on("mouseout", tip6.hide)
	            // AND UPDATE old elements present in new data.
	            .merge(maprect4)
	            .transition(d3.transition().duration(1000))
	                .attr("x", function(d){ return xScaleMap(d.Group) + 20})
	                .attr("width", xScaleMap.bandwidth)
	                .attr("y", function(d){ return yScaleMap(d[CitiMosaicVar]); })
	                .attr("height", function(d){ return mapheight - yScaleMap(d[CitiMosaicVar]); });
	};

