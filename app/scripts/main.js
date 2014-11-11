'use strict';
var myGame = new gameSession.Game({
	nbTile: 6,
	tile: [],
	inGameId: '#in-game',
	tileId: 'tile',
});
jQuery(document).ready(function($) {
	$('#load-game').click(function(event) {
		myGame.init();
		myGame.toggleDisplay();
	});
});