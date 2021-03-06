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
			dropDown.insertAfter(select);
			searchBox.insertAfter(select)

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

			sel.on("input", function(e) {
				var text = $(this).val();
				var copItem = $(this).parent(".copter").find(".copter-dropdown li");
				if(copItem){
					copItem.each(function(index, item) {
						$(item).addClass("hidden");
						if($(item).text().toString().toLowerCase().indexOf(text.toLowerCase()) >= 0){
							$(item).removeClass("hidden");
						}
					});
				}
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