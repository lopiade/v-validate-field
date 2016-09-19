
const VueValidateField = function(Vue, options) {


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


export default VueValidateField;