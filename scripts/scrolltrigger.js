	  	/*
			scrolltrigger.js - scroll trigger handler
			by po59726
		*/

	  	var flag1 = "Y",
	  		flag2 = "Y",
	  		flag3 = "Y",
	  		flag4 = "Y",
	  		flag5 = "Y",
	  		flag6 = "Y",
	  		flag7 = "Y",
	  		flag8 = "Y",
	  		flag9 = "Y",
	  		flag10 = "Y",
	  		flag11 = "Y",
	  		flag12 = "Y",
	  		flag13 = "Y",
	  		flag14 = "Y"
	  		;

	  	// render animations
	  	var render = function() {
	      	if (scrollTop !== newScrollTop) {
		        scrollTop = newScrollTop		        
		    }

		    // Animate Circles in Figure 1
		    if (scrollTop > 550 && scrollTop < 800 && flag1 === "Y") try {
		    	flag1 = "N"
		    	circle1.transition(d3.transition().duration(500))
		    		.attr("r", 200)
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("font-size", "2.5rem")
		    } catch(err) {
		    	circle1.interrupt()
		    	circletxt1.interrupt()
		    }

		    if (scrollTop < 550 && flag1 === "N") try {
		    	flag1 = "Y"
		    	circle1.transition(d3.transition().duration(500))
		    		.attr("r", 0)
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    } catch(err) {
		    	circle1.interrupt()
		    	circletxt1.interrupt()
		    }

		    if (scrollTop > 800 && scrollTop < 1100 && flag2 === "Y") try {
		    	flag2 = "N"
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("font-size", "1.5rem")
		    } catch(err) {
		    	circle2.interrupt()
		    	circletxt2.interrupt()
		    }

		    if (scrollTop < 800 && scrollTop > 550 && flag2 === "N") try {
		    	flag2 = "Y"
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("r", 0)
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    } catch(err) {
		    	circle2.interrupt()
		    	circletxt2.interrupt()
		    }

		    if (scrollTop > 1100 && scrollTop < 1550 && flag3 === "Y") try {
		    	flag3 = "N"
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("y", ycenter - 100 )
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - 60)
		    		.attr("cy", ycenter)
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("x", xcenter - 70)
		    		.attr("y", ycenter)
		    		.attr("font-size", "1rem")
		    	circle3.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 60)
		    		.attr("cy", ycenter)
		    		.attr("r", 70)
		    	circletxt3.transition(d3.transition().duration(500))
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
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("y", ycenter)
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 92.5)
		    		.attr("cy", ycenter + 92.5)
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + 75)
					.attr("y", ycenter + 100)
		    		.attr("font-size", "1.5rem")
		    	circle3.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 92.5)
		    		.attr("cy", ycenter + 92.5)
		    		.attr("r", 0)
		    	circletxt3.transition(d3.transition().duration(500))
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
		    	circle1.transition(d3.transition().duration(500))
		    		.attr("r", 0)
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - (centergap * 6))
		    		.attr("r", 73)
		    		.attr("fill", "#3104f9")
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("x", xcenter - (centergap * 6) - 50)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    		.text("Credit Cards")
		    	circle3.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 90)
		    		.attr("r", 27)
		    		.attr("fill", "#A820F5")
		    	circletxt3.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + 40)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    		.text("Cards Services")
		    	circle4.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - (centergap * 4) - 40)
		    		.attr("r", 38)
		    		.attr("fill", "#0470f9")
		    	circletxt4.transition(d3.transition().duration(500))
		    		.attr("x", xcenter - (centergap * 4) - 85)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle5.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - (centergap * 2) - 70)
		    		.attr("r", 80)
		    		.attr("fill", "#0465F9")
		    	circletxt5.transition(d3.transition().duration(500))
		    		.attr("x", xcenter - (centergap * 3) - 35)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle6.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + (centergap * 2) + 10)
		    		.attr("r", 37)
		    		.attr("fill", "#B544F5")
		    	circletxt6.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + (centergap * 2) - 5)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle7.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + (centergap * 3.5))
		    		.attr("r", 42)
		    		.attr("fill","#BF62F3")
		    	circletxt7.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + (centergap * 3) + 18)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle8.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + (centergap * 5) - 20)
		    		.attr("r", 41)
		    		.attr("fill", "#CD8BF2")
		    	circletxt8.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + (centergap * 5) - 60)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle9.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + (centergap * 6))
		    		.attr("r", 22)
		    		.attr("fill", "#D6A9F0")
		    	circletxt9.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + (centergap * 6) - 20)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle10.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - centergap + 35)
		    		.attr("r", 78)
		    		.attr("fill", "#8A04F9")
		    	circletxt10.transition(d3.transition().duration(500))
		    		.attr("x", xcenter - centergap + 10)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
	    		pcttxtCiti.transition(d3.transition().duration(500))
	    			.attr("font-size", "1rem")
		    	pcttxtCS.transition(d3.transition().duration(500))
	    			.attr("font-size", "1rem")
		    	pcttxtRC.transition(d3.transition().duration(500))
	    			.attr("font-size", "1rem")
	    		pcttxtRetail.transition(d3.transition().duration(500))
	    			.attr("font-size", "1rem")
    			pcttxtBOQ.transition(d3.transition().duration(500))
	    			.attr("font-size", "1rem")
    			pcttxtColes.transition(d3.transition().duration(500))
	    			.attr("font-size", "1rem")
    			pcttxtQCC.transition(d3.transition().duration(500))
	    			.attr("font-size", "1rem")
    			pcttxtSCP.transition(d3.transition().duration(500))
	    			.attr("font-size", "1rem")
    			pcttxtVMA.transition(d3.transition().duration(500))
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
		    	circle1.transition(d3.transition().duration(500))
		    		.attr("r", 200)
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("y", ycenter - 100 )
		    		.attr("font-size", "2.5rem")
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - 60)
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("x", xcenter - 70)
		    		.attr("y", ycenter)
		    		.text("Citi")
		    	circle3.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 60)
		    		.attr("r", 70)
		    	circletxt3.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + 35)
		    		.attr("y", ycenter)
		    		.text("Partners")
		    	circle4.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt4.transition(d3.transition().duration(500))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle5.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt5.transition(d3.transition().duration(500))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle6.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt6.transition(d3.transition().duration(500))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle7.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt7.transition(d3.transition().duration(500))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle8.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt8.transition(d3.transition().duration(500))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle9.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt9.transition(d3.transition().duration(500))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
		    	circle10.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter)
		    		.attr("r", 0)
		    	circletxt10.transition(d3.transition().duration(500))
		    		.attr("x", xcenter)
		    		.attr("y", ycenter)
		    		.attr("font-size", 0)
	    		pcttxtCiti.transition(d3.transition().duration(500))
	    			.attr("font-size", 0)
		    	pcttxtCS.transition(d3.transition().duration(500))
	    			.attr("font-size", 0)
		    	pcttxtRC.transition(d3.transition().duration(500))
	    			.attr("font-size", 0)
	    		pcttxtRetail.transition(d3.transition().duration(500))
	    			.attr("font-size", 0)
    			pcttxtBOQ.transition(d3.transition().duration(500))
	    			.attr("font-size", 0)
    			pcttxtColes.transition(d3.transition().duration(500))
	    			.attr("font-size", 0)
    			pcttxtQCC.transition(d3.transition().duration(500))
	    			.attr("font-size", 0)
    			pcttxtSCP.transition(d3.transition().duration(500))
	    			.attr("font-size", 0)
    			pcttxtVMA.transition(d3.transition().duration(500))
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

		    if (scrollTop > 10705 && flag7 == "Y") {
		    	flag7 = "N"
		    	bar1Init = false;
		    	barAUpop(AUpop);
		    }

		    if (scrollTop < 10705 && flag7 == "N") {
		    	flag7 = "Y"
		    	bar1Init = true;
		    	barAUpop(AUpop);
		    }

		    if (scrollTop > 11500 && flag8 == "Y") {
		    	flag8 = "N"
		    	bar2Init = false;
/*		    	AUmap1.transition(d3.transition().duration(5000))
		    		.attr("opacity", 0.7)
	    		AUmap2.transition(d3.transition().duration(1000))
		    		.attr("opacity", 0)
*/		    	barCitiShare(CitiShare);
		    }

		    if (scrollTop < 11500 && flag8 == "N") {
		    	flag8 = "Y"
		    	bar2Init = true;
/*		    	AUmap1.transition(d3.transition().duration(1000))
		    		.attr("opacity", 0)
	    		AUmap2.transition(d3.transition().duration(5000))
		    		.attr("opacity", 0.7)
*/		    	barCitiShare(CitiShare);
		    }

		    if (scrollTop > 12500 && flag9 == "Y") {
		    	flag9 = "N";
		    	bar1Init = true;
		    	barAUpop(AUpop);
		    	bar2Init = true;
		    	barCitiShare(CitiShare);
		    	AUMosaicInit = false;
		    	barAUMosaic(AUMosaic);
		    }

		    if (scrollTop < 12500 && flag9 == "N") {
		    	flag9 = "Y"
		    	AUMosaicInit = true;
		    	barAUMosaic(AUMosaic);
				bar1Init = false;
		    	barAUpop(AUpop);
		    	bar2Init = false;
		    	barCitiShare(CitiShare);
		    }

		    if (scrollTop > 13300 && flag10 == "Y") {
		    	flag10 = "N";
		    	CitiMosaicInit = false;
		    	barCitiMosaic(CitiMosaic);
		    }

		    if (scrollTop < 13300 && flag10 == "N") {
		    	flag10 = "Y"
		    	CitiMosaicInit = true;
		    	barCitiMosaic(CitiMosaic);
		    }

		    if (scrollTop > 15800 && flag11 == "Y") {
		    	flag11 = "N";
		    	img1.transition(d3.transition().duration(500))
		    		.attr("opacity", 1)
		    }

		    if (scrollTop < 15800 && flag11 == "N") {
		    	flag11 = "Y"
		    	img1.transition(d3.transition().duration(500))
		    		.attr("opacity", 0)
		    }

		    if (scrollTop > 16600 && flag12 == "Y") {
		    	flag12 = "N";
		    	img2.transition(d3.transition().duration(400).ease(d3.easeBounce))
		    		.attr("width", 520)
		    		.attr("height", 450)
		    		.attr("x", (ppwholewidth / 2) + 145)
					.attr("y", (ppheight / 2) - 500)
		    }

		    if (scrollTop < 16600 && flag12 == "N") {
		    	flag12 = "Y"
		    	img2.transition(d3.transition().duration(400))
		    		.attr("width", 0)
		    		.attr("height", 0)
		    		.attr("x", (ppwholewidth / 2) - 180)
					.attr("y", (ppheight / 2) -300)
		    }

		    if (scrollTop > 17400 && flag13 == "Y") {
		    	flag13 = "N";
		    	img3.transition(d3.transition().duration(400).ease(d3.easeBounce))
		    		.attr("width", 520)
					.attr("height", 450)
		    		.attr("x", (ppwholewidth / 2) - 680)
					.attr("y", (ppheight / 2) - 100)
		    }

		    if (scrollTop < 17400 && flag13 == "N") {
		    	flag13 = "Y"
		    	img3.transition(d3.transition().duration(400))
		    		.attr("width", 0)
					.attr("height", 0)
		    		.attr("x", (ppwholewidth / 2) + 145)
					.attr("y", (ppheight / 2) - 500)
		    }

		    if (scrollTop > 18000 && flag14 == "Y") {
		    	flag14 = "N";
		    	img4.transition(d3.transition().duration(500))
		    		.attr("opacity", 1)
		    }

		    if (scrollTop < 18000 && flag14 == "N") {
		    	flag14 = "Y"
		    	img4.transition(d3.transition().duration(500))
		    		.attr("opacity", 0)
		    }

		    // Render animation
	      	scrollvalue.text(scrollTop)
	      	window.requestAnimationFrame(render)
	    }
	    window.requestAnimationFrame(render);