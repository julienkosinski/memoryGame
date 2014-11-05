'use strict';

var Game = Game || {};

(function(){
	Game = function(option){
		var defaultOptions = {
			nbItem: 5,
			item: [],
			inGameId: '#game',
		}
		this.option = option || defaultOption;
		return this;
	};
	
	Game.prototype = {
		init: function() {
			var _self = this;
			for (i=0; i<=_self.option.nbItem; i++) {
				createItem(i);
			};
		},
		createItem: function(id) {
			var _self = this;

		},
		selectItem: function() {
			
		}
    }
})