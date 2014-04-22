$(document).ready(function() {

	/*if($(window).width() <= 585){

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
	};*/

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

});