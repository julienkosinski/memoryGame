'use strict';
var myGame = new gameSession.Game({
	nbTile: 20,
	tile: [],
	inGameId: '#in-game',
	tileId: 'tile',
});
jQuery(document).ready(function($) {
	$('#load-game').click(function(event) {
		myGame.init();
		//Not executed, why ?
		myGame.toggleDisplay();
	});

	$(document).on('click', '.tile', function(e){
		if( !e ) e = window.event;
		e = e || window.event;
		var targetedImg = e.srcElement || e.target;
		//I've chosen to manage an object of active items instead of adding active class in the HTML. That's maybe a bit stupid but it came out of my mind like that for now. If I can't debug it, I'll switch to the other method.
		if(myGame.activeElements.length < 2) {
			myGame.activeElements.push({
				id: targetedImg.id,
				src: targetedImg.src
			});
			//Can't find working expression without condition statment...
			$("#"+targetedImg.id).fadeTo("slow", $("#"+targetedImg.id).css("opacity") == "0" ? "1" : "1");
		}
		//Does not work for the time being but here is my try...
		else {
			if( _.each(myGame.activeElements.src, function (val, i) {
				val == myGame.activeElements.src[i-1];}) && console.log(val))
			{
				console.log("blo");
				myGame.tilesFound+=2;
				if (myGame.tilesFound == nbTile) {
					alert("You win");
					myGame.resetGame();
				}
			}
			else {
				_.each(myGame.activeElements.id, function (val) {
					console.log("bla");
					$("#"+myGame.activeElements.id[0], "#"+myGame.activeElements.id[1]).fadeTo("slow", $("#"+myGame.activeElements.id[0], "#"+myGame.activeElements.id[1]).css("opacity") == "1" ? "0" : "0");
					myGame.activeElements = [];
				})
			}
		}
		myGame.counterClick++;
	});
});