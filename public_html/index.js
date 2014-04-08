/*
 * @author Waruna Oshan Wisumperuma
 * @contact warunaoshan@gmail.com
 */

define(["jquery"], function() {
	$(function() {
		$('#1').html('wow');
	});
	setTimeout(underscore, 2000);
});

function underscore() {
	require(["underscore"], function() {
		_.each([1, 2], alert);
	});
	setTimeout(jui, 2000);
}

function jui() {
	require(["jquery_ui"], function() {
		alert('jquery_ui');
	});
}
