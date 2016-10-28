$(document).ready(function(){
	$("p").hide();
	$("#favoriteimg").hide();
	
	$("h3").click(function(){
		$(this).next().fadeToggle(500);
	});

	$('#test').click(function() {
		$("strong").css("color", "white");
	});

	// JQ 02  mouse effects 

	$("h1").mouseenter(function() {
		$(this).css("font-size", "3em");
		$(this).mouseleave(function() {
			$(this).css("font-size", "1em");
			//$(this).unbind(); Makes the event happen once only
		})
	});

	$("h1").mousedown(function() {
		$(this).css("background-color", "black");
		$(this).mouseup(function() {
			$(this).css("background-color", "blue");
			//$(this).unbind();
		})
	})
});

