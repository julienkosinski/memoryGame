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
		activeElements: [],
		tilesFound: 0,

		init: function() {
			var _self = this;
			if(!_self.buttonClicked) {
				_self.selectedTile = _self.selectTile();
				for (var i=0; i<_self.options.nbTile; i++) {
					_self.createTile(i);
				}
				_self.buttonClicked = true;
				
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
					if(_.each(myGame.activeElements, function (val, i) {

					console.log("i : "+i);
					console.log("myGame.activeElements[i].src : "+myGame.activeElements[i].src);
						val.src == myGame.activeElements[i].src;}))
					{
						console.log("blo");
						myGame.tilesFound+=2;
						if (myGame.tilesFound == nbTile) {
							alert("You win");
							myGame.resetGame();
						}
					}
					else {
						_.each(myGame.activeElements, function () {
							console.log("bla");
							$("#"+myGame.activeElements.id[0], "#"+myGame.activeElements.id[1]).fadeTo("slow", $("#"+myGame.activeElements.id[0], "#"+myGame.activeElements.id[1]).css("opacity") == "1" ? "0" : "0");
							myGame.activeElements = [];
						})
					}
				}
				myGame.counterClick++;
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