/*
 * @author Waruna Oshan Wisumperuma
 * @contact warunaoshan@gmail.com
 */

(function() {
	requirejs.config({
		paths : {
			'jquery' : 'libs/jquery-2.1.0.min',
			'_' : '/libs/underscore-min',
			'backbone' : '/libs/backbone-min'
		}
	});

	require(['jquery'], function($) {
		$(document).ready(function() {
			alert('aasf');
		});
	});
})();
