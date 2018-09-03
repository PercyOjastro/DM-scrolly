var anim2Margin = { left:50, right:50, top:50, bottom:50 };
var anim2Width = width * 0.65;
var anim2Height = 900;
var forward = "Y";

var animation2 = d3.select(".animation2").append("svg")
	.attr("width", anim2Width)
	.attr("height", anim2Height);

animation2.append("svg:defs").append("svg:marker")
    .attr("id", "triangle")
    .attr("refX", 6)
    .attr("refY", 6)
    .attr("markerWidth", 30)
    .attr("markerHeight", 30)
    .attr("orient", "auto-start-reverse")
    .append("path")
    .attr("d", "M 0 0 12 6 0 12 3 6")
    .style("fill", "#1A5276");

var xAxis = animation2.append("line")
	.attr("class", "axis")
	.attr("x1", anim2Margin.left)
	.attr("y1", (anim2Height / 2))
	.attr("x2", anim2Width - anim2Margin.right)
	.attr("y2", (anim2Height / 2))
	.attr("style","stroke:#1A5276;stroke-width:2")
	.attr("marker-start", "url(#triangle)")
	.attr("marker-end", "url(#triangle)");

var xAxisText1 = animation2.append("text")
	.attr("x", anim2Margin.left - 10)
	.attr("y", ((anim2Height / 2) - 20))
	.attr("font-size", "1rem")
	.text("Younger 20Yrs");

var xAxisText2 = animation2.append("text")
	.attr("x", (anim2Width - anim2Margin.right - 90))
	.attr("y", ((anim2Height / 2) - 20))
	.attr("font-size", "1rem")
	.text("Older 70Yrs");

var yAxis = animation2.append("line")
	.attr("class", "axis")
	.attr("x1", (anim2Width / 2))
	.attr("y1", anim2Margin.top)
	.attr("x2", (anim2Width / 2))
	.attr("y2", anim2Height - anim2Margin.bottom)
	.attr("style","stroke:#1A5276;stroke-width:2")
	.attr("marker-start", "url(#triangle)")
	.attr("marker-end", "url(#triangle)");

var yAxisText1 = animation2.append("text")
	.attr("x", (anim2Width / 2) - 60)
	.attr("y", anim2Margin.top - 20)
	.attr("font-size", "1rem")
	.text("Very High Wealth");

var yAxisText2 = animation2.append("text")
	.attr("x", (anim2Width / 2) - 60)
	.attr("y", anim2Height - anim2Margin.bottom + 30)
	.attr("font-size", "1rem")
	.text("Very Low Wealth");

function drawRects() {
	d3.csv("data/WealthVsAge.csv").then(function(data){
		data.forEach(function(d) {
			var rects = animation2.selectAll("rect")
				.data(data);

			if (flag5 == "N") {
				rects.enter()
					.append("rect")
						.transition().duration(3000).ease(d3.easeElastic)
						.attr("x", function(d) {
							return (((anim2Width - anim2Margin.left - anim2Margin.right) / 70) * d.AgeMin);
						})
						.attr("y", function(d) {
							return ((anim2Height) - (((anim2Height - anim2Margin.top - anim2Margin.bottom) / 100) * d.WealthMax));
						})
						.attr("width", function(d) {
							return ((d.AgeMax - d.AgeMin) * ((anim2Width) / 70));
						})
						.attr("height", function(d) {
							return ((d.WealthMax - d.WealthMin) * ((anim2Height) / 100));
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
				} else {
					rects.remove();
				}

			rects.on("mouseover", function(d) {
					d3.select(this).attr("opacity", 1);
					rects.append
				})
				.on("mouseout", function(d) {
					d3.select(this).attr("opacity", 0.7);
				});
			})
	})
};

