/*global $*/
$(document).ready(function () {
    "use strict";
    $("#envix").click(function () {
        $(".kayimboc, .zer0fuxc, .futuresensec").hide();
        $(".envixc").show();
    });
    $("#kayimbo").click(function () {
        $(".envixc, .zer0fuxc, .futuresensec").hide();
        $(".kayimboc").show();
    });
    $("#futuresense").click(function () {
        $(".kayimboc, .zer0fuxc, .envixc").hide();
        $(".futuresensec").show();
    });
    $("#zer0fux").click(function () {
        $(".kayimboc, .envixc, .futuresensec").hide();
        $(".zer0fuxc").show();
    });
    $("#all").click(function () {
        $(".envixc, .zer0fuxc, .kayimboc, .futuresensec").show();
    });
    
    $("#jellyfishart").click(function () {
        $(".envix, .envixbig, .jellybig").hide();
        $(".jelly").show();
    });
    $("#envixart").click(function () {
        $(".jelly, .jellybig, .envixbig").hide();
        $(".envix").show();
    });
    $("#allart").click(function () {
        $(".envixbig, .jellybig").hide();
        $(".jelly, .envix").show();
    });
});
