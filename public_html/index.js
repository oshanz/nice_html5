/*
 * @author Waruna Oshan Wisumperuma
 * @contact warunaoshan@gmail.com
 */

(function() {
	requirejs.config({
		paths : {
			'jquery' : 'libs/jquery-2.1.0.min',
			'_' : 'libs/underscore-min',
			'backbone' : 'libs/backbone-min'
		},
		shim : {
			jquery : {
				exports : '$'
			},
			underscore : {
				exports : '_'
			},
			backbone : {
				deps : ["underscore", "jquery"],
				exports : "Backbone"
			}
		}
	});

	require(['jquery'], function() {
		$(document).ready(function() {
			alert('aasf');
		});
	});
})();
