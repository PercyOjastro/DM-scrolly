	// init
	var scat2Init = true;

	// set margins
	var scat2margin = { left: 80, right: 40, top: 40, bottom: 80},
		scat2width = (width * 0.65) - scat2margin.left - scat2margin.right,
		scat2height = +900 - scat2margin.top - scat2margin.bottom;

	// set SVG canvass
	var scat2svg = d3.select(".animation3")
		.append("svg")
			.attr("width", width * 0.65)
			.attr("height", 900)
		.append("g")
	        .attr("transform", "translate(" + scat2margin.left + ", " + scat2margin.top + ")")
	        .attr("stroke", "#000000");

    // Tooltip
	var tip2 = d3.tip().attr('class', 'd3-tip')
	    .html(function(d) {
	        var text = "<strong>Portfolio:</strong> <span style='color:red'>" + d.Portfolio + "</span><br>";
	        text += "<strong>Spend Days per Month:</strong> <span style='color:red;'>" + d[xVar2] + "</span><br>";
	        text += "<strong>$ Spend per Month:</strong> <span style='color:red;'>" + d[yVar2] + "</span><br>";
	        return text;
	    });
	scat2svg.call(tip2);

	// set x-axis
	var xAxscat2 = scat2svg.append("g")
	    .attr("class", "x axis")
	    .attr("stroke", "#000000")
	    // .attr("transform", "translate(0," + scat2height +")");
	    .attr("transform", "translate(0," + scat2height +")");

	var xScat2 = d3.scaleLinear()
	    // .range([0, scat2width]);
	    .range([0, scat2width])
    scat2svg.append("text")
	    .attr("y", scat2height + 55)
	    .attr("x", scat2width / 2)
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("stroke", "#000000")
	    .text("Spend Days per Month");

	// set y-axis
	var yAxscat2 = scat2svg.append("g")
	    .attr("class", "y axis")
	    .attr("stroke", "#000000");
	var yScat2 = d3.scaleLinear()
	    // .range([scat2height, 0]);
	    .range([scat2height, scat2margin.top])
    var yLabel2 = scat2svg.append("text")
	    .attr("y", -65)
	    .attr("x", -(scat2height / 2))
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("transform", "rotate(-90)")
	    .attr("stroke", "#000000")
	    .text("$ Spend per Month");

		scat2ter();
    	
	function scat2ter() {

		if (scat2Init) {
			xVar2 = "shop_days2"
			yVar2 = "spend2"
		} else {
			xVar2 = "shop_days"
			yVar2 = "spend"
		}

	   	d3.csv("data/SPEND_BY_DAYS.csv").then(function(data){
			
			data.forEach(function(d) {
				d.shop_days = +d.shop_days;
				d.spend = +d.spend;
			});

			drawscat2ter(data);
		});

		function drawscat2ter(data) {

			var t2 = d3.transition().duration(1000);

			var xVal2 = function(d) { return d[xVar2];},
				yVal2 = function(d) { return d[yVar2];},
				xMap2 = function(d) { return xScat2(xVal2(d))},
				yMap2 = function(d) { return yScat2(yVal2(d))},
				fillcolor2 = function(d) {
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

			xScat2.domain([0, d3.max(data, xVal2)]);
		    yScat2.domain([0, d3.max(data, yVal2)]);
		    	
		    // X Axis
		    var xAxisCall2 = d3.axisBottom(xScat2)
				.tickFormat(function(d){ return d; });		    	
		    xAxscat2.transition(t2).call(xAxisCall2);

		    // Y Axis
		    var yAxisCall2 = d3.axisLeft(yScat2)
		    	.tickFormat(function(d){ return d; });
		    yAxscat2.transition(t2).call(yAxisCall2);

		    var portfolio2 = ["Citi", "BoQ", "Virgin Money", "Coles", "Qantas", "Suncorp"];

		    var legend2 = scat2svg.append("g")
			    .attr("transform", "translate(" + (scat2width - 10) + 
			        "," + (scat2height - 125) + ")");

			portfolio2.forEach(function(portfolio2, i){
			    var legendRow2 = legend2.append("g")
			        .attr("transform", "translate(0, " + (i * 20) + ")");

			    legendRow2.append("rect")
			        .attr("width", 10)
			        .attr("height", 10)
			        .attr("fill", function(d) {
						if (portfolio2 == "Citi") {
							return "#21618C";
						}
						if (portfolio2 == "BoQ") {
							return "#E74C3C";
						}
						if (portfolio2 == "Virgin Money") {
							return "#F39C12";
						}				 
						if (portfolio2 == "Coles") {
							return "#2ECC71";
						}
						if (portfolio2 == "Qantas") {
							return "#9B59B6";
						}
						if (portfolio2 == "Suncorp") {
							return "#F7DC6F";
						} else {
							return "#000000"
						}
					})
			        .attr("opacity", 0.4);

			    legendRow2.append("text")
			        .attr("x", -10)
			        .attr("y", 10)
			        .attr("text-anchor", "end")
			        .style("text-transform", "capitalize")
			        .text(portfolio2);
			});

			var dots2 = scat2svg.selectAll(".dot2")
				.data(data);

			dots2.exit()
		        .attr("class", "exit")
		        .remove();

			dots2.enter().append("circle")
				.attr("class", "dot2")
				.attr("fill", fillcolor2)
				.attr("opacity", 0.4)
				.on("mouseover", tip2.show)
        		.on("mouseout", tip2.hide)
				.merge(dots2)
				.transition(d3.transition().duration(1000))
					.attr("r", 6)
					.attr("cx", xMap2)
					.attr("cy", yMap2)					
	   	};
   	};