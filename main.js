$(document).ready(function(){
	$("#infoaboutme, #infoaboutme1, #infoaboutme2").hide();
	
	$("#aboutme").click(function(){
		$("#infoaboutme, #infoaboutme1, #infoaboutme2").fadeToggle(500);
	});
});