		/*
			circle.js - generates circle animations
			by po59726
		*/
		
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
		var flag = true;
		    
		wholepage
	  		.on("scroll.scroller", function() {
	      	newScrollTop = wholepage.node().scrollTop
	    });

	  	var scrollvalue = d3.selectAll('#scrollvalue');

	  	// Circle 
	  	var circlesvg = d3.select(".circle-para").append("svg")
			.attr("width", width)
			.attr("height", height);

		var circle1 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#04f9ee")
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
			.attr("fill", "#1604f9")
			.attr("opacity", 0.5)

		var circletxt2 = circlesvg.append("text")
			.attr("x", xcenter + 75)
			.attr("y", ycenter + 100)
			.attr("font-size", 0)
			.text("Citi")

		var pcttxtCiti = circlesvg.append("text")
			.attr("x", xcenter - (centergap * 6) - 25)
    		.attr("y", ycenter)
    		.attr("font-size", 0)
    		.text("19.38%")

		var circle3 = circlesvg.append("circle")
			.attr("cx", xcenter + 92.5)
			.attr("cy", ycenter + 92.5)
			.attr("r", 0)
			.attr("fill", "#8A04F9")
			.attr("opacity", 0.5)

		var circletxt3 = circlesvg.append("text")
			.attr("x", xcenter + 75)
			.attr("y", ycenter + 100)
			.attr("font-size", 0)
			.text("Partners")

		var pcttxtCS = circlesvg.append("text")
			.attr("x", xcenter + 72)
    		.attr("y", ycenter)
    		.attr("font-size", 0)
    		.text("2.7%")

		var circle4 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#0470f9")
			.attr("opacity", 0.5)

		var circletxt4 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Ready Credit")

		var pcttxtRC = circlesvg.append("text")
			.attr("x", xcenter - (centergap * 4) - 60)
    		.attr("y", ycenter)
    		.attr("font-size", 0)
    		.text("5.42%")

		var circle5 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#0465F9")
			.attr("opacity", 0.5)

		var circletxt5 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Retail Banking")

		var pcttxtRetail = circlesvg.append("text")
			.attr("x", xcenter - (centergap * 3))
    		.attr("y", ycenter)
    		.attr("font-size", 0)
    		.text("23.55%")

		var circle6 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#B544F5")
			.attr("opacity", 0.5)

		var circletxt6 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("BOQ")

		var pcttxtBOQ = circlesvg.append("text")
			.attr("x", xcenter + (centergap * 2) - 10)
    		.attr("y", ycenter)
    		.attr("font-size", 0)
    		.text("4.92%")

		var circle7 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#BF62F3")
			.attr("opacity", 0.5)

		var circletxt7 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("SunCorp")

		var pcttxtSCP = circlesvg.append("text")
			.attr("x", xcenter + (centergap * 3) + 25)
    		.attr("y", ycenter)
    		.attr("font-size", 0)
    		.text("6.63%")

		var circle8 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#CD8BF2")
			.attr("opacity", 0.5)

		var circletxt8 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Virgin Money")

		var pcttxtVMA = circlesvg.append("text")
			.attr("x", xcenter + (centergap * 5) - 40)
    		.attr("y", ycenter)
    		.attr("font-size", 0)
    		.text("6.05%")

		var circle9 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#D6A9F0")
			.attr("opacity", 0.5)

		var circletxt9 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Qantas")

		var pcttxtQCC = circlesvg.append("text")
			.attr("x", xcenter + (centergap * 6) - 20)
    		.attr("y", ycenter)
    		.attr("font-size", 0)
    		.text("1.81%")

		var circle10 = circlesvg.append("circle")
			.attr("cx", xcenter)
			.attr("cy", ycenter)
			.attr("r", 0)
			.attr("fill", "#8A04F9")
			.attr("opacity", 0.5)

		var circletxt10 = circlesvg.append("text")
			.attr("x", xcenter)
			.attr("y", ycenter)
			.attr("font-size", 0)
			.text("Coles")

		var pcttxtColes = circlesvg.append("text")
			.attr("x", xcenter - centergap + 10)
    		.attr("y", ycenter)
    		.attr("font-size", 0)
    		.text("22.31%")
		
		/*var Qantaslogo = circlesvg.append("svg:image")
			.attr("x", xcenter + 360)
			.attr("y", ycenter + 60)
			.attr("xlink:href", "images/Qantas.png")
			.attr("width", 0)
			.attr("height", 0)*/
			
