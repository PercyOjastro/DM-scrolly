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
	  		flag14 = "Y",
	  		flag15 = "Y",
	  		flag16 = "Y",
	  		flag17 = "Y",
	  		flag18 = "Y"
	  		;

	  	// render animations
	  	var render = function() {
	      	if (scrollTop !== newScrollTop) {
		        scrollTop = newScrollTop		        
		    }

		    // Animate Circles in Figure 1
		    if (scrollTop > 550 && scrollTop < 800 && flag1 === "Y") {
		    	flag1 = "N"
		    	circle1.transition(d3.transition().duration(500))
		    		.attr("r", 200)
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("font-size", "2.5rem")
		    	circletxt1_2.transition(d3.transition().duration(500))
		    		.attr("font-size", "2rem")
		    } 

		    if (scrollTop < 550 && flag1 === "N") {
		    	flag1 = "Y"
		    	circle1.transition(d3.transition().duration(500))
		    		.attr("r", 0)
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    	circletxt1_2.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    } 

		    if (scrollTop > 800 && scrollTop < 1100 && flag2 === "Y") {
		    	flag2 = "N"
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("font-size", "1.5rem")
		    	circletxt2_1.transition(d3.transition().duration(500))
		    		.attr("font-size", "1rem")
		    } 

		    if (scrollTop < 800 && scrollTop > 550 && flag2 === "N") {
		    	flag2 = "Y"
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("r", 0)
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    	circletxt2_1.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    } 

		    if (scrollTop > 1100 && scrollTop < 1550 && flag3 === "Y") {
		    	flag3 = "N"
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("y", ycenter - 100 )
		    	circletxt1_2.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - 60)
		    		.attr("cy", ycenter)
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("x", xcenter - 70)
		    		.attr("y", ycenter)
		    		.attr("font-size", "1rem")
	    		circletxt2_1.transition(d3.transition().duration(500))
	    			.attr("x", xcenter - 78)
		    		.attr("y", ycenter + 20)
		    		.attr("font-size", "1rem")
		    		.text("1MM")
		    	circle3.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 60)
		    		.attr("cy", ycenter)
		    		.attr("r", 70)
		    	circletxt3.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + 35)
		    		.attr("y", ycenter)
		    		.attr("font-size", "1rem")
	    		circletxt3_1.transition(d3.transition().duration(500))
		    		.attr("font-size", "1rem")
		    } 

		    if (scrollTop < 1100 && scrollTop > 800 && flag3 === "N") {
		    	flag3 = "Y"
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("y", ycenter)
	    		circletxt1_2.transition(d3.transition().duration(500))
		    		.attr("font-size", "2rem")
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 92.5)
		    		.attr("cy", ycenter + 92.5)
		    		.attr("r", 70)
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + 75)
					.attr("y", ycenter + 100)
		    		.attr("font-size", "1.5rem")
		    	circletxt2_1.transition(d3.transition().duration(500))
	    			.attr("x", xcenter + 68)
					.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    		.text("1.77MM")
		    	circle3.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 92.5)
		    		.attr("cy", ycenter + 92.5)
		    		.attr("r", 0)
		    	circletxt3.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + 75)
					.attr("y", ycenter + 100)
		    		.attr("font-size", 0)
	    		circletxt3_1.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    } 

			if (scrollTop > 1550 && flag4 === "Y") {
				flag4 = "N"
		    	circle1.transition(d3.transition().duration(500))
		    		.attr("r", 0)
		    	circletxt1.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    	circle2.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - (centergap * 6))
		    		.attr("r", 73)
		    		.attr("fill", "#07155B")
		    	circletxt2.transition(d3.transition().duration(500))
		    		.attr("x", xcenter - (centergap * 6) - 60)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    		.text("Citi Credit Cards")
		    	circletxt2_1.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    	circle3.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 90)
		    		.attr("r", 27)
		    		.attr("fill", "#A820F5")
		    	circletxt3.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + 40)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    		.text("Cards Services")
	    		circletxt3_1.transition(d3.transition().duration(500))
		    		.attr("font-size", 0)
		    	circle4.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - (centergap * 4) - 40)
		    		.attr("r", 38)
		    		.attr("fill", "#07155B")
		    	circletxt4.transition(d3.transition().duration(500))
		    		.attr("x", xcenter - (centergap * 4) - 95)
		    		.attr("y", ycenter + 120)
		    		.attr("font-size", "1rem")
		    	circle5.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter - (centergap * 2) - 70)
		    		.attr("r", 80)
		    		.attr("fill", "#07155B")
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
		    } 

		    if (scrollTop < 1550 && scrollTop > 1100 && flag4 === "N") {
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
		    	circletxt2_1.transition(d3.transition().duration(500))
	    			.attr("x", xcenter - 78)
		    		.attr("y", ycenter + 20)
		    		.attr("font-size", "1rem")
		    		.text("1MM")
		    	circle3.transition(d3.transition().duration(500))
		    		.attr("cx", xcenter + 60)
		    		.attr("r", 70)
		    	circletxt3.transition(d3.transition().duration(500))
		    		.attr("x", xcenter + 35)
		    		.attr("y", ycenter)
		    		.text("Partners")
		    	circletxt3_1.transition(d3.transition().duration(500))
		    		.attr("font-size", "1rem")
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
		    } 

		    if (scrollTop > 10100 && flag5 == "Y") {
		    	flag5 = "N"
		    	scatInit = false;
		    	scatter(scatrows);
		    }

		    if (scrollTop < 10100 && flag5 == "N") {
		    	flag5 = "Y"
		    	scatInit = true;
		    	scatter(scatrows);
		    }

		    if (scrollTop > 13000 && flag6 == "Y") {
		    	flag6= "N"
		    	scat2Init = false;
		    	scat2ter(scat2rows);
		    }

		    if (scrollTop < 13000 && flag6 == "N") {
		    	flag6 = "Y"
		    	scat2Init = true;
		    	scat2ter(scat2rows);
		    }

		    if (scrollTop > 4200 && flag7 == "Y") {
		    	flag7 = "N"
		    	bar1Init = false;
		    	barAUpop(AUpop);
		    }

		    if (scrollTop < 4200 && flag7 == "N") {
		    	flag7 = "Y"
		    	bar1Init = true;
		    	barAUpop(AUpop);
		    }

		    if (scrollTop > 5000 && flag8 == "Y") {
		    	flag8 = "N"
		    	bar2Init = false;
/*		    	AUmap1.transition(d3.transition().duration(5000))
		    		.attr("opacity", 0.7)
	    		AUmap2.transition(d3.transition().duration(1000))
		    		.attr("opacity", 0)
*/		    	barCitiShare(CitiShare);
		    }

		    if (scrollTop < 5000 && flag8 == "N") {
		    	flag8 = "Y"
		    	bar2Init = true;
/*		    	AUmap1.transition(d3.transition().duration(1000))
		    		.attr("opacity", 0)
	    		AUmap2.transition(d3.transition().duration(5000))
		    		.attr("opacity", 0.7)
*/		    	barCitiShare(CitiShare);
		    }

		    if (scrollTop > 5800 && flag9 == "Y") {
		    	flag9 = "N";
		    	bar1Init = true;
		    	barAUpop(AUpop);
		    	bar2Init = true;
		    	barCitiShare(CitiShare);
		    	AUMosaicInit = false;
		    	barAUMosaic(AUMosaic);
		    }

		    if (scrollTop < 5800 && flag9 == "N") {
		    	flag9 = "Y"
		    	AUMosaicInit = true;
		    	barAUMosaic(AUMosaic);
				bar1Init = false;
		    	barAUpop(AUpop);
		    	bar2Init = false;
		    	barCitiShare(CitiShare);
		    }

		    if (scrollTop > 6600 && flag10 == "Y") {
		    	flag10 = "N";
		    	CitiMosaicInit = false;
		    	barCitiMosaic(CitiMosaic);
		    }

		    if (scrollTop < 6600 && flag10 == "N") {
		    	flag10 = "Y"
		    	CitiMosaicInit = true;
		    	barCitiMosaic(CitiMosaic);
		    }

		    if (scrollTop > 15100 && flag15 == "Y") {
		    	flag15 = "N";
		    	img0.transition(d3.transition().duration(200))
		    		.attr("x", (ppwholewidth / 2) - 800)
					.attr("y", (ppheight / 2) - 300)
		    		.attr("width", 250)
					.attr("height", 350)
		    }

		    if (scrollTop < 15100 && flag15 == "N") {
		    	flag15 = "Y"
		    	img0.transition(d3.transition().duration(500))
		    		.attr("x", (ppwholewidth / 2) - 180)
					.attr("y", (ppheight / 2) - 300)
					.attr("width", 350)
					.attr("height", 450)
		    }

		    if (scrollTop > 15200 && flag11 == "Y") {
		    	flag11 = "N";
		    	img1.transition(d3.transition().duration(500))
		    		.attr("opacity", 1)
		    }

		    if (scrollTop < 15200 && flag11 == "N") {
		    	flag11 = "Y"
		    	img1.transition(d3.transition().duration(500))
		    		.attr("opacity", 0)
		    }

		    if (scrollTop > 15500 && flag12 == "Y") {
		    	flag12 = "N";
		    	img2.transition(d3.transition().duration(500))
		    		.attr("opacity", 1)
		    }

		    if (scrollTop < 15500 && flag12 == "N") {
		    	flag12 = "Y"
		    	img2.transition(d3.transition().duration(500))
		    		.attr("opacity", 0)
		    }

		    if (scrollTop > 15800 && flag13 == "Y") {
		    	flag13 = "N";
		    	img3.transition(d3.transition().duration(500))
		    		.attr("opacity", 1)
		    }

		    if (scrollTop < 15800 && flag13 == "N") {
		    	flag13 = "Y"
		    	img3.transition(d3.transition().duration(500))
		    		.attr("opacity", 0)
		    }

		    if (scrollTop > 16100 && flag14 == "Y") {
		    	flag14 = "N";
		    	img4.transition(d3.transition().duration(500))
		    		.attr("opacity", 1)
		    }

		    if (scrollTop < 16100 && flag14 == "N") {
		    	flag14 = "Y"
		    	img4.transition(d3.transition().duration(500))
		    		.attr("opacity", 0)
		    }

		    if (scrollTop > 16400 && flag16 == "Y") {
		    	flag16 = "N";
		    	img5.transition(d3.transition().duration(500))
		    		.attr("opacity", 1)
		    }

		    if (scrollTop < 16400 && flag16 == "N") {
		    	flag16 = "Y"
		    	img5.transition(d3.transition().duration(500))
		    		.attr("opacity", 0)
		    }

		    if (scrollTop > 16700 && flag17 == "Y") {
		    	flag17 = "N";
		    	img6.transition(d3.transition().duration(500))
		    		.attr("opacity", 1)
		    }

		    if (scrollTop < 16700 && flag17 == "N") {
		    	flag17 = "Y"
		    	img6.transition(d3.transition().duration(500))
		    		.attr("opacity", 0)
		    }

		    if (scrollTop > 17000 && flag18 == "Y") {
		    	flag18 = "N";
		    	img7.transition(d3.transition().duration(500))
		    		.attr("opacity", 1)
		    }

		    if (scrollTop < 17000 && flag18 == "N") {
		    	flag18 = "Y"
		    	img7.transition(d3.transition().duration(500))
		    		.attr("opacity", 0)
		    }

		    // Render animation
	      	scrollvalue.text(scrollTop)
	      	window.requestAnimationFrame(render)
	    }
	    window.requestAnimationFrame(render);