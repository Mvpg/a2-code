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
    selected:0,
    speed:0
};

var Ogre = {
    x:50,
    y:50,
	health:0,
	armor:0,
	strength:0,
	speed:0,
	selected:0
};

var Hero = {
    x:50,
    y:50,
    health:0,
    armor:0,
    strength:0,
    intellect:0,
    speed:0,
    selected:0
};

var Warlock = {
    x:50,
    y:50,
    health:0,
    armor:0,
    intellect:0,
    selected:0,
    speed:0
};

var Mage = {
    x:50,
    y:50,
    health:0,
    armor:0,
    intellect:0,
    selected:0,
    speed:0
};

var TheWitch = {
    x:50,
    y:50,
    health:0,
    armor:0,
    intellect:0,
	selected:0,
    speed:0
};

var Minions = {
    x:50,
    y:50,
    health:0,
    armor:0,
    strength:0,
    selected:0,
    speed:0
};

var spells = {
	HolyStrike: function(entity) {

    },

	FireBall: function(entity) {

	},

	CursedFire: function(entity) {

	},

	GenericAttack: function (entity) {

    },

	IceBolt: function (entity) {

    },

	IceBlock: function (entity) {

    },

	MeteorStrike: function (entity) {

    },

	HolyHeal: function (entity) {

    },

	AOEHeal: function (entity) {

    },

	BattleRoar: function (entity) {

    },

	WitchHeal: function (entity) {

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

};*/

function actions(entity){
	if(entity == Hero){
		if(KeyForSpell){
			spells.GenericAttack(entity);
		}
		else if (KeyForSpell){
            spells.AOEHeal(entity);
		}
		else if (KeyForSpell){
            spells.HolyStrike(entity);
		}
		else if (KeyForSpell){
			spells.HolyHeal(entity);
		}
		else if (KeyForSpell){
			spells.BattleRoar(entity);
		}
		else{
			alert("That's not a spell available for Character Hero");
		}
	}
    else if(entity == Mage){
        if(KeyForSpell){
            spells.GenericAttack(entity);
        }
        else if (KeyForSpell){
            spells.IceBlock(entity);
        }
        else if (KeyForSpell){
            spells.IceBolt(entity);
        }
        else if (KeyForSpell){
            spells.FireBall(entity);
        }
        else if (KeyForSpell){
            spells.MeteorStrike(entity);
        }
        else {
            alert("That's not a spell available for Character Mage");
		}
	}
}

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