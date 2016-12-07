(function($) {
	var isRunning = false, steps = [];
	var start = function(el){
		isRunning = true;
	};

	$.fn.copter = function(options){
		var settings = $.extend({

		}, options);

		if(!isRunning)
			start(this);
	};
}(jQuery));