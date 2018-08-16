		// Common
		var wholepage = d3.select('#whole-page')
		var t = d3.transition().duration(1200);
		var t2 = d3.transition().duration(1800);
		var scrollTop = 0
    	var newScrollTop = 0
    	var flag1 = "Y"
    	var flag2 = "Y"
       	var flag3 = "Y"
       	var flag4 = "Y"

    	var margin = { left:100, right:20, top:100, bottom:60 };

		var width = 950 - margin.left - margin.right,
		    height = 650 - margin.top - margin.bottom;

		var flag = true;
		    
		wholepage
	  		.on("scroll.scroller", function() {
	      	newScrollTop = wholepage.node().scrollTop
	    });

	  	var scrollvalue = d3.selectAll('#scrollvalue');

	  	console.log("Im here");

	  	// Circle 
	  	var circlesvg = d3.select(".circle-para").append("svg")
			.attr("width", "100%")
			.attr("height", "100%");

		var circle1 = circlesvg.append("circle")
			.attr("cx", 750)
			.attr("cy", 280)
			.attr("r", 0)
			.attr("fill", "#D3DF1C")
			.attr("opacity", 0.5)

		var circletxt1 = circlesvg.append("text")
			.attr("x", 675)
			.attr("y", 280)
			.attr("font-size", 0)
			.text("Australia")

		var circle2 = circlesvg.append("circle")
			.attr("cx", 815)
			.attr("cy", 395)
			.attr("r", 0)
			.attr("fill", "#DCD3A7")
			.attr("opacity", 0.5)

		var circletxt2 = circlesvg.append("text")
			.attr("x", 795)
			.attr("y", 399)
			.attr("font-size", 0)
			.text("Citi")


		var oCards = circlesvg.append("circle")
			.attr("cx", 315)
			.attr("cy", 245)
			.attr("r", 0)
			.attr("fill", "#A8C7DA")
			.attr("opacity", 0.5)

		var oCardsTxt = circlesvg.append("text")
			.attr("x", 260)
			.attr("y", 250)
			.attr("font-size", 0)
			.text("Credit Cards")

		var oCL = circlesvg.append("circle")
			.attr("cx", 585)
			.attr("cy", 245)
			.attr("r", 0)
			.attr("fill", "#282362")
			.attr("opacity", 0.5)

		var oCLTxt = circlesvg.append("text")
			.attr("x", 505)
			.attr("y", 250)
			.attr("font-size", 0)
			.text("Consumer Lending")

		var oRetail = circlesvg.append("circle")
			.attr("cx", 450)
			.attr("cy", 420)
			.attr("r", 0)
			.attr("fill", "#282362")
			.attr("opacity", 0.5)

		var oRetailTxt = circlesvg.append("text")
			.attr("x", 385)
			.attr("y", 430)
			.attr("font-size", 0)
			.text("Retail Banking")

		var BOQlogo = circlesvg.append("svg:image")
			.attr("x", 900)
			.attr("y", 140)
			.attr("xlink:href", "images/boq.png")
			.attr("width",0)
			.attr("height", 0)

		var SCPlogo = circlesvg.append("svg:image")
			.attr("x", 1100)
			.attr("y", 140)
			.attr("xlink:href", "images/SCP.png")
			.attr("width",0)
			.attr("height", 0)

		var VMAlogo = circlesvg.append("svg:image")
			.attr("x", 850)
			.attr("y", 270)
			.attr("xlink:href", "images/VMA.png")
			.attr("width", 0)
			.attr("height", 0)

		var Coleslogo = circlesvg.append("svg:image")
			.attr("x", 930)
			.attr("y", 410)
			.attr("xlink:href", "images/Coles.png")
			.attr("width", 0)
			.attr("height", 0)

		var CSlogo = circlesvg.append("svg:image")
			.attr("x", 1150)
			.attr("y", 280)
			.attr("xlink:href", "images/CS.gif")
			.attr("width", 0)
			.attr("height", 0)

		var Qantaslogo = circlesvg.append("svg:image")
			.attr("x", 1000)
			.attr("y", 270)
			.attr("xlink:href", "images/Qantas.png")
			.attr("width", 0)
			.attr("height", 0)

		var Dinerslogo = circlesvg.append("svg:image")
			.attr("x", 1080)
			.attr("y", 400)
			.attr("xlink:href", "images/Diners.png")
			.attr("width", 0)
			.attr("height", 0)
			
	  	// render animations
	  	var render = function() {
	      	if (scrollTop !== newScrollTop) {
		        scrollTop = newScrollTop		        
		    }

		    // Animate Circles in Figure 1
		    if (scrollTop > 550 && flag1 == "Y") {
		    	circle1.transition(t)
		    		.attr("r", 210)
		    	circletxt1.transition(t)
		    		.attr("font-size", "2.5rem")
		    	flag1 = "N"
		    }

		    if (scrollTop < 550 && flag1 == "N") {
		    	circle1.transition(t)
		    		.attr("r", 0)
		    	circletxt1.transition(t)
		    		.attr("font-size", 0)
		    	flag1 = "Y"
		    }

		    if (scrollTop > 1200 && flag2 == "Y") {
		    	circle2.transition(t)
		    		.attr("r", 75)
		    	circletxt2.transition(t)
		    		.attr("font-size", "1.5rem")
		    	flag2 = "N"
		    }

		    if (scrollTop < 1200 && flag2 == "N") {
		    	circle2.transition(t)
		    		.attr("r", 0)
		    	circletxt2.transition(t)
		    		.attr("font-size", 0)
		    	flag2 = "Y"
		    }

		    if (scrollTop > 1700 && flag3 == "Y") {
		    	circle1.transition(t)
		    		.attr("cx", 650)
		    		.attr("r", 150)
		    	circletxt1.transition(t)
		    		.attr("x", 590)
		    		.attr("font-size", "1.5rem")
		    		.text("Citi Branded")
		    	circle2.transition(t)
		    		.attr("cx", 850)
		    		.attr("cy", 280)
		    		.attr("r", 150)
		    	circletxt2.transition(t)
		    		.attr("x", 810)
		    		.attr("y", 280)
		    		.attr("font-size", "1.5rem")
		    		.text("Partners")
		    	flag3 = "N"
		    }

		    if (scrollTop < 1700 && flag3 == "N") {
		    	circle1.transition(t)
		    		.attr("cx", 750)
					.attr("cy", 280)
		    		.attr("r", 210)
		    	circletxt1.transition(t)
		    		.attr("x", 675)
					.attr("y", 280)
		    		.attr("font-size", "2.5rem")
		    		.text("Australia")
		    	circle2.transition(t)
		    		.attr("cx", 815)
					.attr("cy", 395)
		    		.attr("r", 75)
		    	circletxt2.transition(t)
				    .attr("x", 795)
					.attr("y", 399)
				    .attr("font-size", "1.5rem")
		    		.text("Citi")
		    	flag3 = "Y"
		    }

			if (scrollTop > 2150 && flag4 == "Y") {
		    	circle1.transition(t)
		    		.attr("cx", 450)
		    		.attr("r", 250)
		    	circletxt1.transition(t)
		    		.attr("x", 380)
		    		.attr("y", 110)
		    		.attr("font-size", "1.5rem")
		    		.text("Citi Branded")
		    	circle2.transition(t)
		    		.attr("cx", 1050)
		    		.attr("cy", 280)
		    		.attr("r", 250)
		    	circletxt2.transition(t)
		    		.attr("x", 1000)
		    		.attr("y", 110)
		    		.attr("font-size", "1.5rem")
		    		.text("Partners")
		    	oCards.transition(t2)
		    		.attr("r", 110)
		    	oCardsTxt.transition(t2)
		    		.attr("font-size", "1.2rem")
		    	oCL.transition(t2)
		    		.attr("r", 110)
		    	oCLTxt.transition(t2)
		    		.attr("font-size", "1.2rem")
		    	oRetail.transition(t2)
		    		.attr("r", 110)
		    	oRetailTxt.transition(t2)
		    		.attr("font-size", "1.2rem")
		    	BOQlogo.transition(t2)
		    		.attr("width", 100)
					.attr("height", 100)
				VMAlogo.transition(t2)
		    		.attr("width", 100)
					.attr("height", 100)
				SCPlogo.transition(t2)
		    		.attr("width", 100)
					.attr("height", 100)
				CSlogo.transition(t2)
		    		.attr("width", 100)
					.attr("height", 100)
				Coleslogo.transition(t2)
		    		.attr("width", 100)
					.attr("height", 100)
				Qantaslogo.transition(t2)
		    		.attr("width", 100)
					.attr("height", 100)
				Dinerslogo.transition(t2)
		    		.attr("width", 100)
					.attr("height", 100)
		    	flag4 = "N"
		    }

		    if (scrollTop < 2150 && flag4 == "N") {
		    	circle1.transition(t)
		    		.attr("cx", 650)
		    		.attr("r", 150)
		    	circletxt1.transition(t)
		    		.attr("x", 590)
		    		.attr("y", 280)
		    		.attr("font-size", "1.5rem")
		    		.text("Citi Branded")
		    	circle2.transition(t)
		    		.attr("cx", 850)
		    		.attr("cy", 280)
		    		.attr("r", 150)
		    	circletxt2.transition(t)
		    		.attr("x", 810)
		    		.attr("y", 280)
		    		.attr("font-size", "1.5rem")
		    		.text("Partners")
		    	oCards.transition(t2)
		    		.attr("r", 0)
		    	oCardsTxt.transition(t2)
		    		.attr("font-size", 0)
		    	oCL.transition(t2)
		    		.attr("r", 0)
		    		.attr("font-size", "1.5rem")
		    	oCLTxt.transition(t2)
		    		.attr("font-size", 0)
		    	oRetail.transition(t2)
		    		.attr("r", 0)
		    		.attr("font-size", "1.5rem")
		    	oRetailTxt.transition(t2)
		    		.attr("font-size", 0)
		    	BOQlogo.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
				VMAlogo.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
				SCPlogo.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
				CSlogo.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
				Coleslogo.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
				Qantaslogo.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
				Dinerslogo.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
		    	flag4 = "Y"
		    }

		    // Render animation
	      	scrollvalue.text(scrollTop)
	      	window.requestAnimationFrame(render)
	    }
	    window.requestAnimationFrame(render);