/**
 * @preserve Copyright 2011 Syd Lawrence ( www.sydlawrence.com ).
 * Version: 0.1
 *
 * Licensed under MIT and GPLv2.
 *
 * Usage: $('.box').shadow(options);
 *
 */




(function( $ ){


	$.fn.shadow = function(options) {  
		if (typeof options !== "object")
			options = {type:options};


		options = $.extend({}, $.fn.shadow.defaults, options);
		var els = this;
		
			
		els.addClass('jquery-shadow');
		els.addClass('jquery-shadow-'+options.type);	
	 
		       
		switch(options.type) {
			case 'lifted' :
				$.fn.shadow.lifted(this,options);
				break;
			case 'raised' :
				$.fn.shadow.raised(this,options);
				break;
			case 'sides' :
				$.fn.shadow.sides(this,options);
				break;
			case 'rotated' :
				$.fn.shadow.rotated(this,options);
				break;
		
		
		}
		$.fn.shadow.borderRadius(this,options.radius);		
						
		return this;
	
	};
	
	$.fn.shadow.lifted = function(els,options) {
	
	}
	
	$.fn.shadow.rotated = function(els,options) {
		els.css('-webkit-transform','rotate('+options.rotate+')')
			.css('-moz-transform','rotate('+options.rotate+')')
			.css('-ms-transform','rotate('+options.rotate+')')
			.css('-o-transform','rotate('+options.rotate+')')
			.css('transform','rotate('+options.rotate+')');
		
	}
	
	$.fn.shadow.raised = function(els,options) {
	}
	
	$.fn.shadow.sides = function(els,options) {
		els.addClass('jquery-shadow-sides-'+options.sides);
	}
	
	$.fn.shadow.borderRadius = function(els,radius) {
		els.css('-moz-border-radius',radius)
			.css('border-radius',radius);
	}

	$.fn.shadow.defaults = {
		type:'standard',
		radius:4,
		sides:'',
		rotate:'-3deg'
	};
		 	

})( jQuery );

