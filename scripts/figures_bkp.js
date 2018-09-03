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

    	var margin = { left:8, right:8, top:8, bottom:8 };

		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		var height = 700 - margin.top - margin.bottom;
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
			.attr("cx", width / 2)
			.attr("cy", height / 2)
			.attr("r", 0)
			// .attr("fill", "#0675C4")
			.attr("fill", "#ffffff")
			.attr("opacity", 0.5)

		var circletxt1 = circlesvg.append("text")
			.attr("x", (width / 2) - 80)
			.attr("y", height / 2)
			.attr("font-size", 0)
			.text("Australia")

		var circle2 = circlesvg.append("circle")
			.attr("cx", (width / 2) + 100)
			.attr("cy", (height / 2) + 100)
			.attr("r", 0)
			.attr("fill", "#B2B4B6")
			.attr("opacity", 0.5)

		var circletxt2 = circlesvg.append("text")
			.attr("x", (width / 2) + 80)
			.attr("y", (height / 2) + 100)
			.attr("font-size", 0)
			.text("Citi")


		var oCards = circlesvg.append("svg:image")
			.attr("x", (width / 2) - 500)
			.attr("y", (height / 2) - 120)
			.attr("xlink:href", "images/CC.jpg")
			.attr("width",0)
			.attr("height", 0)

		var oCL = circlesvg.append("svg:image")
			.attr("x", (width / 2) - 260)
			.attr("y", (height / 2) - 50)
			.attr("xlink:href", "images/RC.png")
			.attr("width",0)
			.attr("height", 0)

		var oRetail = circlesvg.append("svg:image")
			.attr("x", (width / 2) - 450)
			.attr("y", (height / 2) + 50)
			.attr("xlink:href", "images/Retail.jpg")
			.attr("width",0)
			.attr("height", 0)

		var BOQlogo = circlesvg.append("svg:image")
			.attr("x", (width / 2) + 120)
			.attr("y", (height / 2) - 130)
			.attr("xlink:href", "images/boq.png")
			.attr("width",0)
			.attr("height", 0)

		var SCPlogo = circlesvg.append("svg:image")
			.attr("x", (width / 2) + 380)
			.attr("y", (height / 2) - 140)
			.attr("xlink:href", "images/SCP.png")
			.attr("width",0)
			.attr("height", 0)

		var VMAlogo = circlesvg.append("svg:image")
			.attr("x", (width / 2) + 100)
			.attr("y", (height / 2) + 10)
			.attr("xlink:href", "images/VMA.png")
			.attr("width", 0)
			.attr("height", 0)

		var Coleslogo = circlesvg.append("svg:image")
			.attr("x", (width / 2) + 150)
			.attr("y", (height / 2) + 100)
			.attr("xlink:href", "images/Coles.png")
			.attr("width", 0)
			.attr("height", 0)

		var CSlogo = circlesvg.append("svg:image")
			.attr("x", (width / 2) + 270)
			.attr("y", (height / 2) - 50)
			.attr("xlink:href", "images/CS.gif")
			.attr("width", 0)
			.attr("height", 0)

		var Qantaslogo = circlesvg.append("svg:image")
			.attr("x", (width / 2) + 360)
			.attr("y", (height / 2) + 60)
			.attr("xlink:href", "images/Qantas.png")
			.attr("width", 0)
			.attr("height", 0)
			
	  	// render animations
	  	var render = function() {
	      	if (scrollTop !== newScrollTop) {
		        scrollTop = newScrollTop		        
		    }

		    // Animate Circles in Figure 1
		    if (scrollTop > 550 && flag1 == "Y") {
		    	flag1 = "N"
		    	circle1.transition(t)
		    		.attr("r", 210)
		    	circletxt1.transition(t)
		    		.attr("font-size", "2.5rem")
		    }

		    if (scrollTop < 550 && flag1 == "N") {
		    	flag1 = "Y"
		    	circle1.transition(t)
		    		.attr("r", 0)
		    	circletxt1.transition(t)
		    		.attr("font-size", 0)
		    }

		    if (scrollTop > 1000 && flag2 == "Y") {
		    	flag2 = "N"
		    	circle2.transition(t)
		    		.attr("r", 70)
		    	circletxt2.transition(t)
		    		.attr("font-size", "1.5rem")
		    }

		    if (scrollTop < 1000 && flag2 == "N") {
		    	flag2 = "Y"
		    	circle2.transition(t)
		    		.attr("r", 0)
		    	circletxt2.transition(t)
		    		.attr("font-size", 0)
		    }

		    if (scrollTop > 1500 && flag3 == "Y") {
		    	flag3 = "N"
		    	circle1.transition(t)
		    		.attr("cx", (width / 2) - 120)
		    		.attr("r", 150)
		    	circletxt1.transition(t)
		    		.attr("x", (width / 2) - 190)
		    		.attr("font-size", "1.5rem")
		    		.text("Citi Branded")
		    	circle2.transition(t)
		    		.attr("cx", (width / 2) + 120)
		    		.attr("cy", height / 2)
		    		.attr("r", 150)
		    	circletxt2.transition(t)
		    		.attr("x", (width / 2) + 70)
		    		.attr("y", height / 2)
		    		.attr("font-size", "1.5rem")
		    		.text("Partners")
		    }

		    if (scrollTop < 1500 && flag3 == "N") {
		    	flag3 = "Y"
		    	circle1.transition(t)
		    		.attr("cx", width / 2)
					.attr("cy", height / 2)
		    		.attr("r", 210)
		    	circletxt1.transition(t)
		    		.attr("x", (width / 2) - 80)
					.attr("y", height / 2)
		    		.attr("font-size", "2.5rem")
		    		.text("Australia")
		    	circle2.transition(t)
		    		.attr("cx", (width / 2) + 100)
					.attr("cy", (height / 2) + 100)
		    		.attr("r", 70)
		    	circletxt2.transition(t)
				    .attr("x", (width / 2) + 80)
					.attr("y", (height / 2) + 100)
				    .attr("font-size", "1.5rem")
		    		.text("Citi")
		    }

			if (scrollTop > 2050 && flag4 == "Y") {
				flag4 = "N"
		    	circle1.transition(t)
		    		.attr("cx", (width / 2) - 300)
		    		.attr("r", 250)
		    	circletxt1.transition(t)
		    		.attr("x", (width / 2) - 360)
		    		.attr("y", (height / 2) - 150)
		    		.attr("font-size", "1.5rem")
		    		.text("Citi Branded")
		    	circle2.transition(t)
		    		.attr("cx", (width / 2) + 300)
		    		.attr("r", 250)
		    	circletxt2.transition(t)
		    		.attr("x", (width / 2) + 260)
		    		.attr("y", (height / 2) - 150)
		    		.attr("font-size", "1.5rem")
		    		.text("Partners")
		    	oCards.transition(t2)
		    		.attr("width", 160)
					.attr("height", 160)
		    	oCL.transition(t2)
		    		.attr("width", 160)
					.attr("height", 160)
		    	oRetail.transition(t2)
		    		.attr("width", 200)
					.attr("height", 200)
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
		    		.attr("width", 130)
					.attr("height", 130)
				Qantaslogo.transition(t2)
		    		.attr("width", 100)
					.attr("height", 100)
		    }

		    if (scrollTop < 2050 && flag4 == "N") {
		    	flag4 = "Y"
		    	circle1.transition(t)
		    		.attr("cx", (width / 2) - 120)
		    		.attr("r", 150)
		    	circletxt1.transition(t)
		    		.attr("x", (width / 2) - 190)
		    		.attr("y", height / 2)
		    		.attr("font-size", "1.5rem")
		    		.text("Citi Branded")
		    	circle2.transition(t)
		    		.attr("cx", (width / 2) + 120)
		    		.attr("cy", height / 2)
		    		.attr("r", 150)
		    	circletxt2.transition(t)
		    		.attr("x", (width / 2) + 70)
		    		.attr("y", height / 2)
		    		.attr("font-size", "1.5rem")
		    		.text("Partners")
		    	oCards.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
		    	oCL.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
		    	oRetail.transition(t2)
		    		.attr("width", 0)
					.attr("height", 0)
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
		    }

		    // Render animation
	      	scrollvalue.text(scrollTop)
	      	window.requestAnimationFrame(render)
	    }
	    window.requestAnimationFrame(render);