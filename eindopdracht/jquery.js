$(document).ready(function() {

	/*							Aside klikken 			*/

		$("#collapse-one").click(function() {
				if($("#result-one").is(":hidden")){
					$("#result-one").fadeIn();
				} else {
					$("#result-one").fadeOut();
				}
			});

		$("#collapse-two").click(function() {
			if($("#result-two").is(":hidden")){
				$("#result-two").fadeIn();
			} else {
				$("#result-two").fadeOut();
			}
		});

		$("#collapse-three").click(function() {
			if($(".result-three").is(":hidden")){
				$(".result-three").fadeIn();
			} else {
				$(".result-three").fadeOut();
			}
		});

		$("#collapse-four").click(function() {
			if($(".result-four").is(":hidden")){
				$(".result-four").fadeIn();
			} else {
				$(".result-four").fadeOut();
			}
		});

	/*						Einde aside	klikken 			*/
	/*						Aside verborgen					*/

	if($(window).width() >= 970){
  	$("aside").hide(0);
  };

	$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 300) {
        $("aside").fadeTo(1000,1);
    }
});
	/*						Einde aside verborgen			*/
	/*						Verbergen forms					*/


	if($(window).width() >= 585){

	$("#submit").hide();

		$("#options").change(function() {
	        if ($(this).val() != "company") {
	            $("#showform_one").fadeTo(500, 1);
	            $("#submit").fadeTo(500, 1);
	            $("#showform_two").fadeTo(500, 0);
	        }
	    });

	    $("#options").change(function() {
	        if ($(this).val() != "project") {
	            $("#showform_one").fadeTo(500, 0);
	            $("#showform_two").fadeTo(500, 1);
	            $("#submit").fadeTo(500, 1);
	        }
	    });
	};

/*						Einde verbergen forms				*/

});