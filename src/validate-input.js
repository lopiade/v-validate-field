;(function(){

    "use strict";

	var install = function(Vue, options) {


	    Vue.directive('validate-field', {

	        
	        priority: 801,

			model: null,


	        bind: function() {


	            this.model = this.el.getAttribute('v-model');

	        },


	        update: function (errors) {

		        if (!errors) return;


		        let error = errors[this.model];

		        if (typeof error != 'undefined') {


		            this.el.classList.add('has-error');

		        } else {


		            this.el.classList.remove('has-error');
		        }
		    },

	    });



	}

    if(typeof exports === "object") 
    	module.exports = install;
    else if(typeof define === "function" && define.amd) 
    	define([], function() { return install; });
    else if(window.Vue) 
    	Vue.use(install);

})();	
