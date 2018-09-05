	  	var flag5 = "Y",
	  		flag6 = "Y";

	  	// render animations
	  	var render = function() {
	      	if (scrollTop !== newScrollTop) {
		        scrollTop = newScrollTop		        
		    }

		    // Animate Circles in Figure 1
		    if (scrollTop > 550 && scrollTop < 800 && flag1 === "Y") try {
		    	flag1 = "N"
		    	circle1.transition(d3.transition().duration(1000))
		    		.attr("r", 200)
		    	circletxt1.transition(d3.transition().duration(1000))
		    		.attr("font-size", "2.5rem")
		    } catch(err) {
		    	circle1.interrupt()
		    	circletxt1.interrupt()
		    }

		    if (scrollTop < 550 && flag1 === "N") try {
		    	flag1 = "Y"
		    	circle1.transition(d3.transition().duration(1000))
		    		.attr("r", 0)
		    	circletxt1.transition(d3.transition().duration(1000))
		    		.attr("font-size", 0)
		    } catch(err) {
		    	circle1.interrupt()
		    	circletxt1.interrupt()
		    }

		    if (scrollTop > 800 && scrollTop < 1100 && flag2 === "Y") try {
		    	flag2 = "N"
		    	circle2.transition(d3.transition().duration(1000))
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(1000))
		    		.attr("font-size", "1.5rem")
		    } catch(err) {
		    	circle2.interrupt()
		    	circletxt2.interrupt()
		    }

		    if (scrollTop < 800 && scrollTop > 550 && flag2 === "N") try {
		    	flag2 = "Y"
		    	circle2.transition(d3.transition().duration(1000))
		    		.attr("r", 0)
		    	circletxt2.transition(d3.transition().duration(1000))
		    		.attr("font-size", 0)
		    } catch(err) {
		    	circle2.interrupt()
		    	circletxt2.interrupt()
		    }

		    if (scrollTop > 1100 && scrollTop < 1550 && flag3 === "Y") try {
		    	flag3 = "N"
		    	circletxt1.transition(d3.transition().duration(1000))
		    		.attr("y", ycenter - 100 )
		    	circle2.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter - 60)
		    		.attr("cy", ycenter)
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter - 70)
		    		.attr("y", ycenter)
		    		.attr("font-size", "1rem")
		    	circle3.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter + 60)
		    		.attr("cy", ycenter)
		    		.attr("r", 70)
		    	circletxt3.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter + 35)
		    		.attr("y", ycenter)
		    		.attr("font-size", "1rem")
		    } catch(err) {
		    	circletxt1.interrupt()
		    	circle2.interrupt()
		    	circletxt2.interrupt()
		    	circle3.interrupt()
		    	circletxt3.interrupt()
		    }

		    if (scrollTop < 1100 && scrollTop > 800 && flag3 === "N") try {
		    	flag3 = "Y"
		    	circletxt1.transition(d3.transition().duration(1000))
		    		.attr("y", ycenter)
		    	circle2.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter + 92.5)
		    		.attr("cy", ycenter + 92.5)
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter + 75)
					.attr("y", ycenter + 100)
		    		.attr("font-size", "1.5rem")
		    	circle3.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter + 92.5)
		    		.attr("cy", ycenter + 92.5)
		    		.attr("r", 0)
		    	circletxt3.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter + 75)
					.attr("y", ycenter + 100)
		    		.attr("font-size", 0)
		    } catch(err) {
		    	circletxt1.interrupt()
		    	circle2.interrupt()
		    	circletxt2.interrupt()
		    	circle3.interrupt()
		    	circletxt3.interrupt()
		    }

			if (scrollTop > 1550 && flag4 === "Y") try {
				flag4 = "N"
		    	circle1.transition(d3.transition().duration(1000))
		    		.attr("r", 0)
		    	circletxt1.transition(d3.transition().duration(1000))
		    		.attr("font-size", 0)
		    	circle2.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter - (centergap * 6))
		    		.attr("r", 90)
		    	circletxt2.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter - (centergap * 6) - 50)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    		.text("Credit Cards")
		    	circle3.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter + 30)
		    		.attr("r", 50)
		    	circletxt3.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter - 20)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    		.text("Cards Services")
		    	circle4.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter - (centergap * 4) - 10)
		    		.attr("r", 40)
		    	circletxt4.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter - (centergap * 4) - 60)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle5.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter - (centergap * 2) - 60)
		    		.attr("r", 50)
		    	circletxt5.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter - (centergap * 3) - 18)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle6.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter + (centergap * 2))
		    		.attr("r", 65)
		    	circletxt6.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter + (centergap * 2) - 18)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle7.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter + (centergap * 3.5))
		    		.attr("r", 35)
		    	circletxt7.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter + (centergap * 3) + 18)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle8.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter + (centergap * 5) - 20)
		    		.attr("r", 45)
		    	circletxt8.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter + (centergap * 5) - 60)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle9.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter + (centergap * 6))
		    		.attr("r", 45)
		    	circletxt9.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter + (centergap * 6) - 20)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle10.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter - centergap - 15)
		    		.attr("r", 45)
		    	circletxt10.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter - centergap - 38)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    } catch(err) {
		    	circle1.interrupt()
		    	circletxt1.interrupt()
		    	circle2.interrupt()
		    	circletxt2.interrupt()
		    	circle3.interrupt()
		    	circletxt3.interrupt()
		    	circle4.interrupt()
		    	circletxt4.interrupt()
		    	circle5.interrupt()
		    	circletxt5.interrupt()
		    	circle6.interrupt()
		    	circletxt6.interrupt()
		    	circle7.interrupt()
		    	circletxt7.interrupt()
		    	circle8.interrupt()
		    	circletxt8.interrupt()
		    	circle9.interrupt()
		    	circletxt9.interrupt()
		    	circle10.interrupt()
		    	circletxt10.interrupt()
		    }

		    if (scrollTop < 1550 && scrollTop > 1100 && flag4 === "N") try {
		    	flag4 = "Y"
		    	circle1.transition(d3.transition().duration(1000))
		    		.attr("r", 200)
		    	circletxt1.transition(d3.transition().duration(1000))
		    		.attr("y", ycenter - 100 )
		    		.attr("font-size", "2.5rem")
		    	circle2.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter - 60)
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter - 70)
		    		.attr("y", ycenter)
		    		.text("Citi")
		    	circle3.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter + 60)
		    		.attr("r", 70)
		    	circletxt3.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter + 35)
		    		.attr("y", ycenter)
		    		.text("Partners")
		    	circle4.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt4.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle5.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt5.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle6.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt6.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle7.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt7.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle8.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt8.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle9.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt9.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle10.transition(d3.transition().duration(1000))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt10.transition(d3.transition().duration(1000))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    } catch(err) {
		    	circle1.interrupt()
		    	circletxt1.interrupt()
		    	circle2.interrupt()
		    	circletxt2.interrupt()
		    	circle3.interrupt()
		    	circletxt3.interrupt()
		    	circle4.interrupt()
		    	circletxt4.interrupt()
		    	circle5.interrupt()
		    	circletxt5.interrupt()
		    	circle6.interrupt()
		    	circletxt6.interrupt()
		    	circle7.interrupt()
		    	circletxt7.interrupt()
		    	circle8.interrupt()
		    	circletxt8.interrupt()
		    	circle9.interrupt()
		    	circletxt9.interrupt()
		    	circle10.interrupt()
		    	circletxt10.interrupt()
		    }

		    if (scrollTop > 4170 && flag5 == "Y") {
		    	flag5 = "N"
		    	scatInit = false;
		    	scatter(scatrows);
		    }

		    if (scrollTop < 4170 && flag5 == "N") {
		    	flag5 = "Y"
		    	scatInit = true;
		    	scatter(scatrows);
		    }

		    if (scrollTop > 7150 && flag6 == "Y") {
		    	flag6= "N"
		    	scat2Init = false;
		    	scat2ter(scat2rows);
		    }

		    if (scrollTop < 7150 && flag6 == "N") {
		    	flag6 = "Y"
		    	scat2Init = true;
		    	scat2ter(scat2rows);
		    }


		    // Render animation
	      	scrollvalue.text(scrollTop)
	      	window.requestAnimationFrame(render)
	    }
	    window.requestAnimationFrame(render);