// Set graph
	var anim2Margin = { left:30, right:30, top:30, bottom:30 };
	var anim2Width = width * 0.65,
		anim2Height = 900,
		padding = 10;
			
	// create an svg container
	var vis = d3.select(".animation2")
		.append("svg")
			.attr("width", anim2Width - anim2Margin.left - anim2Margin.right)
			.attr("height", anim2Height - anim2Margin.top - anim2Margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
		    .attr("stroke", "#000000");

	var xAxisGroup = vis.append("g")
	    .attr("class", "x axis")
	    .attr("stroke", "#000000")
	    .attr("transform", "translate(" + anim2Margin.left + "," + (anim2Height/2) + ")")

	var yAxisGroup = vis.append("g")
	    .attr("class", "y axis")
	    .attr("stroke", "#000000")
	    .attr("transform", "translate(" + (anim2Width/2) + "," + anim2Margin.top + ")");

	// X Scale
	var x = d3.scaleLinear()
	    .range([10, (anim2Width - anim2Margin.right)])
	    .domain([-35, 35]);

	// Y Scale
	var y = d3.scaleLinear()
	    .range([(anim2Height - anim2Margin.bottom), 10])
	    .domain([-100000, 100000])

	// X Axis
    var xAxis = d3.axisBottom(x)
    	.tickFormat(function(d){ return d + 35; });
    xAxisGroup.transition(t).call(xAxis);

    // Y Axis
    var yAxis = d3.axisLeft(y)
    	.tickFormat(function(d){ return "$" + (d + 100000); });
    yAxisGroup.transition(t).call(yAxis);

	/*xAxisGroup.selectAll(".tick line")
		.attr("y1", ((anim2Width - anim2Margin.left - anim2Margin.right) - (2*padding)) * -1)
		.attr("y2", ((anim2Width - anim2Margin.left - anim2Margin.right) - (2*padding)) * 1);

	yAxisGroup.selectAll(".tick line")
		.attr("x1", ((anim2Width - anim2Margin.left - anim2Margin.right) - (2*padding))/2 * -1)
		.attr("x2", ((anim2Width - anim2Margin.left - anim2Margin.right) - (2*padding))/2 * 1);*/

	console.log("anim2Width = " + anim2Width);

	function drawRects() {
		d3.csv("data/BrandTerritory.csv").then(function(data){
			data.forEach(function(d) {
				var rects = vis.selectAll("rect")
					.data(data);

				console.log("Brand = " + d.Brand);
				console.log("x = " + ((anim2Width / 70) * d.AgeMin));
				console.log("y = " + (anim2Height) - (((anim2Height - 30) / 200000) * d.WealthMax));
				
				rects.enter()
					.append("rect")
						.transition().duration(4000).ease(d3.easeElastic)
						.attr("x", function(d) {
							return ((((anim2Width - 60) / 70) * d.AgeMin) + 60);
						})
						.attr("y", function(d) {
							return ((anim2Height) - (((anim2Height - 30) / 200000) * d.WealthMax));
						})
						.attr("width", function(d) {
							return ((d.AgeMax - d.AgeMin) * (anim2Width / 70));
						})
						.attr("height", function(d) {
							return ((d.WealthMax - d.WealthMin) * ((anim2Height - 30) / 200000));
						})
						.attr("fill", function(d) {
							if (d.Brand == "Citi") {
								return "#21618C";
							}
							if (d.Brand == "Qantas") {
								return "#E74C3C";
							}
							if (d.Brand == "VMA") {
								return "#F39C12";
							}				 
							if (d.Brand == "SunCorp") {
								return "#2ECC71";
							}
							if (d.Brand == "BoQ") {
								return "#9B59B6";
							}
							else {
								return "#F7DC6F";
							}
						})
						.attr("opacity", 0.7);
				/*console.log("rects generated")
				rects.exit()
					.transition(t)
					.attr("height",0)
					.remove();
				console.log("rects removed")*/
				})
		})
	};