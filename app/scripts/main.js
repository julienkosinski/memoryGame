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
	});
	$(document).on('click', '.tile', function(event){
		//Selector should work and I've test .toggle and .show but nothing happend in the css...
		console.log($("#"+event.target.id+" > img").css("display", "initial !important"));
		//myGame.unhideTile(event.target.id);
		myGame.counterClick++;
		myGame.nbTileDisplayed++;
	});
});