/* SOUTH - BAR */
function enterSouth() {
	console.log('enterSouth');
	
	// The cloak must be worn to win
	if (cloak.location == 'body') {
		enterBar();
	}
	else {
		bar.enterDarkBar();
	}
}

/* BAR */
function enterBar() {
	console.log('enterBar');

	// Store description of bar area
	var description = 
		"The bar, much rougher than you'd have guessed after the " +
		"opulence of the " +
		"<a href='#' onclick='enterFoyer()'>foyer</a>, " +
		"is completely empty. There seems to be some sort of " +
		bar.menuCreate() +
		" scrawled in the dust on the floor.";

	// Make browser display description
	roomPara = document.getElementById('RoomDesc');
	roomPara.innerHTML = description;
	
	document.getElementById("RoomPic").src="img/bar.jpg";
}

/* DARK */
function enterDark() {
	console.log('enterDark');
	var detail = "<p>Blundering around in the dark isn't a good idea!</p>";
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = roomPara.innerHTML + detail;
	
	enterDark.init = 1;
}

var bar = {
	menuCreate: function(){
		menu = 
			"<span id='barLinkId' class='popup'>" +
				"<a href='#' onclick='bar.menuDisplay()'>" +
					"message" +
				"</a>" +
				"<span id='barMenuId' class='popuptext'>" +
					"<u onclick='bar.examine()'>" +
						"Read" +
					"</u>" +
				"</span>" +
			"</span>";
			
			return(menu)
	},
	
	menuDisplay: function() {
		console.log('barMenuId');
		// Make the hook menu visible
		popup = document.getElementById('barMenuId');
		popup.style.visibility = 'visible';
	},
	examine: function () {
		console.log('bar.examine');
		// Store HTML to describe the cloak in a variable
		
		var detail = '';
		if(enterDark.init == undefined){
			detail = 
				"<p>The message, neatly marked in the sawdust, reads...</p>" +
				"<p>*** You have won ***" +
				"</p>";
		}
		else {
			detail = 
				"<p>The message has been carelessly trampled, making it difficult to read. You can just distinguish the words...</p>" +
				"<p>*** You have lost ***</p>";
		}
			
		// Hide the cloak menu popup menu
		var popup = document.getElementById('barMenuId');
		popup.style.visibility = 'hidden';
		
		// Make the browser display the HTML
		var roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},
	
	/* DARK BAR */
	enterDarkBar: function() {
		console.log('enterDarkBar');
		var description =
			"<p>It's pitch black here. You can't see a thing. You can " +
				"see a dim light to the entrace of the " +
				"<a href='#' onclick='enterFoyer()'>foyer</a>." +
			"</p>" +
			"<p>You can try moving around to the " +
				"<a href='#' onclick='enterDark()'>northeast</a>, " +
				"<a href='#' onclick='enterDark()'>east</a>, " +
				"<a href='#' onclick='enterDark()'>southeast</a>, " +
				"<a href='#' onclick='enterDark()'>south</a>, " +
				"<a href='#' onclick='enterDark()'>southwest</a>, " +
				"<a href='#' onclick='enterDark()'>west</a> " +
				"or " +
				"<a href='#' onclick='enterDark()'>northwest</a>." +
			"</p>";

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = description;
		
		document.getElementById("RoomPic").src="img/darkSouth.png";
		
		this.location = 'dark';
	}
};