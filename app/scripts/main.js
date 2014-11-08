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

		$('.tile').click(function(event) {
			console.log('blo');
			myGame.unhideTile(event.target.id);
			myGame.counterClick++;
			myGame.nbTileDisplayed++;
		});

	});
});