'use strict';
var myGame = new gameSession.Game({
	nbTile: 20,
	tile: [],
	inGameId: '#in-game',
	tileId: '#tiles',
});
jQuery(document).ready(function($) {
	$('#load-game').click(function(event) {
		myGame.init();
	});
	//Event never triggered, why ?
	$('.tile').click(function(event) {
		console.log('testClickTile');
		myGame.unhideTile(event.target.id);
		myGame.counterClick++;
		myGame.nbTileDisplayed++;
	});
});