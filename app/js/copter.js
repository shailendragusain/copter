(function($) {
	var log = function(msg, type){
		switch(type){
			case "d":
				console.debug(msg);
				break;
			case "e":
				console.error(msg);
				break;
			default:
				console.log(msg);
				break;
		}
	}
	$.fn.copter = function(options) {
		var settings = $.extend({
			backgroundColor: '#fefefe',
			placeholder: 'Search'
		}, options);

		function build(sel){
			sel = sel || $("<select>");
			
			var copter, select, dropDown, searchBox;
			select = $(sel);
			copter = $("<div/>");
			
			dropDown = $("<ul/>");
			
			//apply settings
			copter.addClass("copter")
			dropDown.addClass("copter-dropdown");
			dropDown.css("background-color", settings.backgroundColor);
			

			searchBox = $("<input type='text' />");
			searchBox.attr("placeholder", settings.placeholder);

			// copter.append(searchBox);

			select.find("option").each(function(i2, e2) {
				dropDown.append("<li>" + e2.value + "</li>");
			});

			select.wrap(copter);
			searchBox.insertAfter(select);
			dropDown.insertAfter(select);

			bindEventHandlers(searchBox);
		}

		function bindEventHandlers(sel) {
			sel.on("focus",function(e) {
				var cop = $(this).parent(".copter");
				cop && cop.addClass("open");
			});

			sel.on("blur",function(e) {
				var cop = $(this).parent(".copter");
				cop && cop.removeClass("open");
			});
		}

		function unbindEventHandlers(sel) {
			sel.off("focus");

			sel.off("blur");
		}
 
	    return this.each(function(i, e) {
	    	build(e);
	    });
	};
}(jQuery));