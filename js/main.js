jQuery(document).ready(function(){
	jQuery("#page-top").vegas({
	    slides: [
	        { src: "../assets/slider/slide_1.jpg" },
	        { src: "../assets/slider/slide_2.jpg" },
	        { src: "../assets/slider/slide_3.jpg" },
	       	{ src: "../assets/slider/slide_4.jpg" }
	    ],
	    overlay: false,
	    delay: 10000,
	    animation: "kenburns"
	});

	jQuery("#btn-register").click(function(){
		alert("In Curand !");
		return false;
	})
});
