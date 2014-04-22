$(document).ready(function() {

	if($(window).width() <= 585){

		$("#collapse-one").click(function() {
			if($("#result-one").is(":hidden")){
				$("#result-one").slideDown(500).animate(
				    { opacity: 1 },
				    { queue: false, duration: 'slow' }
				  );
			} else {
				$("#result-one").slideUp(500).animate(
				    { opacity: 0 },
				    { queue: false, duration: 'slow' }
				  );
			}
		});

		$("#collapse-two").click(function() {
			if($("#result-two").is(":hidden")){
				$("#result-two").slideDown(500).animate(
				    { opacity: 1 },
				    { queue: false, duration: 'slow' }
				  );
			} else {
				$("#result-two").slideUp(500).animate(
				    { opacity: 0 },
				    { queue: false, duration: 'slow' }
				  );
			}
		});
	};

});