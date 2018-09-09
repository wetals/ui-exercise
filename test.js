$(function () {
    var main = $(".main");

    $(".navigation__sidebar").on("click", function (event) {
        event.preventDefault();
        main.hasClass("sidebar-active") ? main.removeClass("sidebar-active") : main.addClass("sidebar-active");
    });

});