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

    function drawScatter() {
    	xVar = "Cust_age"
		yVar = "affluence"
    	
    	/*if (scatInit = !scatInit) {
    		xVar = "Cust_age"
    		yVar = "affluence"
    	} else {
    		xVar = "Age2"
    		yVar = "affluence2"
    	}*/

	   	d3.csv("data/AFF_BY_AGE.csv").then(function(data){
			
			data.forEach(function(d) {
				d.Cust_age = +d.Cust_age;
				d.affluence = +d.affluence;
			});

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

			xScat.domain([0, d3.max(data, xVal)]);
		    yScat.domain([0, d3.max(data, yVal)]);
		    	
		    // X Axis
		    var xAxisCall = d3.axisBottom(xScat)
				.tickFormat(function(d){ return d; });		    	
		    xAxscat.transition(t).call(xAxisCall);

		    // Y Axis
		    var yAxisCall = d3.axisLeft(yScat)
		    	.tickFormat(function(d){ return d; });
		    yAxscat.transition(t).call(yAxisCall);

			scatsvg.selectAll(".dot")
				.data(data)
				.enter().append("circle")
					.attr("class", "dot")
					.attr("r", 6)
					.attr("cx", xMap)
					.attr("cy", yMap)
					.attr("fill", fillcolor)
			})
   	};