/*
 * @author Waruna Oshan Wisumperuma
 * @contact warunaoshan@gmail.com
 */

define(["jquery"], function() {
	$(function() {
		$('#1').html('wow');
	});
	setTimeout(continueExecution, 5000);
});

function continueExecution() {
	if (1 == 2) {
		require(["underscore"], function() {
			_.each([1, 2], alert);
		});
	} else {
		require(["jquery_ui"], function() {
			alert('jquery_ui');
		});
	}
}