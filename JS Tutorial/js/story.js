function enterFoyer() {
    var description = "";
    if (enterFoyer.init == undefined) {
        enterFoyer.init = 1;
        description =
            "<p>Hurrying through the rainswept November night, you are glad " +
            "to see the bright lights of the Opera House. It is surprising " +
            "that there are not more people about but, hey, what do you " +
            "expect in a cheap demo game...?" +
            "</p>" +
            "<p style='text-align:center'>Cloak of Darkness<br>"+
            "A basic JS demonstration."
        "</p>";
    }
    description = description +
        "<p>You are standing in a spacious hall, splendidly decorated in red " +
        "and gold, with glittering chandeliers overhead. There is an " +
        "entrance from the " +
        "<a href='#' onclick='enterStreet()'>street</a>, " +
        "and there are doorways " +
        "<a href='#' onclick='enterSouth()'>south</a> " +
        "and " +
        "<a href='#' onclick='enterHall()'>west</a>." +
        "</p>";

    var roomPara = document.getElementById("RoomDesc");
    roomPara.innerHTML = description;
}

function enterStreet() {
    console.log('enterStreet');
    var detail = "<p>Why are you leaving so fast? You just got here.</p>";
    var roomPara = document.getElementById("RoomDesc");
    roomPara.innerHTML = roomPara.innerHTML + detail;
}

function enterSouth() {
    console.log('enterSouth');
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

    var roomPara = document.getElementById("RoomDesc");
    roomPara.innerHTML = description;
}

function enterDark() {
    var detail = "<p>Blundering around in the dark isn't a good idea!</p>";
    var roomPara = document.getElementById("RoomDesc");
    roomPara.innerHTML = roomPara.innerHTML + detail;
}

function enterHall() {
    console.log("enterHall");
    var description =
        "<p>The walls of this small room were clearly once lined " +
        "with hooks, though now only " +
        hookMenuCreate() + " " +
        "remains. The exit is a door to the " +
        "<a href='#' onclick='enterFoyer()'>east</a>." +
        "</p>";

    var roomPara = document.getElementById("RoomDesc");
    roomPara.innerHTML = description;
}

function hookMenuCreate() {
    console.log("hookMenuCreate");
    var menu =
        "<span class='popup'>" +
            "<a href='#' onclick='hookMenuDisplay()'>" +
                "one" +
            "</a>" +
            "<span id='hookMenuId' class='popuptext'>" +
                "<a onclick='hookExamine()'>" +
                "Examine" +
                "</a>" +
            "</span>" +
        "</span>"
    return(menu);
}

function hookMenuDisplay() {
    console.log('hookMenuDisplay');
    var popup = document.getElementById('hookMenuId');
    popup.style.visibility = 'visible';
}

function hookExamine() {
    console.log('hookExamine');

    var detail =
        "<p>It's just a small brass hook with a " +
        cloak.menuCreate() + " " +
        "hanging on it." +
        "</p>";

    var popup = document.getElementById('hookMenuId');
    popup.style.visibility = 'hidden';
    var roomPara = document.getElementById('RoomDesc');
    roomPara.innerHTML = roomPara.innerHTML + detail;
}

var cloak = {
    location:'hook',

    menuCreate: function () {
        console.log('cloak.menuCreate');
        console.log('   location = ' + this.location);
        var menu =
            "<span id='cloakLinkId' class='popup'>" +
                "<a href='#' onclick='cloak.menuDisplay()'>" +
                    "cloak" +
                "</a>" +
                "<span id='cloakMenuId' class='popuptext'>" +
                    "<u onclick='cloak.examine()'>" +
                        "Examine" +
                    "</u>";
        if (this.location == 'hook') {
            menu = menu +
                    "<br>" +
                    "<u onclick='cloak.get()'>" +
                        "Get" +
                    "</u>" +
                "</span>" +
            "</span>";
        }
        else if (this.location == 'inventory') {
            menu = menu +
                    "<br>" +
                    "<u onclick='cloak.drop()'>" +
                    "Drop" +
                    "</u>" +
                    "<br>" +
                    "<u onclick='cloak.putOn()'>" +
                        "Put On" +
                    "</u>" +
                "</span>" +
            "</span>";
        }
        else if (this.location == 'body'){
            menu = menu +
                    "<br>" +
                    "<u onclick='cloak.takeOff()'>" +
                        "Disrobe" +
                    "</u>" +
                "</span>" +
            "</span>";
        }
        else {
            console.log('ERROR! Invalid location');
        }

        return(menu)
    },

    menuDisplay: function () {
        console.log('cloak.menuDisplay');
        var popup = document.getElementById('cloakMenuId');
        popup.style.visibility = 'visible';
    },

    examine: function () {
        console.log('cloak.examine');
        var detail =
            "<p>A handsome cloak, of velvet trimmed with " +
            "satin, and slightly spattered with raindrops. " +
            "Its blackness is so deep that it almost seems " +
            "to suck light from the room." +
            "</p>";
        var popup = document.getElementById('cloakMenuId');
        popup.style.visibility = 'hidden';
        var roomPara = document.getElementById('RoomDesc');
        roomPara.innerHTML = roomPara.innerHTML + detail;
    },

    get: function () {
        console.log('cloak.get');
        // Change the cloak location
        this.location = 'inventory';

        var popup = document.getElementById('cloakMenuId');
        popup.style.visibility = 'hidden';

        popup = document.getElementById('cloakLinkId');
        popup.innerHTML = cloak.menuCreate();

        var detail = "<p>You take the cloak from the hook with you.</p>"
        var roomPara = document.getElementById('RoomDesc');
        roomPara.innerHTML = roomPara.innerHTML + detail;
    },

    drop: function () {
        console.log('cloak.drop');

        var popup = document.getElementById('cloakMenuId');
        popup.style.visibility = 'hidden';

        var detail =
            "<p>This isn't the best place to leave a smart cloak lying around.</p>"
        var roomPara = document.getElementById('RoomDesc');
        roomPara.innerHTML = roomPara.innerHTML + detail;
    },

    putOn: function () {
        console.log('cloak.putOn');
        this.location = 'body';

        var popup = document.getElementById('cloakLinkId');
        popup.innerHTML = cloak.menuCreate();

        var detail = "<p>You put on the cloak. It dresses fine on you!.</p>"
        var roomPara = document.getElementById('RoomDesc');
        roomPara.innerHTML = roomPara.innerHTML + detail;

        var pickedUp = true;
        return pickedUp;
    },

    takeOff: function () {
        console.log('cloak.takeOff');
        this.location = 'inventory';

        var popup = document.getElementById('cloakLinkId');
        popup.innerHTML = cloak.menuCreate();

        var detail =
            "<p>The cloak slides off and into the crook of your arm.</p>"
        var roomPara = document.getElementById('RoomDesc');
        roomPara.innerHTML = roomPara.innerHTML + detail;
    }
};