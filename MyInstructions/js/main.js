$(document).ready(function(){
    $("h2").click(function(){
    	$("h3").animate({
    		"font-size": "2em"
    	}, 1000, function() {
    		$("h2,h3,head").fadeOut("slow");
    		$("body-header").animate({
    			"font-size": "4em"
    		});
    	});
    })

	$("#hi").click(function () {
		$("#hi").append('<img src="images/Finishedsnowboard.png" alt="hi">');
		$("#hi").append('<img src="images/snowboard_sequence_5.png" alt="hi">');
		$("#hi").append('<img src="images/snowboard_sequence_4.png" alt="hi">');
		$("#hi").append('<img src="images/snowboard_sequence_3.png" alt="hi">');
		$("#hi").append('<img src="images/snowboard_sequence_2.png" alt="hi">');
		$("#hi").append('<div id="hi">');
	});
});