/* HALL */
function enterHall() {
	console.log("enterHall");
	// Save the HTML describing the room in a variable.
	// Notice that the decription includes a link to the hook.
	description =
		"<p>The walls of this small room were clearly once lined " +
			"with hooks, though now only " +
			hookMenuCreate() + " " +
			"remains. The exit is a door to the " +
			"<a href='#' onclick='enterFoyer()'>east</a>." +
		"</p>";
	
	// Make the browser display the HTML
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;
	
	document.getElementById("RoomPic").src="img/cloak.jpg";
}

/* HOOK MENU - CREATE*/
function hookMenuCreate() {
	console.log("hookMenuCreate");
	// Save the HTML describing the hook and it's menu in a variable
	menu =
		"<span class='popup'>" +
			"<a href='#' onclick='hookMenuDisplay()'>" +
				"one" +
			"</a>" +
			"<span id='hookMenuId' class='popuptext'>" +
				"<a onclick='hookExamine()'>" +
					"Examine" +
				"</a>" +
			"</span>" +
		"</span>";
	// Send the HTML back to the caller.
	return(menu);
}

/* HOOK MENU - DISPLAY */
function hookMenuDisplay() {
	console.log('hookMenuDisplay');
	// Make the hook menu visible
	popup = document.getElementById('hookMenuId');
	popup.style.visibility = 'visible';
}

function hookExamine() {
	console.log('hookExamine');
	// Check if the cloak is on the hook
	if (cloak.location == 'hook') {
		// Store the HTML to describe the hook when the cloak is on it
		detail =
			"<p>It's just a small brass hook with a " +
				cloak.menuCreate() + " " +
				"hanging on it." +
			"</p>";
	}	
	else {
		// Store the HTML to describe the hook when the cloak is not on it
		detail =
			"<p>It's just a small brass hook screwed to the wall.</p>";
	}
	
	// Hide the hook popup menu
	popup = document.getElementById('hookMenuId');
	popup.style.visibility = 'hidden';
	
	// Make the browser display the HTML
	roomPara = document.getElementById('RoomDesc');
	roomPara.innerHTML = roomPara.innerHTML + detail;
}