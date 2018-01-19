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
		var values = jQuery("#registration-form").find("input,select");
		
		var json = {};
		
		var valid = true;
		for(var i=0;i<values.length;i++)
		{
			var input = jQuery(values[i]);
			
			var value = input.val().trim();

			if(value == "" || value == undefined)
			{
				input.addClass("is-invalid");
				valid = false;
			}else
			{
				input.removeClass("is-invalid");
			}
		}
		if(valid == false)
		{
			alert("Introduceti toate campurile obligatorii !");
			return false;
		}

		json.name = jQuery("#name").val();
		json.email = jQuery("#email").val();
		json.phone = jQuery("#phone").val();
		json.registration = jQuery("#aircraft-registration").val();
		json.speed = jQuery("#aircraft-speed").val();
		json.airworthiness = jQuery("#aircraft-licence").val();
		json.medical = jQuery("#pilot-medical").val();
		json.license = jQuery("#pilot-licence").val();
		json.assurance = jQuery("#aircraft-assurance").val();
		json.people = jQuery("#aircraft-people").val();
		json.rooms = jQuery("#rooms").val();

		var database = firebase.database();

		database.ref('subscriptions/' + json.registration).set(json);

		alert("Inscrierea ta a fost facuta cu success!");
		
		return false;
	});



});
