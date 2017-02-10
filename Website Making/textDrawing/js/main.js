var ctx = document.getElementById('ctx').getContext('2d');
var property = document.getElementById('ctx');

property.setAttribute('width','800');
property.setAttribute('height', '600');

var RedBox = {
    x:50,
    y:50,
    color:'red',
    health:0,
    armor:0,
    strength:0,
    intellect:0,
    speed:0
};

var Ogre = {
    x:50,
    y:50,
	health:0,
	armor:0,
	strength:0,
	speed:0
};

var Hero = {
    x:50,
    y:50,
    health:0,
    armor:0,
    strength:0,
    intellect:0,
    speed:0
};

var Warlock = {
    x:50,
    y:50,
    health:0,
    armor:0,
    intellect:0,
    speed:0
};

var Mage = {
    x:50,
    y:50,
    health:0,
    armor:0,
    intellect:0,
    speed:0
};

var TheWitch = {
    x:50,
    y:50,
    health:0,
    armor:0,
    intellect:0,
    speed:0
};

var Minions = {
    x:50,
    y:50,
    health:0,
    armor:0,
    strength:0,
    speed:0
};

var attack = {
	HolyStrike: function() {

    },

	FireBall: function() {

	},

	CursedFire: function() {

	},

	GenericAttack: function () {

    },

	IceBolt: function () {

    },

	IceBlock: function () {

    },

	MeteorStrike: function () {

    },

	HolyHeal: function () {

    },

	AOEHeal: function () {

    },

	BattleRoar: function () {

    },

	WitchHeal: function () {

    }
};

var draw = {
	RedBox: function (entity) {
        ctx.fillStyle = entity.color;
        ctx.fillRect(entity.x, entity.y, 50, 50);
    },

	allEntities: function (entity) {
		
    }
}

/*
function healthEntity(){

};
function drawHud(){

};
function drawSpells(){

};

function spells(entity){
	if(entity == Hero){
		if(KeyForSpell){
			attack.GenericAttack();
		}
	}
}*/

function gameStart() {
    draw.RedBox(RedBox);
    draw.allEntities(Minions);
    draw.allEntities(TheWitch);
    draw.allEntities(Mage);
    draw.allEntities(Warlock);
    draw.allEntities(Hero);
    draw.allEntities(Ogre);
}

gameStart();