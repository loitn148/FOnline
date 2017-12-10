// JavaScript source code
$(document).ready(function () {
    $(".btn-plus").click(function () {
        $(".child-menu").animate({
            height: 'toggle'
        });
    });
    $("#btn-menu").click(function () {
        $(".r-menu").slideToggle();
    });
});