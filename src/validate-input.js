
;(function() {
    /*global Vue, define */
    "use strict";


    var install = function(Vue, options) {



    	Vue.directive('validate',{

			priority: 801,



			bind: function() {


				console.log('I\'m bound');

			}

    	});



    }



	module.exports = install;
    

})();