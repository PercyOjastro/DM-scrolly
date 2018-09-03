// Set graph
	var anim3Margin = { left:50, right:50, top:30, bottom:30 };
	var anim3Width = width * 0.65,
		anim3Height = 900,
		padding = 10;
			
	// create an svg container
	var animation3 = d3.select(".animation3")
		.append("svg")
			.attr("width", anim3Width)
			.attr("height", anim3Height)
		.append("g")
			.attr("transform", "translate(" + anim3Margin.left + ", " + anim3Margin.top + ")")
		    .attr("stroke", "#000000");

	var xAxisGroup = animation3.append("g")
	    .attr("class", "x axis")
	    .attr("stroke", "#000000")
	    .attr("transform", "translate(0," + (anim3Height - anim3Margin.bottom - anim3Margin.top - 50) + ")")

	var yAxisGroup = animation3.append("g")
	    .attr("class", "y axis")
	    .attr("stroke", "#000000")
	    .attr("transform", "translate(" + anim3Margin.left + "," + anim3Margin.top + ")");

	// X Scale
	var x = d3.scaleLinear()
	    .range([anim3Margin.left, (anim3Width - anim3Margin.right - anim3Margin.left - 50)])
	    .domain([0, 28]);

	// Y Scale
	var y = d3.scaleLinear()
	    .range([(anim3Height - anim3Margin.bottom - anim3Margin.top - 80), anim3Margin.top])
	    .domain([0, 3500])

	// X Label
	animation3.append("text")
	    .attr("y", (anim3Height - 50))
	    .attr("x", ((anim3Width / 2) - 20))
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("stroke", "#000000")
	    .text("Spend Days per Month");

	// Y Label
	var yLabel = animation3.append("text")
	    .attr("y", -(anim3Margin.left - 30))
	    .attr("x", -((anim3Height / 2) - 40))
	    .attr("font-size", "20px")
	    .attr("text-anchor", "middle")
	    .attr("transform", "rotate(-90)")
	    .attr("stroke", "#000000")
	    .text("$ Spend per Month");

	// X Axis
    var xAxis = d3.axisBottom(x)
    	.tickFormat(function(d){ return d; });
    xAxisGroup.transition(t).call(xAxis);

    // Y Axis
    var yAxis = d3.axisLeft(y)
    	.tickFormat(function(d){ return "$" + d; });
    yAxisGroup.transition(t).call(yAxis);

	d3.csv("data/Spend.csv").then(function(data){
		data.forEach(function(d) {
			var rects = animation3.selectAll("rect")
				.data(data);

			rects.enter()
				.append("rect")
					.transition().duration(4000).ease(d3.easeElastic)
					.attr("x", function(d) {
						return ((((anim3Width - anim3Margin.right - anim3Margin.left - 50) / 28) * d.DaysMin) + anim3Margin.left - 20);
					})
					.attr("y", function(d) {
						return ((anim3Height) - (((anim3Height - anim3Margin.top - anim3Margin.bottom) / 3500) * d.SpendMax) - anim3Margin.top);
					})
					.attr("width", function(d) {
						return ((d.DaysMax - d.DaysMin) * ((anim3Width - anim3Margin.left - anim3Margin.right - 50)  / 28));
					})
					.attr("height", function(d) {
						return ((d.SpendMax - d.SpendMin) * (((anim3Height - anim3Margin.top - anim3Margin.bottom - 80)) / 3500));
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
			rects.on("mouseover", function(d) {
					d3.select(this).attr("opacity", 1);
					rects.append
				})
				.on("mouseout", function(d) {
					d3.select(this).attr("opacity", 0.7);
				});
			})
		});
