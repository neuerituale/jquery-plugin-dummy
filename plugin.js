/**
 * Pluginname jQuery-Plugin
 * author Julian Winkel <winkel@neuerituale.com>
 */

(function($, window, document, undefined) {
	'use strict';

	/**
	 * Pluginname
	 */
	$.Pluginname = function(el, options) {

		var self = this;
		var helper = {};

		var defaults = {
			option1: null,
			option2: null,
			option3: null,

			// events
			create: function(){},
			open: function(){}

		};

		self.settings = $.extend({}, defaults, options);
		self.$context = $(el);

		/**
		 * private Function
		 * @returns {*}
		 */
		var _private = function(){
			return self;
		};

		/**
		 * public Function
		 * @returns {*}
		 */
		self.public = function(){
			return self;
		};

		/**
		 * Init the Program
		 */
		self.init = function() {

			// event:create
			options.create.call(self);

			return self;
		};


		self.init();
	};

	/**
	 * Extend jQuery
	 * @param options
	 * @returns {*}
	 */
	$.fn.pluginname = function(options) {

		// each element
		return this.each(function() {
			if(undefined == $(this).data('pluginname')) {
				$(this).data('pluginname', new $.Pluginname(this, options));
			}
		});

	};

}(jQuery, window, window.document));