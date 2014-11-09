'use strict';

var gameSession = gameSession || {};

(function(){
	gameSession.Game = function(options){
		var defaultOptions = {
			nbTile: 6,
			tile: [],
			inGameId: '#in-game',
			tileId: '#tiles',
		}
		this.options = options || defaultOptions;
		return this;
	};
	
	gameSession.Game.prototype = {
		
		counterClick: 0,
		buttonClicked: false,
		nbTileDisplayed: 0,
		clickedTilesId: [],
		selectedTile: [],

		init: function() {
			var _self = this;
			if(!_self.buttonClicked) {
				_self.selectedTile = _self.selectTile();
				for (var i=0; i<=_self.options.nbTile; i++) {
					_self.createTile(i);
				}
				//It does not pass here, why ?
				_self.buttonClicked = true;
				console.log(_self.buttonClicked);	
				
			}
			else {
				//Will be implemented later
				//_self.resetGame();
			}
		},
		createTile: function(nbId) {
			var _self = this;
			$(_self.options.inGameId).append("<div class=\"tile\" id=\""+_self.options.tileId+nbId+"\"><img src=\""+tileData[_self.selectedTile[nbId]].src+"\" alt=\""+tileData[_self.selectedTile[nbId]].name+"\" height=\"116\" width=\"116\"></div>");
		},
		unhideTile: function(id) {
			var _self = this;
			var testMatchedPair = _self.testMatchedPair();

			$(id).show('fast');
		},
		selectTile: function() {
			var _self = this;
			var selectedImgsNbId = [];
			var rand;
			var prevRand;
			for (var i=1; i<=_self.options.nbTile/2; i++){
				while(rand == prevRand) {
					rand = _.random(0,5);
				}
				for(var j=0; j<=1; j++) {
					selectedImgsNbId.push(rand);
				}
				prevRand = rand;
			}
			selectedImgsNbId = _.shuffle(selectedImgsNbId);
			return selectedImgsNbId;
		},
		testMatchedPair: function(){
			//Will be implemented later
			/*if (nbTileDisplayed == 2) {

			};
			return matched;*/
		},
		resetGame: function(){

		}
    }
})();