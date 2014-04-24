$(document).ready(function() {

	if($(window).width() <= 585){

		$("#collapse-one").click(function() {
			if($("#result-one").is(":hidden")){
				$("#result-one").slideDown(500);
				  );
			} else {
				$("#result-one").slideUp(500);
				  );
			}
		});

		$("#collapse-two").click(function() {
			if($("#result-two").is(":hidden")){
				$("#result-two").slideDown(500);
				  );
			} else {
				$("#result-two").slideUp(500);
				  );
			}
		});
	};

});