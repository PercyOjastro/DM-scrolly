	// init
	var scatInit = true;

	// set margins
	var scatmargin = { left: 80, right: 40, top: 40, bottom: 80},
		scatwidth = (width * 0.65) - scatmargin.left - scatmargin.right,
		scatheight = +900 - scatmargin.top - scatmargin.bottom;

	// set SVG canvass
	var scatsvg = d3.select(".animation2")
		.append("svg")
			.attr("width", width * 0.65)
			.attr("height", 900)
		.append("g")
	        .attr("transform", "translate(" + scatmargin.left + ", " + scatmargin.top + ")")
	        .attr("stroke", "#000000");

    // Tooltip
	var tip = d3.tip().attr('class', 'd3-tip')
	    .html(function(d) {
	        var text = "<strong>Portfolio:</strong> <span style='color:red'>" + d.Portfolio + "</span><br>";
	        text += "<strong>Customer Age:</strong> <span style='color:red;'>" + d[xVar] + "</span><br>";
	        text += "<strong>Affluence:</strong> <span style='color:red;'>" + d[yVar] + "</span><br>";
	        return text;
	    });
	scatsvg.call(tip);

	// set x-axis
	var xAxscat = scatsvg.append("g")
	    .attr("class", "x axis")
	    .attr("stroke", "#000000")
	    // .attr("transform", "translate(0," + scatheight +")");
	    .attr("transform", "translate(0," + scatheight +")");
	var xScat = d3.scaleLinear()
	    // .range([0, scatwidth]);
	    .range([0, scatwidth])
    scatsvg.append("text")
	    .attr("y", scatheight + 55)
	    .attr("x", scatwidth / 2)
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("stroke", "#000000")
	    .text("Age");

	// set y-axis
	var yAxscat = scatsvg.append("g")
	    .attr("class", "y axis")
	    .attr("stroke", "#000000");
	var yScat = d3.scaleLinear()
	    // .range([scatheight, 0]);
	    .range([scatheight, scatmargin.top	])
    var yLabel = scatsvg.append("text")
	    .attr("y", -65)
	    .attr("x", -(scatheight / 2))
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("transform", "rotate(-90)")
	    .attr("stroke", "#000000")
	    .text("Affluence");

	var scatrows = [];

   	d3.csv("data/AFF_BY_AGE.csv").then(function(data){
		
		data.forEach(function(d) {
			d.Cust_age = +d.Cust_age;
			d.affluence = +d.affluence;
		});

		data.map(function(d) {
			scatrows.push(d);
		})

		scatter(scatrows);

	});

	function scatter(scatrows) {
		if (scatInit) {
			xVar = "Age2"
			yVar = "affluence2"
		} else {
			xVar = "Cust_age"
			yVar = "affluence"
		}

		var xVal = function(d) { return d[xVar];},
			yVal = function(d) { return d[yVar];},
			xMap = function(d) { return xScat(xVal(d))},
			yMap = function(d) { return yScat(yVal(d))},
			fillcolor = function(d) {
				if (d.Portfolio == "GCB") {
					return "#21618C";
				}
				if (d.Portfolio == "BOQ") {
					return "#E74C3C";
				}
				if (d.Portfolio == "VMA") {
					return "#F39C12";
				}				 
				if (d.Portfolio == "COL") {
					return "#2ECC71";
				}
				if (d.Portfolio == "QCC") {
					return "#9B59B6";
				}
				else {
					return "#F7DC6F";
				}
			};

		xScat.domain([0, d3.max(scatrows, xVal)]);
	    yScat.domain([0, d3.max(scatrows, yVal)]);
	    	
	    // X Axis
	    var xAxisCall = d3.axisBottom(xScat)
			.tickFormat(function(d){ return d; });		    	
	    xAxscat.transition(d3.transition().duration(1000)).call(xAxisCall);

	    // Y Axis
	    var yAxisCall = d3.axisLeft(yScat)
	    	.tickFormat(function(d){ return d; });
	    yAxscat.transition(d3.transition().duration(1000)).call(yAxisCall);

	    var portfolio = ["Citi", "BoQ", "Virgin Money", "Coles", "Qantas", "Suncorp"];

	    var legend = scatsvg.append("g")
		    .attr("transform", "translate(" + (scatwidth - 10) + 
		        "," + (scatheight - 125) + ")");

		portfolio.forEach(function(portfolio, i){
		    var legendRow = legend.append("g")
		        .attr("transform", "translate(0, " + (i * 20) + ")");

		    legendRow.append("rect")
		        .attr("width", 10)
		        .attr("height", 10)
		        .attr("fill", function(d) {
					if (portfolio == "Citi") {
						return "#21618C";
					}
					if (portfolio == "BoQ") {
						return "#E74C3C";
					}
					if (portfolio == "Virgin Money") {
						return "#F39C12";
					}				 
					if (portfolio == "Coles") {
						return "#2ECC71";
					}
					if (portfolio == "Qantas") {
						return "#9B59B6";
					}
					if (portfolio == "Suncorp") {
						return "#F7DC6F";
					} else {
						return "#000000"
					}
				})
		        .attr("opacity", 0.4);

		    legendRow.append("text")
		        .attr("x", -10)
		        .attr("y", 10)
		        .attr("text-anchor", "end")
		        .style("text-transform", "capitalize")
		        .text(portfolio);
		});

		var dots = scatsvg.selectAll(".dot")
			.data(scatrows);

		dots.exit()
	        .attr("class", "exit")
	        .remove();

		dots.enter().append("circle")
			.attr("class", "dot")
			.attr("fill", fillcolor)
			.attr("opacity", 0.3)
			.attr("stroke", "none")
			.on("mouseover", tip.show)
    		.on("mouseout", tip.hide)
			.merge(dots)
			.transition(d3.transition().duration(1000))
				.attr("r", 6)
				.attr("cx", xMap)
				.attr("cy", yMap)
   	};
