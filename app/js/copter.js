(function($) {
	var startAnimation = function(el){
		console.log("animate");
		console.log(el);
	};

	$.fn.copter = function(options){
		var settings = $.extend({
			
		}, options);

		if(!animating)
			startAnimation(this);
	};
}(jQuery));