/*
 * @author Waruna Oshan Wisumperuma
 * @contact warunaoshan@gmail.com
 */

requirejs.config({
	baseUrl : 'libs',
	paths : {
		jquery : 'jquery-2.1.0.min',
		underscore : 'underscore-min',
		backbone : 'backbone-min',
		main : '../main'
	},
	shim : {
		backbone : {
			deps : ["underscore", "jquery"],
			exports : "Backbone"
		}
	}
});

requirejs(["main"]); 