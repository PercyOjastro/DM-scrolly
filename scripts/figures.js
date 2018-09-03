		// Common
		var wholepage = d3.select('#whole-page')
		var t = d3.transition().duration(1200).ease(d3.easeBounce);
		var t2 = d3.transition().duration(1800).ease(d3.easeBounce);
		var scrollTop = 0
    	var newScrollTop = 0
    	var flag1 = "Y"
    	var flag2 = "Y"
       	var flag3 = "Y"
       	var flag4 = "Y"

    	var margin = { left:0, right:0, top:0, bottom:0 };

		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		var height = 700 - margin.top - margin.bottom;
		var xcenter = width / 2;
		var ycenter = height / 2;
		var centergap = width / 18;
		console.log(width)
		var flag = true;
		    
		wholepage
	  		.on("scroll.scroller", function() {
	      	newScrollTop = wholepage.node().scrollTop
	    });

	  	var scrollvalue = d3.selectAll('#scrollvalue');

	  	console.log("Im here");

	  	// Circle 
	  	var circlesvg = d3.select(".circle-para").append("svg")
			.attr("width", width)
			.attr("height", height);

		var circle1 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#5DADE2")
			.attr("opacity", 0.5)

		var circletxt1 = circlesvg.append("text")
			.attr("x", xcenter - 80)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Australia")

		var circle2 = circlesvg.append("circle")
			.attr("cx", xcenter + 92.5)
			.attr("cy", ycenter + 92.5)
			.attr("r", 0)
			.attr("fill", "#2144E3")
			.attr("opacity", 0.5)

		var circletxt2 = circlesvg.append("text")
			.attr("x", xcenter + 75)
			.attr("y", ycenter + 100)
			.attr("font-size", 0)
			.text("Citi")

		var circle3 = circlesvg.append("circle")
			.attr("cx", xcenter + 92.5)
			.attr("cy", ycenter + 92.5)
			.attr("r", 0)
			.attr("fill", "#C9E321")
			.attr("opacity", 0.5)

		var circletxt3 = circlesvg.append("text")
			.attr("x", xcenter + 75)
			.attr("y", ycenter + 100)
			.attr("font-size", 0)
			.text("Partners")

		var circle4 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#2144E3")
			.attr("opacity", 0.5)

		var circletxt4 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Ready Credit")

		var circle5 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#2144E3")
			.attr("opacity", 0.5)

		var circletxt5 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Retail Banking")

		var circle6 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#C9E321")
			.attr("opacity", 0.5)

		var circletxt6 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("BOQ")

		var circle7 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#C9E321")
			.attr("opacity", 0.5)

		var circletxt7 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("SunCorp")

		var circle8 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#C9E321")
			.attr("opacity", 0.5)

		var circletxt8 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Virgin Money")

		var circle9 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#C9E321")
			.attr("opacity", 0.5)

		var circletxt9 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Qantas")

		var circle10 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#C9E321")
			.attr("opacity", 0.5)

		var circletxt10 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Coles")
		
		/*var Qantaslogo = circlesvg.append("svg:image")
			.attr("x", xcenter + 360)
			.attr("y", ycenter + 60)
			.attr("xlink:href", "images/Qantas.png")
			.attr("width", 0)
			.attr("height", 0)*/
			
