$(document).ready(function(){
	$("#infoaboutme").hide();
	
	$("#aboutme").click(function(){
		$("#infoaboutme").fadeToggle(500);
	});

	$("#Welcome").mouseenter(function(){
		$(this).css("font-size", "3em");
	});

	$("#Welcome").mouseleave(function(){
		$(this).css("font-size", "2em");
	});
});