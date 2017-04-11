/**
 * PluginName jQuery-Plugin
 * author Julian Winkel <winkel@neuerituale.com>
 */

(function($, window, document, undefined) {
	'use strict';

	/**
	 * main Function
	 * @param el
	 * @param pOptions
	 * @constructor
	 */
	function PluginName(el, pOptions) {

		var self = this;
		var helper = {};

		self.isInit = false;

		var options = {
			option1: null,
			option2: null,
			option3: null,

			// events
			create: function(){},
			open: function(){}

		};
		$.extend(true, options, pOptions);


		/**
		 * Generate Events
		 */
		var addEvents = function(){
			return self;
		};


		/**
		 * Init the Program
		 * @returns {boolean}
		 */
		var init = function() {
			if(self.isInit) {
				return false;
			}
			self.isInit = true;

			self.$el = $(el);

			addEvents();

			// event:create
			options.create.call(self);

			return self.isInit;
		};

		/**
		 * Run
		 */
		init();
	}

	/**
	 * Extend jQuery
	 * @param pOptions
	 * @returns {*}
	 */
	$.fn.PluginJQueryName = function(pOptions) {

		// each element
		return this.each(function() {
			if(this.PluginJQueryName == undefined) {
				this.PluginJQueryName = new PluginName(this, pOptions);
			}
		});

	};

}(jQuery, window, window.document));