'use strict';

var gameSession = gameSession || {};

(function(){
	gameSession.Game = function(options){
		var defaultOptions = {
			nbTile: 6,
			tile: [],
			inGameId: '#in-game',
			tileId: 'tile',
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
			$(_self.options.inGameId).append("<div class=\""+_self.options.tileId+"\"><img id=\""+_self.options.tileId+nbId+"\" src=\""+tileData[_self.selectedTile[nbId]].src+"\" alt=\""+tileData[_self.selectedTile[nbId]].name+"\" height=\"116\" width=\"116\"></div>");
		},
		toggleDisplay: function() {
			var _self = this;

			$(document).on('click', '.tile', function(e){
				if( !e ) e = window.event;
				e = e || window.event;
				var targetedImg = e.srcElement || e.target;
				$("#"+targetedImg.id).fadeTo("slow", $("#"+targetedImg.id).css("opacity") == "1" ? "0" : "1");
				_self.counterClick++;
				_self.nbTileDisplayed++;
			});
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