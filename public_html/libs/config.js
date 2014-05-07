/*
 * @author Waruna Oshan Wisumperuma
 * @contact warunaoshan@gmail.com
 */
requirejs.config({
    baseUrl: 'libs',
    paths: {
        'jquery': 'jquery-2.1.0.min',
        'jquery_ui': 'jquery-ui/jquery-ui.min',
        'jquery_mobile': 'jquery-mobile/jquery.mobile-1.4.2.min',
        'underscore': 'underscore-min',
        'backbone': 'backbone-min'
    },
    shim: {
        'backbone': {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        'jquery_ui': ["jquery"],
        'jquery_mobile': ["jquery"]
    }
});