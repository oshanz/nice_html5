/*
 * @author Waruna Oshan Wisumperuma
 * @contact warunaoshan@gmail.com
 */

require(["jquery"], function() {
    $(function() {
        $('#1').html(jQuery.fn.jquery);
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
    setTimeout(jq, 2000);
}

function jq() {
    require(["jquery"], function() {
        alert('jquery');
    });
}